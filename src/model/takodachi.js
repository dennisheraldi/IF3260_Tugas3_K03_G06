var takodachi = {
    // prettier-ignore
    position: [
        // 1st layer
        [
            0.0, 0.6, 0.0,
            0.4, 0.5, 0.0,
            0.3, 0.5, 0.3,
        ],
        [
            0.0, 0.6, 0.0,
            0.3, 0.5, 0.3,
            0.0, 0.5, 0.4,
        ],
        [
            0.0, 0.6, 0.0,
            0.0, 0.5, 0.4,
            -0.3, 0.5, 0.3,
        ],
        [
            0.0, 0.6, 0.0,
            -0.3, 0.5, 0.3,
            -0.4, 0.5, 0.0,
        ],
        [
            0.0, 0.6, 0.0,
            -0.4, 0.5, 0.0,
            -0.3, 0.5, -0.3,
        ],
        [
            0.0, 0.6, 0.0,
            -0.3, 0.5, -0.3,
            0.0, 0.5, -0.4,
        ],
        [
            0.0, 0.6, 0.0,
            0.0, 0.5, -0.4,
            0.3, 0.5, -0.3,
        ],
        [
            0.0, 0.6, 0.0,
            0.3, 0.5, -0.3,
            0.4, 0.5, 0.0,
        ],
        // 2nd layer
        [
            0.4, 0.5, 0.0,
            0.55, 0.3, 0.0,
            0.4, 0.3, 0.4,
            0.3, 0.5, 0.3,
        ],
        [
            0.3, 0.5, 0.3,
            0.4, 0.3, 0.4,
            0.0, 0.3, 0.55,
            0.0, 0.5, 0.4,
        ],
        [
            0.0, 0.5, 0.4,
            0.0, 0.3, 0.55,
            -0.4, 0.3, 0.4,
            -0.3, 0.5, 0.3,
        ],
        [
            -0.3, 0.5, 0.3,
            -0.4, 0.3, 0.4,
            -0.55, 0.3, 0.0,
            -0.4, 0.5, 0.0,
        ],
        [
            -0.4, 0.5, 0.0,
            -0.55, 0.3, 0.0,
            -0.4, 0.3, -0.4,
            -0.3, 0.5, -0.3,
        ],
        [
            -0.3, 0.5, -0.3,
            -0.4, 0.3, -0.4,
            0.0, 0.3, -0.55,
            0.0, 0.5, -0.4,
        ],
        [
            0.0, 0.5, -0.4,
            0.0, 0.3, -0.55,
            0.4, 0.3, -0.4,
            0.3, 0.5, -0.3,
        ],
        [
            0.3, 0.5, -0.3,
            0.4, 0.3, -0.4,
            0.55, 0.3, 0.0,
            0.4, 0.5, 0.0,
        ],
        // 3rd layer
        [
            0.55, 0.3, 0.0,
            0.65, -0.2, 0.0,
            0.5, -0.2, 0.5,
            0.4, 0.3, 0.4,
        ],
        [
            0.4, 0.3, 0.4,
            0.5, -0.2, 0.5,
            0.0, -0.2, 0.65,
            0.0, 0.3, 0.55,
        ],
        [
            0.0, 0.3, 0.55,
            0.0, -0.2, 0.65,
            -0.5, -0.2, 0.5,
            -0.4, 0.3, 0.4,
        ],
        [
            -0.4, 0.3, 0.4,
            -0.5, -0.2, 0.5,
            -0.65, -0.2, 0.0,
            -0.55, 0.3, 0.0,
        ],
        [
            -0.55, 0.3, 0.0,
            -0.65, -0.2, 0.0,
            -0.5, -0.2, -0.5,
            -0.4, 0.3, -0.4,
        ],
        [
            -0.4, 0.3, -0.4,
            -0.5, -0.2, -0.5,
            0.0, -0.2, -0.65,
            0.0, 0.3, -0.55,
        ],
        [
            0.0, 0.3, -0.55,
            0.0, -0.2, -0.65,
            0.5, -0.2, -0.5,
            0.4, 0.3, -0.4,
        ],
        [
            0.4, 0.3, -0.4,
            0.5, -0.2, -0.5,
            0.65, -0.2, 0.0,
            0.55, 0.3, 0.0,
        ],
        // 4th layer
        [
            0.65, -0.2, 0.0,
            0.9, -0.4, 0.0,
            0.7, -0.4, 0.7,
            0.5, -0.2, 0.5,
        ],
        [
            0.5, -0.2, 0.5,
            0.7, -0.4, 0.7,
            0.0, -0.4, 0.9,
            0.0, -0.2, 0.65,
        ],
        [
            0.0, -0.2, 0.65,
            0.0, -0.4, 0.9,
            -0.7, -0.4, 0.7,
            -0.5, -0.2, 0.5,
        ],
        [
            -0.5, -0.2, 0.5,
            -0.7, -0.4, 0.7,
            -0.9, -0.4, 0.0,
            -0.65, -0.2, 0.0,
        ],
        [
            -0.65, -0.2, 0.0,
            -0.9, -0.4, 0.0,
            -0.7, -0.4, -0.7,
            -0.5, -0.2, -0.5,
        ],
        [
            -0.5, -0.2, -0.5,
            -0.7, -0.4, -0.7,
            0.0, -0.4, -0.9,
            0.0, -0.2, -0.65,
        ],
        [
            0.0, -0.2, -0.65,
            0.0, -0.4, -0.9,
            0.7, -0.4, -0.7,
            0.5, -0.2, -0.5,
        ],
        [
            0.5, -0.2, -0.5,
            0.7, -0.4, -0.7,
            0.9, -0.4, 0.0,
            0.65, -0.2, 0.0,
        ],
        // 5th layer
        [
            0.9, -0.4, 0.0,
            0.8, -0.6, 0.0,
            0.6, -0.6, 0.6,
            0.7, -0.4, 0.7,
        ],
        [
            0.7, -0.4, 0.7,
            0.6, -0.6, 0.6,
            0.0, -0.6, 0.8,
            0.0, -0.4, 0.9,
        ],
        [
            0.0, -0.4, 0.9,
            0.0, -0.6, 0.8,
            -0.6, -0.6, 0.6,
            -0.7, -0.4, 0.7,
        ],
        [
            -0.7, -0.4, 0.7,
            -0.6, -0.6, 0.6,
            -0.8, -0.6, 0.0,
            -0.9, -0.4, 0.0,
        ],
        [
            -0.9, -0.4, 0.0,
            -0.8, -0.6, 0.0,
            -0.6, -0.6, -0.6,
            -0.7, -0.4, -0.7,
        ],
        [
            -0.7, -0.4, -0.7,
            -0.6, -0.6, -0.6,
            0.0, -0.6, -0.8,
            0.0, -0.4, -0.9,
        ],
        [
            0.0, -0.4, -0.9,
            0.0, -0.6, -0.8,
            0.6, -0.6, -0.6,
            0.7, -0.4, -0.7,
        ],
        [
            0.7, -0.4, -0.7,
            0.6, -0.6, -0.6,
            0.8, -0.6, 0.0,
            0.9, -0.4, 0.0,
        ],
        // 6th layer
        [
            0.8, -0.6, 0.0,
            0.0, -0.3, 0.0,
            0.6, -0.6, 0.6,
        ],
        [
            0.6, -0.6, 0.6,
            0.0, -0.3, 0.0,
            0.0, -0.6, 0.8,
        ],
        [
            0.0, -0.6, 0.8,
            0.0, -0.3, 0.0,
            -0.6, -0.6, 0.6,
        ],
        [
            -0.6, -0.6, 0.6,
            0.0, -0.3, 0.0,
            -0.8, -0.6, 0.0,
        ],
        [
            -0.8, -0.6, 0.0,
            0.0, -0.3, 0.0,
            -0.6, -0.6, -0.6,
        ],
        [
            -0.6, -0.6, -0.6,
            0.0, -0.3, 0.0,
            0.0, -0.6, -0.8,
        ],
        [
            0.0, -0.6, -0.8,
            0.0, -0.3, 0.0,
            0.6, -0.6, -0.6,
        ],
        [
            0.6, -0.6, -0.6,
            0.0, -0.3, 0.0,
            0.8, -0.6, 0.0,
        ],
        // right flap
        [ // front
            -0.35, 0.5, -0.1,
            -0.65, 0.6, -0.1,
            -0.7, 0.45, -0.1,
            -0.50, 0.25, -0.1,
        ],
        [ // back
            -0.35, 0.5, 0.1,
            -0.50, 0.25, 0.1,
            -0.7, 0.45, 0.1,
            -0.65, 0.6, 0.1,
        ],
        [ //top cover
            -0.35, 0.5, -0.1,
            -0.35, 0.5, 0.1,
            -0.65, 0.6, 0.1,
            -0.65, 0.6, -0.1,
        ],
        [ // bottom cover
            -0.50, 0.25, -0.1,
            -0.7, 0.45, -0.1,
            -0.7, 0.45, 0.1,
            -0.50, 0.25, 0.1,
        ],
        [ // left cover
            -0.65, 0.6, -0.1,
            -0.65, 0.6, 0.1,
            -0.7, 0.45, 0.1,
            -0.7, 0.45, -0.1,
        ],
        // left flap
        [ // front
            0.35, 0.5, -0.1,
            0.50, 0.25, -0.1,
            0.7, 0.45, -0.1,
            0.65, 0.6, -0.1,
        ],
        [ // back
            0.35, 0.5, 0.1,
            0.65, 0.6, 0.1,
            0.7, 0.45, 0.1,
            0.50, 0.25, 0.1,
        ],
        [ //top cover
            0.35, 0.5, -0.1,
            0.65, 0.6, -0.1,
            0.65, 0.6, 0.1,
            0.35, 0.5, 0.1,
        ],
        [ // bottom cover
            0.50, 0.25, -0.1,
            0.50, 0.25, 0.1,
            0.7, 0.45, 0.1,
            0.7, 0.45, -0.1,
        ],
        [ // left cover
            0.65, 0.6, -0.1,
            0.7, 0.45, -0.1,
            0.7, 0.45, 0.1,
            0.65, 0.6, 0.1,
        ],
        // right eye
        [ // front
            -0.20, 0.1, -0.54,
            -0.22, 0.15, -0.54,
            -0.4, 0.1, -0.54,
            -0.38, 0.05, -0.54,
        ],
        [ // back
            -0.20, 0.1, -0.40,
            -0.38, 0.05, -0.40,
            -0.4, 0.1, -0.40,
            -0.22, 0.15, -0.40,
        ],
        [ //top cover
            -0.20, 0.1, -0.54,
            -0.20, 0.1, -0.40,
            -0.22, 0.15, -0.40,
            -0.22, 0.15, -0.54,
        ],
        [ // bottom cover
            -0.38, 0.05, -0.54,
            -0.4, 0.1, -0.54,
            -0.4, 0.1, -0.40,
            -0.38, 0.05, -0.40,
        ],
        [ // left cover
            -0.22, 0.15, -0.54,
            -0.22, 0.15, -0.40,
            -0.4, 0.1, -0.40,
            -0.4, 0.1, -0.54,
        ],
        [ // right cover
            -0.20, 0.1, -0.54,
            -0.38, 0.05, -0.54,
            -0.38, 0.05, -0.40,
            -0.20, 0.1, -0.40,
        ],
        // left eye
        [ // front
            0.20, 0.1, -0.54,
            0.38, 0.05, -0.54,
            0.4, 0.1, -0.54,
            0.22, 0.15, -0.54,
        ],
        [ // back
            0.20, 0.1, -0.40,
            0.22, 0.15, -0.40,
            0.4, 0.1, -0.40,
            0.38, 0.05, -0.40,
        ],
        [ //top cover
            0.20, 0.1, -0.54,
            0.22, 0.15, -0.54,
            0.22, 0.15, -0.40,
            0.20, 0.1, -0.40,
        ],
        [ // bottom cover
            0.38, 0.05, -0.54,
            0.38, 0.05, -0.40,
            0.4, 0.1, -0.40,
            0.4, 0.1, -0.54,
        ],
        [ // left cover
            0.22, 0.15, -0.54,
            0.4, 0.1, -0.54,
            0.4, 0.1, -0.40,
            0.22, 0.15, -0.40,
        ],
        [ // right cover
            0.20, 0.1, -0.54,
            0.20, 0.1, -0.40,
            0.38, 0.05, -0.40,
            0.38, 0.05, -0.54,
        ],
        // mouth far right-side
        [ // front
            -0.16, -0.05, -0.65,
            -0.1, -0.1, -0.65,
            -0.1, -0.05, -0.65,
            -0.13, -0.02, -0.65,
        ],
        [ // back
            -0.16, -0.05, -0.55,
            -0.13, -0.02, -0.55,
            -0.1, -0.05, -0.55,
            -0.1, -0.1, -0.55,
        ],
        [ // bottom cover
            -0.16, -0.05, -0.65,
            -0.16, -0.05, -0.55,
            -0.1, -0.1, -0.55,
            -0.1, -0.1, -0.65,
        ],
        [ // right cover
            -0.16, -0.05, -0.65,
            -0.13, -0.02, -0.65,
            -0.13, -0.02, -0.55,
            -0.16, -0.05, -0.55,
        ],
        [ // top cover
            -0.1, -0.05, -0.65,
            -0.1, -0.05, -0.55,
            -0.13, -0.02, -0.55,
            -0.13, -0.02, -0.65,
        ],
        // mouth middle right-side
        [ // front
            -0.1, -0.1, -0.65,
            0.0, -0.07, -0.65,
            0.0, -0.02, -0.65,
            -0.1, -0.05, -0.65,
        ],
        [ // back
            -0.1, -0.1, -0.55,
            -0.1, -0.05, -0.55,
            0.0, -0.02, -0.55,
            0.0, -0.07, -0.55,
        ],
        [ // bottom cover
            -0.1, -0.1, -0.65,
            -0.1, -0.1, -0.55,
            0.0, -0.07, -0.55,
            0.0, -0.07, -0.65,
        ],
        [ // top cover
            0.0, -0.02, -0.65,
            0.0, -0.02, -0.55,
            -0.1, -0.05, -0.55,
            -0.1, -0.05, -0.65,
        ],
        // mouth far left-side
        [ // front
            0.1, -0.1, -0.65,
            0.16, -0.05, -0.65,
            0.13, -0.02, -0.65,
            0.1, -0.05, -0.65,
        ],
        [ // back
            0.1, -0.1, -0.55,
            0.1, -0.05, -0.55,
            0.13, -0.02, -0.55,
            0.16, -0.05, -0.55,
        ],
        [ // bottom cover
            0.1, -0.1, -0.65,
            0.1, -0.1, -0.55,
            0.16, -0.05, -0.55,
            0.16, -0.05, -0.65,
        ],
        [ // left cover
            0.16, -0.05, -0.65,
            0.16, -0.05, -0.55,
            0.13, -0.02, -0.55,
            0.13, -0.02, -0.65,
        ],
        [ // top cover
            0.1, -0.05, -0.65,
            0.13, -0.02, -0.65,
            0.13, -0.02, -0.55,
            0.1, -0.05, -0.55,
        ],
        // mouth middle left-side
        [ // front
            0.0, -0.07, -0.65,
            0.1, -0.1, -0.65,
            0.1, -0.05, -0.65,
            0.0, -0.02, -0.65,
        ],
        [ // back
            0.0, -0.07, -0.55,
            0.0, -0.02, -0.55,
            0.1, -0.05, -0.55,
            0.1, -0.1, -0.55,
        ],
        [ // bottom cover
            0.0, -0.07, -0.65,
            0.0, -0.07, -0.55,
            0.1, -0.1, -0.55,
            0.1, -0.1, -0.65,
        ],
        [ // top cover
            0.0, -0.02, -0.65,
            0.1, -0.05, -0.65,
            0.1, -0.05, -0.55,
            0.0, -0.02, -0.55,
        ],
        // halo ring outer
        [
            0.4, 0.8, 0.0,
            0.4, 0.7, 0.0,
            0.3, 0.7, 0.3,
            0.3, 0.8, 0.3,
        ],
        [
            0.3, 0.8, 0.3,
            0.3, 0.7, 0.3,
            0.0, 0.7, 0.4,
            0.0, 0.8, 0.4,
        ],
        [
            0.0, 0.8, 0.4,
            0.0, 0.7, 0.4,
            -0.3, 0.7, 0.3,
            -0.3, 0.8, 0.3,
        ],
        [
            -0.3, 0.8, 0.3,
            -0.3, 0.7, 0.3,
            -0.4, 0.7, 0.0,
            -0.4, 0.8, 0.0,
        ],
        [
            -0.4, 0.8, 0.0,
            -0.4, 0.7, 0.0,
            -0.3, 0.7, -0.3,
            -0.3, 0.8, -0.3,
        ],
        [
            -0.3, 0.8, -0.3,
            -0.3, 0.7, -0.3,
            0.0, 0.7, -0.4,
            0.0, 0.8, -0.4,
        ],
        [
            0.0, 0.8, -0.4,
            0.0, 0.7, -0.4,
            0.3, 0.7, -0.3,
            0.3, 0.8, -0.3,
        ],
        [
            0.3, 0.8, -0.3,
            0.3, 0.7, -0.3,
            0.4, 0.7, 0.0,
            0.4, 0.8, 0.0,
        ],
        // halo ring inner
        [
            0.3, 0.8, 0.0,
            0.2, 0.8, 0.2,
            0.2, 0.7, 0.2,
            0.3, 0.7, 0.0,
        ],
        [
            0.2, 0.8, 0.2,
            0.0, 0.8, 0.3,
            0.0, 0.7, 0.3,
            0.2, 0.7, 0.2,
        ],
        [
            0.0, 0.8, 0.3,
            -0.2, 0.8, 0.2,
            -0.2, 0.7, 0.2,
            0.0, 0.7, 0.3,
        ],
        [
            -0.2, 0.8, 0.2,
            -0.3, 0.8, 0.0,
            -0.3, 0.7, 0.0,
            -0.2, 0.7, 0.2,
        ],
        [
            -0.3, 0.8, 0.0,
            -0.2, 0.8, -0.2,
            -0.2, 0.7, -0.2,
            -0.3, 0.7, 0.0,
        ],
        [
            -0.2, 0.8, -0.2,
            0.0, 0.8, -0.3,
            0.0, 0.7, -0.3,
            -0.2, 0.7, -0.2,
        ],
        [
            0.0, 0.8, -0.3,
            0.2, 0.8, -0.2,
            0.2, 0.7, -0.2,
            0.0, 0.7, -0.3,
        ],
        [
            0.2, 0.8, -0.2,
            0.3, 0.8, 0.0,
            0.3, 0.7, 0.0,
            0.2, 0.7, -0.2,
        ],
        // halo ring top
        [
            0.3, 0.8, 0.0,
            0.4, 0.8, 0.0,
            0.3, 0.8, 0.3,
            0.2, 0.8, 0.2,
        ],
        [
            0.2, 0.8, 0.2,
            0.3, 0.8, 0.3,
            0.0, 0.8, 0.4,
            0.0, 0.8, 0.3,
        ],
        [
            0.0, 0.8, 0.3,
            0.0, 0.8, 0.4,
            -0.3, 0.8, 0.3,
            -0.2, 0.8, 0.2,
        ],
        [
            -0.2, 0.8, 0.2,
            -0.3, 0.8, 0.3,
            -0.4, 0.8, 0.0,
            -0.3, 0.8, 0.0,
        ],
        [
            -0.3, 0.8, 0.0,
            -0.4, 0.8, 0.0,
            -0.3, 0.8, -0.3,
            -0.2, 0.8, -0.2,
        ],
        [
            -0.2, 0.8, -0.2,
            -0.3, 0.8, -0.3,
            0.0, 0.8, -0.4,
            0.0, 0.8, -0.3,
        ],
        [
            0.0, 0.8, -0.3,
            0.0, 0.8, -0.4,
            0.3, 0.8, -0.3,
            0.2, 0.8, -0.2,
        ],
        [
            0.2, 0.8, -0.2,
            0.3, 0.8, -0.3,
            0.4, 0.8, 0.0,
            0.3, 0.8, 0.0,
        ],
        // halo ring bottom
        [
            0.3, 0.7, 0.0,
            0.2, 0.7, 0.2,
            0.3, 0.7, 0.3,
            0.4, 0.7, 0.0,
        ],
        [
            0.0, 0.7, 0.3,
            0.0, 0.7, 0.4,
            0.3, 0.7, 0.3,
            0.2, 0.7, 0.2,
        ],
        [
            -0.2, 0.7, 0.2,
            -0.3, 0.7, 0.3,
            0.0, 0.7, 0.4,
            0.0, 0.7, 0.3,
        ],
        [
            -0.3, 0.7, 0.0,
            -0.4, 0.7, 0.0,
            -0.3, 0.7, 0.3,
            -0.2, 0.7, 0.2,
        ],
        [
            -0.3, 0.7, 0.0,
            -0.2, 0.7, -0.2,
            -0.3, 0.7, -0.3,
            -0.4, 0.7, 0.0,
        ],
        [
            0.0, 0.7, -0.3,
            0.0, 0.7, -0.4,
            -0.3, 0.7, -0.3,
            -0.2, 0.7, -0.2,
        ],
        [
            0.2, 0.7, -0.2,
            0.3, 0.7, -0.3,
            0.0, 0.7, -0.4,
            0.0, 0.7, -0.3,
        ],
        [
            0.3, 0.7, 0.0,
            0.4, 0.7, 0.0,
            0.3, 0.7, -0.3,
            0.2, 0.7, -0.2,
        ]
    ],
    color: []
}

for (var i = 0; i < takodachi.position.length; i++) {
    if (i < 58) {
        // purple 122, 110, 134
        var r_color = 122 / 255 + Math.random() / 10;
        var g_color = 110 / 255 + Math.random() / 10;
        var b_color = 134 / 255 + Math.random() / 10;
    } else if (i < 88) {
        // black 40, 35, 53
        var r_color = 40 / 255 + Math.random() / 10;
        var g_color = 35 / 255 + Math.random() / 10;
        var b_color = 53 / 255 + Math.random() / 10;
    } else {
        // yellow 250, 181, 114
        var r_color = 250 / 255 + Math.random() / 10;
        var g_color = 181 / 255 + Math.random() / 10;
        var b_color = 114 / 255 + Math.random() / 10;
    }
    if (takodachi.position[i].length == 12) {
        // prettier-ignore
        takodachi.color.push([
            r_color, g_color, b_color,
            r_color, g_color, b_color,
            r_color, g_color, b_color,
            r_color, g_color, b_color,
        ]);
    } else {
        takodachi.color.push([
            r_color, g_color, b_color,
            r_color, g_color, b_color,
            r_color, g_color, b_color,
        ]);
    }
}