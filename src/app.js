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
var program = createProgram(gl, vertexShaderText, fragmentShaderText);

var locator = {};

assignLocator(gl, program, locator);

var textureUrl = "texture/sob.png";
var customTexture = loadTexture(gl, textureUrl, drawScene);

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

gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

// Initialize camera
var target = [0, 0, 0];
var up = [0, 1, 0];

var centerPoints = centerOfMass([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

function drawScene() {
    // ------ Start Initialization --------
    updateState();

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

    // gl.uniform1i(textureTypeLocation, state.texture_type);

    gl.uniform1i(locator.useShadingLocation, state.is_shading);

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

    // Compute model matrix for model transformation
    var modelMatrix = m4.identity();

    modelMatrix = m4.scale(
        modelMatrix,
        state.object_references[state.selected_component].transform.scaling.x,
        state.object_references[state.selected_component].transform.scaling.y,
        state.object_references[state.selected_component].transform.scaling.z
    );

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

    gl.uniformMatrix4fv(locator.viewUniformLocation, false, viewMatrix);

    gl.uniformMatrix4fv(
        locator.projectionUniformLocation,
        false,
        projectionMatrix
    );

    gl.uniform3fv(locator.worldCameraPositionLocation, cameraPos);

    gl.uniformMatrix4fv(
        locator.normalUniformLocation,
        false,
        m4.transpose(m4.inverse(modelMatrix))
    );

    objectDraw(gl, state.model.object);
}

function main() {
    // Scene drawer
    drawScene();
}

function objectDraw(gl, object) {
    // Set texture coordinate
    gl.uniform1i(locator.textureTypeLocation, object.texture_type);

    setBuffer(
        gl,
        textureCoordBuffer,
        object.texture_coords,
        locator.textureCoordLocation,
        2
    );

    gl.uniform1i(locator.samplerImageLocation, 0);
    gl.uniform1i(locator.samplerEnvironmentLocation, 1);
    gl.uniform1i(locator.samplerBumpLocation, 2);
    // Set the object model_matrix
    var local_model_matrix = m4.multiply(
        object.model_matrix,
        state.object_references["Root"].model_matrix
    );
    gl.uniformMatrix4fv(
        locator.modelUniformLocation,
        false,
        local_model_matrix
    );

    for (var i = 0; i < object.position.length; i++) {
        var coordinates = object.position[i];
        var vectors = calculateTBN(coordinates);
        var tangents = vectors.tangents;
        var bitangents = vectors.bitangents;
        var normals = vectors.normals;

        // Set position buffer
        setBuffer(
            gl,
            positionBuffer,
            coordinates,
            locator.positionAttribLocation,
            3
        );

        setBuffer(
            gl,
            tangentBuffer,
            tangents,
            locator.tangentAttribLocation,
            3
        );

        setBuffer(
            gl,
            bitangentBuffer,
            bitangents,
            locator.bitangentAttribLocation,
            3
        );

        setBuffer(gl, normalBuffer, normals, locator.normalAttribLocation, 3);

        gl.drawArrays(gl.TRIANGLE_FAN, 0, object.position[i].length / 3);
    }

    for (let i = 0; i < object.children.length; i++) {
        objectDraw(gl, object.children[i].object);
    }
}

function restartTexture(url) {
    gl.deleteTexture(customTexture);

    customTexture = loadTexture(gl, url, drawScene);
}

window.onload = main;
