// -------- Initial Setup --------
// Get the canvas element
var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");

// Create a WebGL context
/** @type {WebGLRenderingContext|null} */
var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
/** @type {WebGLRenderingContext|null} */
var gl2 =
    canvas2.getContext("webgl") || canvas2.getContext("experimental-webgl");

if (!gl) {
    alert("Your browser does not support WebGL");
}
// Setup GLSL program
// Program with shading
var program_with_shade = createProgram(
    gl,
    vertexShaderTextShading,
    fragmentShaderTextShading
);

// Program without shading
var program_no_shade = createProgram(gl, vertexShaderText, fragmentShaderText);

var customTexture = loadTexture(gl, "texture/sob.png");

var environmentTexture = loadEnvironmentTexture(gl);

// Create position buffer
var positionBuffer = gl.createBuffer();

// Create color buffer
var colorBuffer = gl.createBuffer();

// Create normal buffer
var normalBuffer = gl.createBuffer();

// init texture
var textureCoordBuffer = initTextureBuffer(gl);

// Initialize camera
var target = [0, 0, 0];
var up = [0, 1, 0];

function drawScene() {
    // ------ Start Initialization --------
    updateState();
    var program = state.is_shading ? program_with_shade : program_no_shade;

    // Get attribute and uniforms locations
    var modelUniformLocation = gl.getUniformLocation(program, "u_model");
    var viewUniformLocation = gl.getUniformLocation(program, "u_view");
    var projectionUniformLocation = gl.getUniformLocation(
        program,
        "u_projection"
    );
    var normalUniformLocation = gl.getUniformLocation(program, "u_normal");

    var normalAttribLocation = gl.getAttribLocation(program, "a_normal");
    var positionAttribLocation = gl.getAttribLocation(program, "a_position");
    var colorAttribLocation = gl.getAttribLocation(program, "a_color");
    var textureCoordLocation = gl.getAttribLocation(program, "a_texCoord");
    var textureLocation = gl.getUniformLocation(program, "u_texture");
    var worldCameraPositionLocation = gl.getUniformLocation(
        program,
        "u_worldCameraPosition"
    );

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
    var cameraMatrix = m4.lookAt(
        cameraPos,
        cameraDirection,
        cameraRight,
        cameraUp
    );
    var viewMatrix = m4.inverse(cameraMatrix);
    

    // Compute a world matrix
    var modelMatrix = m4.identity();

    modelMatrix = m4.scale(
        modelMatrix,
        state.scaling.x,
        state.scaling.y,
        state.scaling.z
    );

    if (state.model_type === "loaded") {
        modelMatrix = m4.translate(
            modelMatrix,
            state.center_points[0] * -1,
            state.center_points[1] * -1,
            state.center_points[2] * -1
        );
    }

    modelMatrix = m4.xRotate(modelMatrix, degToRad(state.rotation.x));
    modelMatrix = m4.yRotate(modelMatrix, degToRad(state.rotation.y));
    modelMatrix = m4.zRotate(modelMatrix, degToRad(state.rotation.z));

    if (state.model_type === "loaded") {
        modelMatrix = m4.translate(
            modelMatrix,
            state.center_points[0],
            state.center_points[1],
            state.center_points[2]
        );
    }

    modelMatrix = m4.translate(
        modelMatrix,
        state.translation.x,
        state.translation.y,
        state.translation.z
    );

    // If the projection is perspective, multiply the matrices
    if (state.projection_type === "perspective") {
        projectionMatrix = m4.perspective(
            degToRad(state.view_field),
            canvas.width / canvas.height,
            0.1,
            1000
        );
    } else if (state.projection_type === "oblique") {
        projectionMatrix = m4.oblique(
            state.f_factor,
            degToRad(state.beta_angle),
            -1000,
            1000
        );
    }

    gl.uniformMatrix4fv(modelUniformLocation, false, modelMatrix);

    gl.uniformMatrix4fv(viewUniformLocation, false, viewMatrix);

    gl.uniformMatrix4fv(projectionUniformLocation, false, projectionMatrix);

    gl.uniform3fv(worldCameraPositionLocation, cameraPos);

    // Set the color to use
    // gl.uniform4fv(colorUniformLocation, [14 / 255, 165 / 255, 233 / 255, 1]); // blue

    // Set texture coordinate
    setBuffer(
        gl,
        textureCoordBuffer,
        state.model.texture_coords,
        textureCoordLocation,
        2,
        modelMatrix
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(state.model.texture_coords),
        gl.STATIC_DRAW
    );

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    // Draw the model here
    var model = state.model;

    objectDraw(
        gl,
        model.object,
        normalUniformLocation,
        normalAttribLocation,
        positionAttribLocation,
        colorAttribLocation,
        textureLocation,
        modelMatrix
    );
}

function drawScene2() {
    // Set the viewport
    // gl2.viewport(0, 0, gl2.canvas2.width, gl2.canvas2.height);

    // Clear the canvas
    gl2.clearColor(1, 1, 1, 1);
    gl2.clear(gl2.COLOR_BUFFER_BIT | gl2.DEPTH_BUFFER_BIT);

    // Turn on culling. By default backfacing triangles
    // will be culled.
    gl2.enable(gl2.CULL_FACE);

    // Enable the depth buffer
    gl2.enable(gl2.DEPTH_TEST);
}

function main() {
    // Scene drawer
    drawScene();
    drawScene2();
}

function objectDraw(
    gl,
    object,
    normalUniformLocation,
    normalAttribLocation,
    positionAttribLocation,
    colorAttribLocation,
    textureLocation,
    modelMatrix
) {
    // Set indices
    var indices = positionToIndices(object.position);
    let indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices),
        gl.STATIC_DRAW
    );

    var normal = normalVectorsObject(object.position.flat(), indices);

    for (var i = 0; i < object.position.length; i++) {
        // Set position buffer
        setBuffer(
            gl,
            positionBuffer,
            object.position[i],
            positionAttribLocation,
            3
        );

        if (state.is_shading) {
            gl.vertexAttribPointer(
                normalAttribLocation,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );
            gl.enableVertexAttribArray(normalAttribLocation);

            // Set normal buffer
            var normalArray = [
                normal[4 * i],
                normal[4 * i + 1],
                normal[4 * i + 2],
                normal[4 * i + 3],
            ];

            gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
            gl.bufferData(
                gl.ARRAY_BUFFER,
                new Float32Array(normalArray),
                gl.STATIC_DRAW
            );

            gl.uniformMatrix4fv(
                normalUniformLocation,
                false,
                m4.transpose(m4.inverse(modelMatrix))
            );
        } else {

        }

        gl.uniform1i(textureLocation, 0);
        // setBuffer(gl, colorBuffer, model.color[i], colorAttribLocation, 3);

        // gl.drawArrays(gl.TRIANGLE_FAN, 0, model.position[i].length / 3);
        // gl.drawArrays(gl.TRIANGLES, 0, model.position[i].length / 3);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
    for (let i = 0; i < object.children.length; i++) {
        objectDraw(
            gl,
            object.children[i].object,
            normalUniformLocation,
            normalAttribLocation,
            positionAttribLocation,
            colorAttribLocation,
            textureLocation,
            modelMatrix
        );
    }
}

window.onload = main;
