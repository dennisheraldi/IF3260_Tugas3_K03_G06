var human = {
  object: {
    name: 'Root',
    position: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    color: [],
    texture_type: 0,
    texture_coords: [],
    model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    transform: {
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      translation: {
        x: 0,
        y: 0,
        z: 0,
      },
      scaling: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    children: [
      {
        object: {
          name: 'Body',
          // prettier-ignore
          position: [
            [ // front
              0.3, 0.4, 0.15,
              -0.3, 0.4, 0.15,
              -0.3, -0.4, 0.15,
              0.3, -0.4, 0.15,
            ],
            [ // back
              -0.3, 0.4, -0.15,
              0.3, 0.4, -0.15,
              0.3, -0.4, -0.15,
              -0.3, -0.4, -0.15,
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
          texture_type: 0,
          model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          transform: {
            rotation: {
              x: 0,
              y: 0,
              z: 0,
            },
            translation: {
              x: 0,
              y: 0,
              z: 0,
            },
            scaling: {
              x: 1,
              y: 1,
              z: 1,
            },
          },
          children: [
            {
              object: {
                name: 'Head',
                // prettier-ignore
                position: [
                  [ // front
                    0.2, 0.75, 0.2,
                    -0.2, 0.75, 0.2,
                    -0.2, 0.4, 0.2,
                    0.2, 0.4, 0.2,
                  ],
                  [ // back
                    -0.2, 0.75, -0.2,
                    0.2, 0.75, -0.2,
                    0.2, 0.4, -0.2,
                    -0.2, 0.4, -0.2,
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
                texture_type: 0,
                model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                transform: {
                  rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  translation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  scaling: {
                    x: 1,
                    y: 1,
                    z: 1,
                  },
                },
                children: [],
              },
            },
            {
              object: {
                name: 'LeftShoulder',
                // prettier-ignore
                position: [
                  [ // front
                    0.55, 0.4, 0.15,
                    0.3, 0.4, 0.15,
                    0.3, 0.0, 0.15,
                    0.55, 0.0, 0.15,
                  ],
                  [ // back
                    0.3, 0.4, -0.15,
                    0.55, 0.4, -0.15,
                    0.55, 0.0, -0.15,
                    0.3, 0.0, -0.15,
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
                texture_type: 0,
                model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                transform: {
                  rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  translation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  scaling: {
                    x: 1,
                    y: 1,
                    z: 1,
                  },
                },
                children: [
                  {
                    object: {
                      name: 'LeftArm',
                      // prettier-ignore
                      position: [
                        [ // front
                          0.52, 0.0, 0.13,
                          0.33, 0.0, 0.13,
                          0.33, -0.4, 0.13,
                          0.52, -0.4, 0.13,
                        ],
                        [ // back
                          0.33, 0.0, -0.13,
                          0.52, 0.0, -0.13,
                          0.52, -0.4, -0.13,
                          0.33, -0.4, -0.13,
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
                      texture_type: 0,
                      model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                      transform: {
                        rotation: {
                          x: 0,
                          y: 0,
                          z: 0,
                        },
                        translation: {
                          x: 0,
                          y: 0,
                          z: 0,
                        },
                        scaling: {
                          x: 1,
                          y: 1,
                          z: 1,
                        },
                      },
                      children: [],
                    },
                  },
                ],
              },
            },
            {
              object: {
                name: 'RightShoulder',
                // prettier-ignore
                position: [
                  [ // front
                    -0.3, 0.4, 0.15,
                    -0.55, 0.4, 0.15,
                    -0.55, 0.0, 0.15,
                    -0.3, 0.0, 0.15,
                  ],
                  [ // back
                    -0.55, 0.4, -0.15,
                    -0.3, 0.4, -0.15,
                    -0.3, 0.0, -0.15,
                    -0.55, 0.0, -0.15,
                  ],
                  [ // left
                    -0.3, 0.0, -0.15,
                    -0.3, 0.4, -0.15,
                    -0.3, 0.4, 0.15,
                    -0.3, 0.0, 0.15,
                  ],
                  [ // right
                    -0.55, 0.4, 0.15,
                    -0.55, 0.4, -0.15,
                    -0.55, 0.0, -0.15,
                    -0.55, 0.0, 0.15,
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
                texture_type: 0,
                model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                transform: {
                  rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  translation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  scaling: {
                    x: 1,
                    y: 1,
                    z: 1,
                  },
                },
                children: [
                  {
                    object: {
                      name: 'RightArm',
                      // prettier-ignore
                      position: [
                        [ // front
                          -0.33, 0.0, 0.13,
                          -0.52, 0.0, 0.13,
                          -0.52, -0.4, 0.13,
                          -0.33, -0.4, 0.13,
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
                          -0.52, 0.0, 0.13,
                          -0.52, 0.0, -0.13,
                          -0.52, -0.4, -0.13,
                          -0.52, -0.4, 0.13,
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
                      texture_type: 0,
                      model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                      transform: {
                        rotation: {
                          x: 0,
                          y: 0,
                          z: 0,
                        },
                        translation: {
                          x: 0,
                          y: 0,
                          z: 0,
                        },
                        scaling: {
                          x: 1,
                          y: 1,
                          z: 1,
                        },
                      },
                      children: [],
                    },
                  },
                ],
              },
            },
            {
              object: {
                name: 'LeftLeg',
                // prettier-ignore
                position: [
                  [ // front
                    0.28, -0.4, 0.13,
                    0.02, -0.4, 0.13,
                    0.02, -1.0, 0.13,
                    0.28, -1.0, 0.13,
                  ],
                  [ // back
                    0.02, -0.4, -0.13,
                    0.28, -0.4, -0.13,
                    0.28, -1.0, -0.13,
                    0.02, -1.0, -0.13,
                  ],
                  [ // left
                    0.02, -0.4, 0.13,
                    0.02, -0.4, -0.13,
                    0.02, -1.0, -0.13,
                    0.02, -1.0, 0.13,
                  ],
                  [ // right
                    0.28, -0.4, -0.13,
                    0.28, -0.4, 0.13,
                    0.28, -1.0, 0.13,
                    0.28, -1.0, -0.13,
                  ],
                  [
                    // top
                    0.02, -0.4, -0.13,
                    0.02, -0.4, 0.13,
                    0.28, -0.4, 0.13,
                    0.28, -0.4, -0.13,
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
                texture_type: 0,
                model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                transform: {
                  rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  translation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  scaling: {
                    x: 1,
                    y: 1,
                    z: 1,
                  },
                },
                children: [],
              },
            },
            {
              object: {
                name: 'RightLeg',
                // prettier-ignore
                position: [
                  [ // front
                    -0.02, -0.4, 0.13,
                    -0.28, -0.4, 0.13,
                    -0.28, -1.0, 0.13,
                    -0.02, -1.0, 0.13,
                  ],
                  [ // back
                    -0.28, -0.4, -0.13,
                    -0.02, -0.4, -0.13,
                    -0.02, -1.0, -0.13,
                    -0.28, -1.0, -0.13,
                  ],
                  [ // left
                    -0.02, -1.0, -0.13,
                    -0.02, -0.4, -0.13,
                    -0.02, -0.4, 0.13,
                    -0.02, -1.0, 0.13,
                  ],
                  [ // right
                    -0.28, -0.4, 0.13,
                    -0.28, -0.4, -0.13,
                    -0.28, -1.0, -0.13,
                    -0.28, -1.0, 0.13,
                  ],
                  [
                    // top
                    -0.28, -0.4, 0.13,
                    -0.02, -0.4, 0.13,
                    -0.02, -0.4, -0.13,
                    -0.28, -0.4, -0.13,
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
                texture_type: 0,
                model_matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                transform: {
                  rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  translation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  scaling: {
                    x: 1,
                    y: 1,
                    z: 1,
                  },
                },
                children: [],
              },
            },
          ],
        },
      },
    ],
  },
  animation: human_animation,
};
