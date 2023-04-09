var filledCube = {
    // prettier-ignore
    position: [
        [
            // back face
            -0.2, -0.2, -0.2, 
            -0.2, 0.2, -0.2, 
            0.2, 0.2, -0.2, 
            0.2, -0.2, -0.2,
        ],
        [
            // front face
            0.2, 0.2, 0.2, 
            -0.2, 0.2, 0.2, 
            -0.2, -0.2, 0.2, 
            0.2, -0.2, 0.2,
        ],
        [
            // left face
            -0.2, -0.2, 0.2, 
            -0.2, 0.2, 0.2, 
            -0.2, 0.2, -0.2, 
            -0.2, -0.2, -0.2,
        ],
        [
            // right face
            0.2, -0.2, 0.2, 
            0.2, -0.2, -0.2, 
            0.2, 0.2, -0.2, 
            0.2, 0.2, 0.2,
        ],
        [
            // top face
            0.2, 0.2, -0.2, 
            -0.2, 0.2, -0.2,
            -0.2, 0.2, 0.2, 
            0.2, 0.2, 0.2,
        ],
        [
            // bottom face
            0.2, -0.2, -0.2, 
            0.2, -0.2, 0.2, 
            -0.2, -0.2, 0.2, 
            -0.2, -0.2, -0.2,
        ],
    ],
    color: [],
    texture_coords: [
        // front face
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // back face
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // left face
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // right face
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // top face
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // bottom face
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    ],
};

for (var i = 0; i < filledCube.position.length; i++) {
    var r_color = Math.random();
    var g_color = Math.random();
    var b_color = Math.random();

    // prettier-ignore
    filledCube.color.push([
      r_color, g_color, b_color,
      r_color, g_color, b_color,
      r_color, g_color, b_color,
      r_color, g_color, b_color,
  ]);
}
