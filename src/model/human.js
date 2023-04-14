var human = {
  object: {
    name: "Body",
    // prettier-ignore
    position: [
      [ // front
        0.3, 0.4, 0.15,
        -0.3, 0.4, 0.15,
        -0.3, -0.4, 0.15,
        0.3, -0.4, 0.15,
      ],
      [ // back
       -0.3, -0.4, -0.15,
       -0.3, 0.4, -0.15,
       0.3, 0.4, -0.15,
        0.3, -0.4, -0.15,
      ],
      [ // left
        -0.3, 0.4, 0.15,
        -0.3, 0.4, -0.15,
        -0.3, -0.4, -0.15,
        -0.3, -0.4, 0.15,
      ],
      [ // right
        0.3, 0.4, -0.15,
        0.3, 0.4, 0.15,
        0.3, -0.4, 0.15,
        0.3, -0.4, -0.15,
      ],
      [ // top
        0.3, 0.4, -0.15,
        -0.3, 0.4, -0.15,
        -0.3, 0.4, 0.2,
        0.3, 0.4, 0.15,
      ],
      [ // bottom
        0.3, -0.4, 0.15,
        -0.3, -0.4, 0.15,
        -0.3, -0.4, -0.15,
        0.3, -0.4, -0.15,
      ]
    ],
    color: [],
    texture_coords: [],
    children: [
      {
        object: {
          name: "Head",
          // prettier-ignore
          position: [
            [ // front
              0.2, 0.75, 0.2,
              -0.2, 0.75, 0.2,
              -0.2, 0.4, 0.2,
              0.2, 0.4, 0.2,
            ],
            [ // back
              -0.2, 0.4, -0.2,
              -0.2, 0.75, -0.2,
              0.2, 0.75, -0.2,
              0.2, 0.4, -0.2,
            ],
            [ // left
              -0.2, 0.75, 0.2,
              -0.2, 0.75, -0.2,
              -0.2, 0.4, -0.2,
              -0.2, 0.4, 0.2,
            ],
            [ // right
              0.2, 0.75, -0.2,
              0.2, 0.75, 0.2,
              0.2, 0.4, 0.2,
              0.2, 0.4, -0.2,
            ],
            [ // top
              0.2, 0.75, -0.2,
              -0.2, 0.75, -0.2,
              -0.2, 0.75, 0.2,
              0.2, 0.75, 0.2,
            ],
            [ // bottom
              0.2, 0.4, 0.2,
              -0.2, 0.4, 0.2,
              -0.2, 0.4, -0.2,
              0.2, 0.4, -0.2,
            ]
          ],
          color: [],
          texture_coords: [],
          children: [],
        }
      },
      {
        object: {
          name: "LeftShoulder",
          // prettier-ignore
          position: [
            [ // front
              0.55, 0.4, 0.15,
              0.3, 0.4, 0.15,
              0.3, 0.0, 0.15,
              0.55, 0.0, 0.15,
            ],
            [ // back
              0.3, 0.0, -0.15,
              0.3, 0.4, -0.15,
              0.55, 0.4, -0.15,
              0.55, 0.0, -0.15,
            ],
            [ // left
              0.3, 0.4, 0.15,
              0.3, 0.4, -0.15,
              0.3, 0.0, -0.15,
              0.3, 0.0, 0.15,
            ],
            [ // right
              0.55, 0.4, -0.15,
              0.55, 0.4, 0.15,
              0.55, 0.0, 0.15,
              0.55, 0.0, -0.15,
            ],
            [ // top
              0.55, 0.4, -0.15,
              0.3, 0.4, -0.15,
              0.3, 0.4, 0.15,
              0.55, 0.4, 0.15,
            ],
            [ // bottom
              0.55, 0.0, 0.15,
              0.3, 0.0, 0.15,
              0.3, 0.0, -0.15,
              0.55, 0.0, -0.15,
            ],
          ],
          color: [],
          texture_coords: [],
          children: [
            {
              object: {
                name: "LeftArm",
                // prettier-ignore
                position: [
                  [ // front
                    0.52, 0.0, 0.13,
                    0.33, 0.0, 0.13,
                    0.33, -0.4, 0.13,
                    0.52, -0.4, 0.13,
                  ],
                  [ // back
                    0.33, -0.4, -0.13,
                    0.33, 0.0, -0.13,
                    0.52, 0.0, -0.13,
                    0.52, -0.4, -0.13,
                  ],
                  [ // left
                    0.33, 0.0, 0.13,
                    0.33, 0.0, -0.13,
                    0.33, -0.4, -0.13,
                    0.33, -0.4, 0.13,
                  ],
                  [ // right
                    0.52, 0.0, -0.13,
                    0.52, 0.0, 0.13,
                    0.52, -0.4, 0.13,
                    0.52, -0.4, -0.13,
                  ],
                  [ // top
                    0.52, 0.0, -0.13,
                    0.33, 0.0, -0.13,
                    0.33, 0.0, 0.13,
                    0.52, 0.0, 0.13,
                  ],
                  [
                    // bottom
                    0.52, -0.4, 0.13,
                    0.33, -0.4, 0.13,
                    0.33, -0.4, -0.13,
                    0.52, -0.4, -0.13,
                  ]
                ],
                color: [],
                texture_coords: [],
                children: [],
              },
            },
          ]
        }
      },
      {
        object: {
          name: "RightShoulder",
          // prettier-ignore
          position: [
            [ // front
              -0.3, 0.0, 0.15,
              -0.3, 0.4, 0.15,
              -0.55, 0.4, 0.15,
              -0.55, 0.0, 0.15,
            ],
            [ // back
              -0.55, 0.0, -0.15,
              -0.55, 0.4, -0.15,
              -0.3, 0.4, -0.15,
              -0.3, 0.0, -0.15,
            ],
            [ // left
              -0.3, 0.0, -0.15,
              -0.3, 0.4, -0.15,
              -0.3, 0.4, 0.15,
              -0.3, 0.0, 0.15,
            ],
            [ // right
              -0.55, 0.0, 0.15,
              -0.55, 0.4, 0.15,
              -0.55, 0.4, -0.15,
              -0.55, 0.0, -0.15,
            ],
            [ // top
              -0.3, 0.4, 0.15,
              -0.3, 0.4, -0.15,
              -0.55, 0.4, -0.15,
              -0.55, 0.4, 0.15,
            ],
            [ // bottom
              -0.3, 0.0, -0.15,
              -0.3, 0.0, 0.15,
              -0.55, 0.0, 0.15,
              -0.55, 0.0, -0.15,
            ]
          ],
          color: [],
          texture_coords: [],
          children: [
            {
              object: {
                name: "RightArm",
                // prettier-ignore
                position: [
                  [ // front
                  -0.33, -0.4, 0.13,
                  -0.33, 0.0, 0.13,
                  -0.52, 0.0, 0.13,
                    -0.52, -0.4, 0.13,
                  ],
                  [ // back
                  -0.52, 0.0, -0.13,
                  -0.33, 0.0, -0.13,
                  -0.33, -0.4, -0.13,
                    -0.52, -0.4, -0.13,
                  ],
                  [ // left
                  -0.33, -0.4, -0.13,
                  -0.33, 0.0, -0.13,
                  -0.33, 0.0, 0.13,
                    -0.33, -0.4, 0.13,
                  ],
                  [ // right
                  -0.52, -0.4, 0.13,
                  -0.52, 0.0, 0.13,
                  -0.52, 0.0, -0.13,
                    -0.52, -0.4, -0.13,
                  ],
                  [ // top
                  -0.33, 0.0, 0.13,
                  -0.33, 0.0, -0.13,
                  -0.52, 0.0, -0.13,
                    -0.52, 0.0, 0.13,
                  ],
                  [
                    // bottom
                    -0.33, -0.4, -0.13,
                    -0.33, -0.4, 0.13,
                    -0.52, -0.4, 0.13,
                    -0.52, -0.4, -0.13,
                  ]
                ],
                color: [],
                texture_coords: [],
                children: [
                  {
                    object: {
                      name: "LeftArm",
                      // prettier-ignore
                      position: [
                        [ // front
                          0.52, 0.0, 0.13,
                          0.33, 0.0, 0.13,
                          0.33, -0.4, 0.13,
                          0.52, -0.4, 0.13,
                        ],
                        [ // back
                          0.33, -0.4, -0.13,
                          0.33, 0.0, -0.13,
                          0.52, 0.0, -0.13,
                          0.52, -0.4, -0.13,
                        ],
                        [ // left
                          0.33, 0.0, 0.13,
                          0.33, 0.0, -0.13,
                          0.33, -0.4, -0.13,
                          0.33, -0.4, 0.13,
                        ],
                        [ // right
                          0.52, 0.0, -0.13,
                          0.52, 0.0, 0.13,
                          0.52, -0.4, 0.13,
                          0.52, -0.4, -0.13,
                        ],
                        [ // top
                          0.52, 0.0, -0.13,
                          0.33, 0.0, -0.13,
                          0.33, 0.0, 0.13,
                          0.52, 0.0, 0.13,
                        ],
                        [
                          // bottom
                          0.52, -0.4, 0.13,
                          0.33, -0.4, 0.13,
                          0.33, -0.4, -0.13,
                          0.52, -0.4, -0.13,
                        ]
                      ],
                      color: [],
                      texture_coords: [],
                      children: [],
                    },
                  },
                ],
              },
            },
          ],
        }
      },
      {
        object: {
          name: "LeftLeg",
          // prettier-ignore
          position: [
            [ // front
              0.28, 0.0, 0.13,
              0.02, 0.0, 0.13,
              0.02, -1.0, 0.13,
              0.28, -1.0, 0.13,
            ],
            [ // back
              0.02, -1.0, -0.13,
              0.02, 0.0, -0.13,
              0.28, 0.0, -0.13,
              0.28, -1.0, -0.13,
            ],
            [ // left
              0.02, 0.0, 0.13,
              0.02, 0.0, -0.13,
              0.02, -1.0, -0.13,
              0.02, -1.0, 0.13,
            ],
            [ // right
              0.28, 0.0, -0.13,
              0.28, 0.0, 0.13,
              0.28, -1.0, 0.13,
              0.28, -1.0, -0.13,
            ],
            [
              // top
              0.28, 0.0, 0.13,
              0.02, 0.0, 0.13,
              0.02, 0.0, -0.13,
              0.28, 0.0, -0.13,
            ],
            [
              // bottom
              0.02, -1.0, 0.13,
              0.02, -1.0, -0.13,
              0.28, -1.0, -0.13,
              0.28, -1.0, 0.13,
            ],
          ],
          color: [],
          texture_coords: [],
          children: [],
        },
      },
      {
        object: {
          name: "RightLeg",
          // prettier-ignore
          position: [
            [ // front
              -0.02, -1.0, 0.13,
              -0.02, 0.0, 0.13,
              -0.28, 0.0, 0.13,
              -0.28, -1.0, 0.13,
            ],
            [ // back
              -0.28, 0.0, -0.13,
              -0.02, 0.0, -0.13,
              -0.02, -1.0, -0.13,
              -0.28, -1.0, -0.13,
            ],
            [ // left
              -0.02, -1.0, -0.13,
              -0.02, 0.0, -0.13,
              -0.02, 0.0, 0.13,
              -0.02, -1.0, 0.13,
            ],
            [ // right
              -0.28, -1.0, 0.13,
              -0.28, 0.0, 0.13,
              -0.28, 0.0, -0.13,
              -0.28, -1.0, -0.13,
            ],
            [
              // top
              -0.02, 0.0, -0.13,
              -0.02, 0.0, 0.13,
              -0.28, 0.0, 0.13,
              -0.28, 0.0, -0.13,
            ],
            [
              // bottom
              -0.28, -1.0, -0.13,
              -0.02, -1.0, -0.13,
              -0.02, -1.0, 0.13,
              -0.28, -1.0, 0.13,
            ],
          ],
          color: [],
          texture_coords: [],
          children: [],
        }
      }
    ]
  }
}