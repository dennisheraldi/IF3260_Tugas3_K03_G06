var chicken = {
    object: {
        name: "body",
        position: [
            [ //front
                -0.3, 0.3, 0.3,
                -0.3, -0.3, 0.3,
                0.3, -0.3, 0.3,
                0.3, 0.3, 0.3
            ],
            [ //back
                -0.3, 0.3, -0.5,
                0.3, 0.3, -0.5,
                0.3, -0.3, -0.5,
                -0.3, -0.3, -0.5
            ],
            [ //left
                0.3, -0.3, -0.5,
                0.3, 0.3, -0.5,
                0.3, 0.3, 0.3,
                0.3, -0.3, 0.3
            ],
            [ //right
                -0.3, 0.3, -0.5,
                -0.3, -0.3, -0.5,
                -0.3, -0.3, 0.3,
                -0.3, 0.3, 0.3
            ],
            [ //top
                0.3, 0.3, -0.5,
                -0.3, 0.3, -0.5,
                -0.3, 0.3, 0.3,
                0.3, 0.3, 0.3
            ],
            [ //bottom
                -0.3, -0.3, -0.5,
                0.3, -0.3, -0.5,
                0.3, -0.3, 0.3,
                -0.3, -0.3, 0.3
            ]
        ],
        color: [],
        texture_coords: [],
        children: [
            {
                object: {
                    name: "right wing",
                    position: [
                        [ //front
                            -0.3, 0.3, 0.2,
                            -0.4, 0.3, 0.2,
                            -0.4, -0.1, 0.2,
                            -0.3, -0.1, 0.2
                        ],
                        [ //back
                            -0.4, 0.3, -0.4,
                            -0.3, 0.3, -0.4,
                            -0.3, -0.1, -0.4,
                            -0.4, -0.1, -0.4
                        ],
                        [ //left
                            -0.4, 0.3, -0.4,
                            -0.3, 0.3, 0.2,
                            -0.3, -0.1, 0.2,
                            -0.4, -0.1, -0.4
                        ],
                        [ //right
                            -0.4, -0.1, 0.2,
                            -0.4, 0.3, 0.2,
                            -0.4, 0.3, -0.4,
                            -0.4, -0.1, -0.4
                        ],
                        [ //top
                            -0.4, 0.3, 0.2,
                            -0.3, 0.3, 0.2,
                            -0.3, 0.3, -0.4,
                            -0.4, 0.3, -0.4
                        ],
                        [ //bottom
                            -0.3, -0.1, 0.2,
                            -0.4, -0.1, 0.2,
                            -0.4, -0.1, -0.4,
                            -0.3, -0.1, -0.4
                        ]
                    ],
                    color: [],
                    texture_coords: [],
                    children: []
                }
            },
            {
                object: {
                    name: "left wing",
                    position: [
                        [ //front
                            0.4, 0.3, 0.2,
                            0.3, 0.3, 0.2,
                            0.3, -0.1, 0.2,
                            0.4, -0.1, 0.2
                        ],
                        [ //back
                            0.3, 0.3, -0.4,
                            0.4, 0.3, -0.4,
                            0.4, -0.1, -0.4,
                            0.3, -0.1, -0.4
                        ],
                        [ //left
                            0.4, 0.3, -0.4,
                            0.4, 0.3, 0.2,
                            0.4, -0.1, 0.2,
                            0.4, -0.1, -0.4
                        ],
                        [ //right
                            0.3, 0.3, 0.2,
                            0.3, 0.3, -0.4,
                            0.3, -0.1, -0.4,
                            0.3, -0.1, 0.2
                        ],
                        [ //top
                            0.3, 0.3, 0.2,
                            0.4, 0.3, 0.2,
                            0.4, 0.3, -0.4,
                            0.3, 0.3, -0.4
                        ],
                        [ //bottom
                            0.3, -0.1, -0.4,
                            0.4, -0.1, -0.4,
                            0.4, -0.1, 0.2,
                            0.3, -0.1, 0.2
                        ]
                    ],
                    color: [],
                    texture_coords: [],
                    children: []
                }
            },
            {
                object: {
                    name: "right leg",
                    position: [
                        [ //front
                            -0.1, -0.3, 0.0,
                            -0.2, -0.3, 0.0,
                            -0.2, -0.8, 0.0,
                            -0.1, -0.8, 0.0
                        ],
                        [ //back
                            -0.2, -0.3, -0.1,
                            -0.1, -0.3, -0.1,
                            -0.1, -0.8, -0.1,
                            -0.2, -0.8, -0.1
                        ],
                        [ //left
                            -0.1, -0.3, -0.1,
                            -0.1, -0.3, 0.0,
                            -0.1, -0.8, 0.0,
                            -0.1, -0.8, -0.1
                        ],
                        [ //right
                            -0.2, -0.3, 0.0,
                            -0.2, -0.3, -0.1,
                            -0.2, -0.8, -0.1,
                            -0.2, -0.8, 0.0
                        ],
                        [ //top
                            -0.2, -0.3, 0.0,
                            -0.1, -0.3, 0.0,
                            -0.1, -0.3, -0.1,
                            -0.2, -0.3, -0.1
                        ],
                        [ //bottom
                            -0.2, -0.8, -0.1,
                            -0.1, -0.8, -0.1,
                            -0.1, -0.8, 0.0,
                            -0.2, -0.8, 0.0
                        ]
                    ],
                    color: [],
                    texture_coords: [],
                    children: [
                        {
                            object: {
                                name: "right foot",
                                position: [
                                    [ //front 
                                        0.0, -0.8, 0.1,
                                        -0.3, -0.8, 0.1,
                                        -0.3, -0.9, 0.1,
                                        0.0, -0.9, 0.1
                                    ],
                                    [ //back
                                        -0.3, -0.8, -0.1,
                                        0.0, -0.8, -0.1,
                                        0.0, -0.9, -0.1,
                                        -0.3, -0.9, -0.1
                                    ],
                                    [ //left
                                        0.0, -0.8, -0.1,
                                        0.0, -0.8, 0.1,
                                        0.0, -0.9, 0.1,
                                        0.0, -0.9, -0.1
                                    ],
                                    [ //right
                                        -0.3, -0.8, 0.1,
                                        -0.3, -0.8, -0.1,
                                        -0.3, -0.9, -0.1,
                                        -0.3, -0.9, 0.1
                                    ],
                                    [ //top
                                        0.0, -0.8, -0.1,
                                        -0.3, -0.8, -0.1,
                                        -0.3, -0.8, 0.1,
                                        0.0, -0.8, 0.1
                                    ],
                                    [ //bottom
                                        0.0, -0.9, 0.1,
                                        -0.3, -0.9, 0.1,
                                        -0.3, -0.9, -0.1,
                                        0.0, -0.9, -0.1
                                    ]
                                ],
                                color: [],
                                texture_coords: [],
                                children: []
                            }
                        }
                    ]
                }
            },
            {
                object: {
                    name: "left leg",
                    position: [
                        [ //front
                            0.2, -0.3, 0.0,
                            0.1, -0.3, 0.0,
                            0.1, -0.8, 0.0,
                            0.2, -0.8, 0.0
                        ],
                        [ //back
                            0.1, -0.3, -0.1,
                            0.2, -0.3, -0.1,
                            0.2, -0.8, -0.1,
                            0.1, -0.8, -0.1
                        ],
                        [ //left
                            0.2, -0.3, -0.1,
                            0.2, -0.3, 0.0,
                            0.2, -0.8, 0.0,
                            0.2, -0.8, -0.1
                        ],
                        [ //right
                            0.1, -0.3, 0.0,
                            0.1, -0.3, -0.1,
                            0.1, -0.8, -0.1,
                            0.1, -0.8, 0.0
                        ],
                        [ //top
                            0.1, -0.3, 0.0,
                            0.2, -0.3, 0.0,
                            0.2, -0.3, -0.1,
                            0.1, -0.3, -0.1
                        ],
                        [ //bottom
                            0.2, -0.8, -0.1,
                            0.1, -0.8, -0.1,
                            0.1, -0.8, 0.0,
                            0.2, -0.8, 0.0
                        ]
                    ],
                    color: [],
                    texture_coords: [],
                    children: [
                        {
                            object: {
                                name: "left foot",
                                position: [
                                    [ //front
                                        0.3, -0.8, 0.1,
                                        0.0, -0.8, 0.1,
                                        0.0, -0.9, 0.1,
                                        0.3, -0.9, 0.1
                                    ],
                                    [ //back
                                        0.0, -0.8, -0.1,
                                        0.3, -0.8, -0.1,
                                        0.3, -0.9, -0.1,
                                        0.0, -0.9, -0.1
                                    ],
                                    [ //left
                                        0.3, -0.8, -0.1,
                                        0.3, -0.8, 0.1,
                                        0.3, -0.9, 0.1,
                                        0.3, -0.9, -0.1
                                    ],
                                    [ //right
                                        0.0, -0.8, 0.1,
                                        0.0, -0.8, -0.1,
                                        0.0, -0.9, -0.1,
                                        0.0, -0.9, 0.1
                                    ],
                                    [ //top
                                        0.0, -0.8, -0.1,
                                        0.0, -0.8, 0.1,
                                        0.3, -0.8, 0.1,
                                        0.3, -0.8, -0.1
                                    ],
                                    [ //bottom
                                        0.3, -0.9, 0.1,
                                        0.0, -0.9, 0.1,
                                        0.0, -0.9, -0.1,
                                        0.3, -0.9, -0.1
                                    ]
                                ],
                                color: [],
                                texture_coords: [],
                                children: []
                            }
                        }
                    ]
                }
            },
            {
                object: {
                    name: "head",
                    position: [
                        [ //front
                            0.2, 0.7, 0.5,
                            -0.2, 0.7, 0.5,
                            -0.2, 0.1, 0.5,
                            0.2, 0.1, 0.5
                        ],
                        [ //back
                            -0.2, 0.7, 0.2,
                            0.2, 0.7, 0.2,
                            0.2, 0.1, 0.2,
                            -0.2, 0.1, 0.2
                        ],
                        [ //left
                            0.2, 0.7, 0.2,
                            0.2, 0.7, 0.5,
                            0.2, 0.1, 0.5,
                            0.2, 0.1, 0.2
                        ],
                        [ //right
                            -0.2, 0.7, 0.5,
                            -0.2, 0.7, 0.2,
                            -0.2, 0.1, 0.2,
                            -0.2, 0.1, 0.5
                        ],
                        [ //top
                            -0.2, 0.7, 0.5,
                            0.2, 0.7, 0.5,
                            0.2, 0.7, 0.2,
                            -0.2, 0.7, 0.2
                        ],
                        [ //bottom
                            0.2, 0.1, 0.5,
                            -0.2, 0.1, 0.5,
                            -0.2, 0.1, 0.2,
                            0.2, 0.1, 0.2
                        ]
                    ],
                    color: [],
                    texture_coords: [],
                    children: [
                        {
                            object: {
                                name: "beak",
                                position: [
                                    [ //front
                                        0.2, 0.5, 0.7,
                                        -0.2, 0.5, 0.7,
                                        -0.2, 0.3, 0.7,
                                        0.2, 0.3, 0.7
                                    ],
                                    [ //back
                                        -0.2, 0.5, 0.5,
                                        0.2, 0.5, 0.5,
                                        0.2, 0.3, 0.5,
                                        -0.2, 0.3, 0.5
                                    ],
                                    [ //left
                                        0.2, 0.5, 0.7,
                                        0.2, 0.3, 0.7,
                                        0.2, 0.3, 0.5,
                                        0.2, 0.5, 0.5
                                    ],
                                    [ //right
                                        -0.2, 0.3, 0.7,
                                        -0.2, 0.5, 0.7,
                                        -0.2, 0.5, 0.5,
                                        -0.2, 0.3, 0.5
                                    ],
                                    [ //top
                                        -0.2, 0.5, 0.7,
                                        0.2, 0.5, 0.7,
                                        0.2, 0.5, 0.5,
                                        -0.2, 0.5, 0.5
                                    ],
                                    [ //bottom
                                        0.2, 0.3, 0.7,
                                        -0.2, 0.3, 0.7,
                                        -0.2, 0.3, 0.5,
                                        0.2, 0.3, 0.5
                                    ]
                                ],
                                color: [],
                                texture_coords: [],
                                children: [
                                    {
                                        object: {
                                            name: "wattles",
                                            position: [
                                                [ //front
                                                    0.1, 0.3, 0.6,
                                                    -0.1, 0.3, 0.6,
                                                    -0.1, 0.1, 0.6,
                                                    0.1, 0.1, 0.6
                                                ],
                                                [ //back
                                                    -0.1, 0.3, 0.5,
                                                    0.1, 0.3, 0.5,
                                                    0.1, 0.1, 0.5,
                                                    -0.1, 0.1, 0.5
                                                ],
                                                [ //left
                                                    0.1, 0.3, 0.5,
                                                    0.1, 0.3, 0.6,
                                                    0.1, 0.1, 0.6,
                                                    0.1, 0.1, 0.5
                                                ],
                                                [ //right
                                                    -0.1, 0.1, 0.6,
                                                    -0.1, 0.3, 0.6,
                                                    -0.1, 0.3, 0.5,
                                                    -0.1, 0.1, 0.5
                                                ],
                                                [ //top
                                                    -0.1, 0.3, 0.6,
                                                    0.1, 0.3, 0.6,
                                                    0.1, 0.3, 0.5,
                                                    -0.1, 0.3, 0.5
                                                ],
                                                [ //bottom
                                                    0.1, 0.1, 0.6,
                                                    -0.1, 0.1, 0.6,
                                                    -0.1, 0.1, 0.5,
                                                    0.1, 0.1, 0.5
                                                ]
                                            ],
                                            color: [],
                                            texture_coords: [],
                                            children: []
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
}

dfsColorFilling(chicken.object);