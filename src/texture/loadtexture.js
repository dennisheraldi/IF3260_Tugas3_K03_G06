const textureRadioButtons = document.querySelectorAll(
  'input[type="radio"][name="texture"]'
);
const textureFileUploadContainer = document.getElementById("texture-file-upload-container");

for (const radioButton of textureRadioButtons) {
  radioButton.addEventListener("change", (event) => {
      if (event.target.value === "1") {
        textureFileUploadContainer.style.display = "flex";
        drawScene();
      } else {
        textureFileUploadContainer.style.display = "none";
        drawScene();
      }
  });
}

document.getElementById("texture-file-input").addEventListener("change", (e) => {
  var textureFile = e.target.files[0];
  var url = URL.createObjectURL(textureFile);

  restartTexture(url);
  drawScene();
});