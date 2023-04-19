function assignLocator(gl, program, locator) {
    locator["modelUniformLocation"] = gl.getUniformLocation(program, "u_model");
    locator["viewUniformLocation"] = gl.getUniformLocation(program, "u_view");
    locator["projectionUniformLocation"] = gl.getUniformLocation(
        program,
        "u_projection"
    );
    locator["normalUniformLocation"] = gl.getUniformLocation(
        program,
        "u_normal"
    );

    locator["tangentAttribLocation"] = gl.getAttribLocation(
        program,
        "a_tangent"
    );
    locator["bitangentAttribLocation"] = gl.getAttribLocation(
        program,
        "a_bitangent"
    );
    locator["normalAttribLocation"] = gl.getAttribLocation(program, "a_normal");
    locator["positionAttribLocation"] = gl.getAttribLocation(
        program,
        "a_position"
    );
    locator["colorAttribLocation"] = gl.getAttribLocation(program, "a_color");
    locator["textureCoordLocation"] = gl.getAttribLocation(
        program,
        "a_texCoord"
    );
    locator["samplerImageLocation"] = gl.getUniformLocation(
        program,
        "u_samplerImage"
    );
    locator["samplerEnvironmentLocation"] = gl.getUniformLocation(
        program,
        "u_samplerEnvironment"
    );
    locator["samplerBumpLocation"] = gl.getUniformLocation(
        program,
        "u_samplerBump"
    );
    locator["worldCameraPositionLocation"] = gl.getUniformLocation(
        program,
        "u_worldCameraPosition"
    );
    locator["textureTypeLocation"] = gl.getUniformLocation(
        program,
        "u_textureMode"
    );
    locator["useShadingLocation"] = gl.getUniformLocation(
        program,
        "useShading"
    );
}
