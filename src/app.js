// -------- Initial Setup --------
// Get the canvas element
var canvas = document.getElementById("canvas");

// Create a WebGL context
/** @type {WebGLRenderingContext|null} */
var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

if (!gl) {
    alert("Your browser does not support WebGL");
}

// Program without shading
var program_no_shade = createProgram(gl, vertexShaderText, fragmentShaderText);

var customTexture = loadTexture(gl, "texture/sob.png");

var bumpTexture = loadBump(gl, "texture/bump_normal.png");

var environmentTexture = loadEnvironmentTexture(gl);

// Create position buffer
var positionBuffer = gl.createBuffer();

// Create color buffer
var colorBuffer = gl.createBuffer();

// Create normal buffer
var tangentBuffer = gl.createBuffer();
var bitangentBuffer = gl.createBuffer();
var normalBuffer = gl.createBuffer();

// init texture
var textureCoordBuffer = initTextureBuffer(gl);

// Initialize camera
var target = [0, 0, 0];
var up = [0, 1, 0];

var centerPoints = centerOfMass([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

function drawScene() {
    // ------ Start Initialization --------
    updateState();

    var program = program_no_shade;

    // Get attribute and uniforms locations
    var modelUniformLocation = gl.getUniformLocation(program, "u_model");
    var viewUniformLocation = gl.getUniformLocation(program, "u_view");
    var projectionUniformLocation = gl.getUniformLocation(
        program,
        "u_projection"
    );
    var normalUniformLocation = gl.getUniformLocation(program, "u_normal");

    var tangentAttribLocation = gl.getAttribLocation(program, "a_tangent");
    var bitangentAttribLocation = gl.getAttribLocation(program, "a_bitangent");
    var normalAttribLocation = gl.getAttribLocation(program, "a_normal");
    var positionAttribLocation = gl.getAttribLocation(program, "a_position");
    var colorAttribLocation = gl.getAttribLocation(program, "a_color");
    var textureCoordLocation = gl.getAttribLocation(program, "a_texCoord");
    var samplerImageLocation = gl.getUniformLocation(program, "u_samplerImage");
    var samplerEnvironmentLocation = gl.getUniformLocation(
        program,
        "u_samplerEnvironment"
    );
    var samplerBumpLocation = gl.getUniformLocation(program, "u_samplerBump");
    var worldCameraPositionLocation = gl.getUniformLocation(
        program,
        "u_worldCameraPosition"
    );
    var textureTypeLocation = gl.getUniformLocation(program, "u_textureMode");
    var useShadingLocation = gl.getUniformLocation(program, "useShading");

    // Set the viewport
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Clear the canvas
    gl.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Turn on culling. By default backfacing triangles
    // will be culled.
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);

    // Enable the depth buffer
    gl.enable(gl.DEPTH_TEST);

    // Use the program (shaders)
    gl.useProgram(program);

    // ------ End Initialization --------

    gl.uniform1i(textureTypeLocation, state.texture_type);

    gl.uniform1i(useShadingLocation, state.is_shading);

    // Define the projection matrix
    var projectionMatrix = m4.orthographic(-1, 1, -1, 1, -1000, 1000);

    // Define the camera matrix
    var cameraPos = sphericalToCartesian(
        cameraAngleRadians,
        cameraAngleRadians2,
        cameraRadius
    );
    var cameraDirection = m4.normalize(subtractVectors(cameraPos, target));
    var cameraRight = m4.normalize(cross(up, cameraDirection));
    var cameraUp = cross(cameraDirection, cameraRight);
    var viewMatrix = m4.lookAt(
        cameraPos,
        cameraDirection,
        cameraRight,
        cameraUp
    );
    // viewMatrix = m4.inverse(viewMatrix);


    // Compute a world matrix
    var modelMatrix = m4.identity();

    modelMatrix = m4.scale(
        modelMatrix,
        state.object_references[state.selected_component].transform.scaling.x,
        state.object_references[state.selected_component].transform.scaling.y,
        state.object_references[state.selected_component].transform.scaling.z
    );

    // calculate center point of the object

    if (state.selected_component != "Root") {
        modelMatrix = m4.translate(
            modelMatrix,
            centerPoints[0] * -1,
            centerPoints[1] * -1,
            centerPoints[2] * -1
        );
    }

    modelMatrix = m4.xRotate(
        modelMatrix,
        degToRad(
            state.object_references[state.selected_component].transform.rotation
                .x
        )
    );
    modelMatrix = m4.yRotate(
        modelMatrix,
        degToRad(
            state.object_references[state.selected_component].transform.rotation
                .y
        )
    );
    modelMatrix = m4.zRotate(
        modelMatrix,
        degToRad(
            state.object_references[state.selected_component].transform.rotation
                .z
        )
    );

    if (state.selected_component != "Root") {
        modelMatrix = m4.translate(
            modelMatrix,
            centerPoints[0] * 1,
            centerPoints[1] * 1,
            centerPoints[2] * 1
        );
    }

    modelMatrix = m4.translate(
        modelMatrix,
        state.object_references[state.selected_component].transform.translation
            .x,
        state.object_references[state.selected_component].transform.translation
            .y,
        state.object_references[state.selected_component].transform.translation
            .z
    );

    if (
        Object.hasOwnProperty.call(
            state.object_references,
            state.selected_component
        )
    ) {
        state.object_references[state.selected_component].model_matrix =
            Object.assign([], modelMatrix);
    }

    // If the projection is perspective, multiply the matrices
    if (state.projection_type === "perspective") {
        projectionMatrix = m4.perspective(
            degToRad(state.view_field),
            canvas.width / canvas.height,
            0.1,
            2000
        );
    } else if (state.projection_type === "oblique") {
        projectionMatrix = m4.oblique(
            state.f_factor,
            degToRad(state.beta_angle),
            -1000,
            1000
        );
    }

    gl.uniformMatrix4fv(viewUniformLocation, false, viewMatrix);

    gl.uniformMatrix4fv(projectionUniformLocation, false, projectionMatrix);

    gl.uniform3fv(worldCameraPositionLocation, cameraPos);

    gl.uniformMatrix4fv(
        normalUniformLocation,
        false,
        m4.transpose(m4.inverse(modelMatrix))
    );

    // Set the color to use
    // gl.uniform4fv(colorUniformLocation, [14 / 255, 165 / 255, 233 / 255, 1]); // blue

    // Set texture coordinate
    setBuffer(
        gl,
        textureCoordBuffer,
        state.model.object.texture_coords,
        textureCoordLocation,
        2
    );

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    gl.uniform1i(samplerImageLocation, 0);
    gl.uniform1i(samplerEnvironmentLocation, 1);
    gl.uniform1i(samplerBumpLocation, 2);

    objectDraw(
        gl,
        state.model.object,
        modelUniformLocation,
        normalUniformLocation,
        tangentAttribLocation,
        bitangentAttribLocation,
        normalAttribLocation,
        positionAttribLocation,
        colorAttribLocation
    );
}

function main() {
    // Scene drawer
    drawScene();
}

function objectDraw(
    gl,
    object,
    modelUniformLocation,
    normalUniformLocation,
    tangentAttribLocation,
    bitangentAttribLocation,
    normalAttribLocation,
    positionAttribLocation,
    colorAttribLocation
) {
    // Set the object model_matrix
    var local_model_matrix = m4.multiply(
        object.model_matrix,
        state.object_references["Root"].model_matrix
    );
    gl.uniformMatrix4fv(modelUniformLocation, false, local_model_matrix);

    for (var i = 0; i < object.position.length; i++) {
        var coordinates = object.position[i];
        var vectors = calculateTBN(coordinates);
        var tangents = vectors.tangents;
        var bitangents = vectors.bitangents;
        var normals = vectors.normals;

        // Set position buffer
        setBuffer(gl, positionBuffer, coordinates, positionAttribLocation, 3);

        setBuffer(gl, tangentBuffer, tangents, tangentAttribLocation, 3);

        setBuffer(gl, bitangentBuffer, bitangents, bitangentAttribLocation, 3);

        setBuffer(gl, normalBuffer, normals, normalAttribLocation, 3);

        gl.drawArrays(gl.TRIANGLE_FAN, 0, object.position[i].length / 3);
    }

    for (let i = 0; i < object.children.length; i++) {
        objectDraw(
            gl,
            object.children[i].object,
            modelUniformLocation,
            normalUniformLocation,
            tangentAttribLocation,
            bitangentAttribLocation,
            normalAttribLocation,
            positionAttribLocation,
            colorAttribLocation
        );
    }
}

window.onload = main;
