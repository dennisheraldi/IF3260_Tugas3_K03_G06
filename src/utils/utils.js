function centerOfMass(position) {
    var x = 0;
    var y = 0;
    var z = 0;
    var points = pointsList(position);
    for (var i = 0; i < points.length; i++) {
        x += points[i][0];
        y += points[i][1];
        z += points[i][2];
    }
    return [
        parseFloat((x / points.length).toFixed(2)),
        parseFloat((y / points.length).toFixed(2)),
        parseFloat((z / points.length).toFixed(2)),
    ];
}

function pointsList(position) {
    var setOfPoints = new Set();
    var points = [];
    for (var i = 0; i < position.length; i++) {
        for (var j = 0; j < position[i].length; j += 3) {
            // Make sure that the points are unique
            setOfPoints.add(position[i][j] + ',' + position[i][j + 1] + ',' + position[i][j + 2]);
        }
    }

    // Parse the points from the set to an array in form of [x, y, z]
    setOfPoints.forEach((point) => {
        var pointArray = point.split(',');
        points.push([parseFloat(pointArray[0]), parseFloat(pointArray[1]), parseFloat(pointArray[2])]);
    });
    return points;
}

function hexToNormalizedRgb(colorHex) {
    var r = parseInt(colorHex.slice(1, 3), 16) / 255;
    var g = parseInt(colorHex.slice(3, 5), 16) / 255;
    var b = parseInt(colorHex.slice(5, 7), 16) / 255;
    return [r, g, b];
}

function sphericalToCartesian(theta, phi, r) {
    return [
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.sin(phi),
        r * Math.cos(theta) * Math.cos(phi),
    ];
}

function normalVectorsObject(vertices, indices) {
    let normals = [];
    for (let i = 0; i < indices.length; i += 3) {
        let v1 = [
            vertices[indices[i] * 3],
            vertices[indices[i] * 3 + 1],
            vertices[indices[i] * 3 + 2],
        ];
        let v2 = [
            vertices[indices[i + 1] * 3],
            vertices[indices[i + 1] * 3 + 1],
            vertices[indices[i + 1] * 3 + 2],
        ];
        let v3 = [
            vertices[indices[i + 2] * 3],
            vertices[indices[i + 2] * 3 + 1],
            vertices[indices[i + 2] * 3 + 2],
        ];

        let normal = normalVector(v1, v2, v3);

        normals.push(normal, normal);
    }

    return normals;
}

function calculateNormals(positions) {
    const normals = [];

    // Create a zero-filled array to store the normal vectors for each vertex
    for (let i = 0; i < positions.length; i += 3) {
        normals.push(0, 0, 0);
    }

    // Calculate the normal vectors for each face
    for (let i = 0; i < positions.length; i += 12) {
        // Get the positions of the three vertices for this face
        const p1 = positions.slice(i, i + 3);
        const p2 = positions.slice(i + 3, i + 6);
        const p3 = positions.slice(i + 6, i + 9);

        // Calculate the normal vector for this face
        const v1 = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
        const v2 = [p3[0] - p1[0], p3[1] - p1[1], p3[2] - p1[2]];
        const normal = [
            v1[1] * v2[2] - v1[2] * v2[1],
            v1[2] * v2[0] - v1[0] * v2[2],
            v1[0] * v2[1] - v1[1] * v2[0],
        ];

        // Add the normal vector for this face to each of its vertices
        normals[i] += normal[0];
        normals[i + 1] += normal[1];
        normals[i + 2] += normal[2];
        normals[i + 3] += normal[0];
        normals[i + 4] += normal[1];
        normals[i + 5] += normal[2];
        normals[i + 6] += normal[0];
        normals[i + 7] += normal[1];
        normals[i + 8] += normal[2];
        normals[i + 9] += normal[0];
        normals[i + 10] += normal[1];
        normals[i + 11] += normal[2];
    }

    // Normalize the normal vectors for each vertex
    for (let i = 0; i < normals.length; i += 3) {
        const x = normals[i];
        const y = normals[i + 1];
        const z = normals[i + 2];
        const length = Math.sqrt(x * x + y * y + z * z);
        normals[i] /= length;
        normals[i + 1] /= length;
        normals[i + 2] /= length;
    }

    return normals;
}
