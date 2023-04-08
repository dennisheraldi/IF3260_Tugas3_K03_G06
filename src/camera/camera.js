var cameraAngleRadians = degToRad(
    document.getElementById("camera-angle").value
);

var cameraAngleRadians2 = degToRad(
    document.getElementById("camera-angle-2").value
);

document.getElementById("camera-angle").addEventListener("input", (e) => {
    cameraAngleRadians = degToRad(e.target.value);
    drawScene();
});

document.getElementById("camera-angle-2").addEventListener("input", (e) => {
    cameraAngleRadians2 = degToRad(e.target.value);
    drawScene();
});

var cameraRadius = document.getElementById("camera-radius").value;

document.getElementById("camera-radius").addEventListener("input", (e) => {
    cameraRadius = e.target.value;
    drawScene();
});
