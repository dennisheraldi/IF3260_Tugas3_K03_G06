var dog = {
    object: {
        name: "Body",
        position: [
            [
                // front
                0.15, 0.15, 0.25, -0.15, 0.15, 0.25, -0.15, -0.15, 0.25, 0.15,
                -0.15, 0.25,
            ],
            [
                // back
                0.15, 0.15, -0.25, 0.15, -0.15, -0.25, -0.15, -0.15, -0.25,
                -0.15, 0.15, -0.25,
            ],
            [
                // left
                -0.15, 0.15, -0.25, -0.15, -0.15, -0.25, -0.15, -0.15, 0.25,
                -0.15, 0.15, 0.25,
            ],
            [
                // right
                0.15, 0.15, -0.25, 0.15, 0.15, 0.25, 0.15, -0.15, 0.25, 0.15,
                -0.15, -0.25,
            ],
            [
                // top
                0.15, 0.15, -0.25, -0.15, 0.15, -0.25, -0.15, 0.15, 0.25, 0.15,
                0.15, 0.25,
            ],
            [
                // bottom
                0.15, -0.15, -0.25, 0.15, -0.15, 0.25, -0.15, -0.15, 0.25,
                -0.15, -0.15, -0.25,
            ],
        ],
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
                    name: "Head",
                    position: [
                        [
                            // front
                            0.2, 0.3, 0.45, -0.2, 0.3, 0.45, -0.2, 0.0, 0.45,
                            0.2, 0.0, 0.45,
                        ],
                        [
                            // back
                            0.2, 0.3, 0.15, 0.2, 0.0, 0.15, -0.2, 0.0, 0.15,
                            -0.2, 0.3, 0.15,
                        ],
                        [
                            // left
                            -0.2, 0.3, 0.15, -0.2, 0.0, 0.15, -0.2, 0.0, 0.45,
                            -0.2, 0.3, 0.45,
                        ],
                        [
                            // right
                            0.2, 0.3, 0.15, 0.2, 0.3, 0.45, 0.2, 0.0, 0.45, 0.2,
                            0.0, 0.15,
                        ],
                        [
                            // top
                            0.2, 0.3, 0.15, -0.2, 0.3, 0.15, -0.2, 0.3, 0.45,
                            0.2, 0.3, 0.45,
                        ],
                        [
                            // bottom
                            0.2, 0.0, 0.15, 0.2, 0.0, 0.45, -0.2, 0.0, 0.45,
                            -0.2, 0.0, 0.15,
                        ],
                    ],
                    color: [],
                    texture_type: 0,
                    texture_coords: [],
                    model_matrix: [
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ],
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
                                name: "Left Ear",
                                position: [
                                    [
                                        // front
                                        -0.1, 0.4, 0.25, -0.2, 0.4, 0.25, -0.2,
                                        0.3, 0.25, -0.1, 0.3, 0.25,
                                    ],
                                    [
                                        // back
                                        -0.1, 0.4, 0.15, -0.1, 0.3, 0.15, -0.2,
                                        0.3, 0.15, -0.2, 0.4, 0.15,
                                    ],
                                    [
                                        // left
                                        -0.2, 0.4, 0.15, -0.2, 0.3, 0.15, -0.2,
                                        0.3, 0.25, -0.2, 0.4, 0.25,
                                    ],
                                    [
                                        // right
                                        -0.1, 0.4, 0.15, -0.1, 0.4, 0.25, -0.1,
                                        0.3, 0.25, -0.1, 0.3, 0.15,
                                    ],
                                    [
                                        // top
                                        -0.1, 0.4, 0.15, -0.2, 0.4, 0.15, -0.2,
                                        0.4, 0.25, -0.1, 0.4, 0.25,
                                    ],
                                    [
                                        // bottom
                                        -0.1, 0.3, 0.15, -0.1, 0.3, 0.25, -0.2,
                                        0.3, 0.25, -0.2, 0.3, 0.15,
                                    ],
                                ],
                                color: [],
                                texture_type: 0,
                                texture_coords: [],
                                model_matrix: [
                                    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
                                    1,
                                ],
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
                                name: "Right Ear",
                                position: [
                                    [
                                        // front
                                        0.2, 0.4, 0.25, 0.1, 0.4, 0.25, 0.1,
                                        0.3, 0.25, 0.2, 0.3, 0.25,
                                    ],
                                    [
                                        // back
                                        0.2, 0.4, 0.15, 0.2, 0.3, 0.15, 0.1,
                                        0.3, 0.15, 0.1, 0.4, 0.15,
                                    ],
                                    [
                                        // left
                                        0.1, 0.4, 0.15, 0.1, 0.3, 0.15, 0.1,
                                        0.3, 0.25, 0.1, 0.4, 0.25,
                                    ],
                                    [
                                        // right
                                        0.2, 0.4, 0.15, 0.2, 0.4, 0.25, 0.2,
                                        0.3, 0.25, 0.2, 0.3, 0.15,
                                    ],
                                    [
                                        // top
                                        0.2, 0.4, 0.15, 0.1, 0.4, 0.15, 0.1,
                                        0.4, 0.25, 0.2, 0.4, 0.25,
                                    ],
                                    [
                                        // bottom
                                        0.2, 0.3, 0.15, 0.2, 0.3, 0.25, 0.1,
                                        0.3, 0.25, 0.1, 0.3, 0.15,
                                    ],
                                ],
                                color: [],
                                texture_type: 0,
                                texture_coords: [],
                                model_matrix: [
                                    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
                                    1,
                                ],
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
                    name: "Tail",
                    position: [
                        [
                            // front
                            0.05, 0.15, -0.25, -0.05, 0.15, -0.25, -0.05, 0.05,
                            -0.25, 0.05, 0.05, -0.25,
                        ],
                        [
                            // back
                            0.05, 0.15, -0.45, 0.05, 0.05, -0.45, -0.05, 0.05,
                            -0.45, -0.05, 0.15, -0.45,
                        ],
                        [
                            // left
                            -0.05, 0.15, -0.45, -0.05, 0.05, -0.45, -0.05, 0.05,
                            -0.25, -0.05, 0.15, -0.25,
                        ],
                        [
                            // right
                            0.05, 0.15, -0.45, 0.05, 0.15, -0.25, 0.05, 0.05,
                            -0.25, 0.05, 0.05, -0.45,
                        ],
                        [
                            // top
                            0.05, 0.15, -0.45, -0.05, 0.15, -0.45, -0.05, 0.15,
                            -0.25, 0.05, 0.15, -0.25,
                        ],
                        [
                            // bottom
                            0.05, 0.05, -0.45, 0.05, 0.05, -0.25, -0.05, 0.05,
                            -0.25, -0.05, 0.05, -0.45,
                        ],
                    ],
                    color: [],
                    texture_type: 0,
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
                    model_matrix: [
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ],
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
                    name: "Left Front Leg",
                    position: [
                        [
                            // front
                            -0.15, -0.05, 0.25, -0.25, -0.05, 0.25, -0.25, -0.4,
                            0.25, -0.15, -0.4, 0.25,
                        ],
                        [
                            // back
                            -0.15, -0.05, 0.15, -0.15, -0.4, 0.15, -0.25, -0.4,
                            0.15, -0.25, -0.05, 0.15,
                        ],
                        [
                            // left
                            -0.25, -0.05, 0.15, -0.25, -0.4, 0.15, -0.25, -0.4,
                            0.25, -0.25, -0.05, 0.25,
                        ],
                        [
                            // right
                            -0.15, -0.05, 0.15, -0.15, -0.05, 0.25, -0.15, -0.4,
                            0.25, -0.15, -0.4, 0.15,
                        ],
                        [
                            // top
                            -0.15, -0.05, 0.15, -0.25, -0.05, 0.15, -0.25,
                            -0.05, 0.25, -0.15, -0.05, 0.25,
                        ],
                        [
                            // bottom
                            -0.15, -0.4, 0.15, -0.15, -0.4, 0.25, -0.25, -0.4,
                            0.25, -0.25, -0.4, 0.15,
                        ],
                    ],
                    color: [],
                    texture_type: 0,
                    texture_coords: [],
                    model_matrix: [
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ],
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
                    name: "Right Front Leg",
                    position: [
                        [
                            // front
                            0.25, -0.05, 0.25, 0.15, -0.05, 0.25, 0.15, -0.4,
                            0.25, 0.25, -0.4, 0.25,
                        ],
                        [
                            // back
                            0.25, -0.05, 0.15, 0.25, -0.4, 0.15, 0.15, -0.4,
                            0.15, 0.15, -0.05, 0.15,
                        ],
                        [
                            // left
                            0.15, -0.05, 0.15, 0.15, -0.4, 0.15, 0.15, -0.4,
                            0.25, 0.15, -0.05, 0.25,
                        ],
                        [
                            // right
                            0.25, -0.05, 0.15, 0.25, -0.05, 0.25, 0.25, -0.4,
                            0.25, 0.25, -0.4, 0.15,
                        ],
                        [
                            // top
                            0.25, -0.05, 0.15, 0.15, -0.05, 0.15, 0.15, -0.05,
                            0.25, 0.25, -0.05, 0.25,
                        ],
                        [
                            // bottom
                            0.25, -0.4, 0.15, 0.25, -0.4, 0.25, 0.15, -0.4,
                            0.25, 0.15, -0.4, 0.15,
                        ],
                    ],
                    color: [],
                    texture_type: 0,
                    texture_coords: [],
                    model_matrix: [
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ],
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
                    name: "Left Back Leg",
                    position: [
                        [
                            // front
                            -0.15, -0.05, -0.15, -0.25, -0.05, -0.15, -0.25,
                            -0.4, -0.15, -0.15, -0.4, -0.15,
                        ],
                        [
                            // back
                            -0.15, -0.05, -0.25, -0.15, -0.4, -0.25, -0.25,
                            -0.4, -0.25, -0.25, -0.05, -0.25,
                        ],
                        [
                            // left
                            -0.25, -0.05, -0.25, -0.25, -0.4, -0.25, -0.25,
                            -0.4, -0.15, -0.25, -0.05, -0.15,
                        ],
                        [
                            // right
                            -0.15, -0.05, -0.25, -0.15, -0.05, -0.15, -0.15,
                            -0.4, -0.15, -0.15, -0.4, -0.25,
                        ],
                        [
                            // top
                            -0.15, -0.05, -0.25, -0.25, -0.05, -0.25, -0.25,
                            -0.05, -0.15, -0.15, -0.05, -0.15,
                        ],
                        [
                            // bottom
                            -0.15, -0.4, -0.25, -0.15, -0.4, -0.15, -0.25, -0.4,
                            -0.15, -0.25, -0.4, -0.25,
                        ],
                    ],
                    color: [],
                    texture_type: 0,
                    texture_coords: [],
                    model_matrix: [
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ],
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
                    name: "Right Back Leg",
                    position: [
                        [
                            // front
                            0.25, -0.05, -0.15, 0.15, -0.05, -0.15, 0.15, -0.4,
                            -0.15, 0.25, -0.4, -0.15,
                        ],
                        [
                            // back
                            0.25, -0.05, -0.25, 0.25, -0.4, -0.25, 0.15, -0.4,
                            -0.25, 0.15, -0.05, -0.25,
                        ],
                        [
                            // left
                            0.15, -0.05, -0.25, 0.15, -0.4, -0.25, 0.15, -0.4,
                            -0.15, 0.15, -0.05, -0.15,
                        ],
                        [
                            // right
                            0.25, -0.05, -0.25, 0.25, -0.05, -0.15, 0.25, -0.4,
                            -0.15, 0.25, -0.4, -0.25,
                        ],
                        [
                            // top
                            0.25, -0.05, -0.25, 0.15, -0.05, -0.25, 0.15, -0.05,
                            -0.15, 0.25, -0.05, -0.15,
                        ],
                        [
                            // bottom
                            0.25, -0.4, -0.25, 0.25, -0.4, -0.15, 0.15, -0.4,
                            -0.15, 0.15, -0.4, -0.25,
                        ],
                    ],
                    color: [],
                    texture_type: 0,
                    texture_coords: [],
                    model_matrix: [
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ],
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
};

function dfsColorFilling(object) {
    for (let i = 0; i < object.position.length; i++) {
        var r_color = Math.random();
        var g_color = Math.random();
        var b_color = Math.random();
        object.color.push([
            r_color,
            g_color,
            b_color,
            r_color,
            g_color,
            b_color,
            r_color,
            g_color,
            b_color,
            r_color,
            g_color,
            b_color,
        ]);
    }
    object.texture_coords = [
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
    ];
    for (let i = 0; i < object.children.length; i++) {
        dfsColorFilling(object.children[i].object);
    }
}

dfsColorFilling(dog.object);