var filledCube = {
  object: {
    name: 'cube',
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
        0.2, -0.2, 0.2,
        0.2, 0.2, 0.2, 
        -0.2, 0.2, 0.2, 
        -0.2, -0.2, 0.2,
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
      // // front face
      0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0,
      // back face
      0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0,
      // left face
      0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0,
      // right face
      0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0,
      // top face
      0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0,
      // bottom face
      0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0,
    ],
    children: [],
    normal: [],
  },
};

function dfsColorFilling(object) {
  for (let i = 0; i < object.position.length; i++) {
      var r_color = Math.random();
      var g_color = Math.random();
      var b_color = Math.random();
      // prettier-ignore
      object.color.push([
          r_color, g_color, b_color,
          r_color, g_color, b_color,
          r_color, g_color, b_color,
          r_color, g_color, b_color,
      ])
  }
  // prettier-ignore
  object.texture_coords =  
  [
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
]
  for (let i = 0; i < object.children.length; i++) {
      dfsColorFilling(object.children[i].object);
  }
}

dfsColorFilling(filledCube.object);