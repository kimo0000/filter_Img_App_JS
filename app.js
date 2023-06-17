const img = document.querySelector("img");
const btnUpload = document.querySelector(".load");

const filters = document.querySelectorAll(".filter div input");
const saturate = document.querySelector("#saturate");
const contrast = document.querySelector("#contrast");
const brightness = document.querySelector("#brightness");
const sepia = document.querySelector("#sepia");
const grayscale = document.querySelector("#grayscale");
const blur = document.querySelector("#blur");
const hueRotate = document.querySelector("#hue_rotate");

const reset = document.querySelector("#reset");
const download = document.querySelector("#download");
const down = document.querySelector("#down");

window.addEventListener("DOMContentLoaded", () => {
  img.style.display = "none";
  reset.style.display = "none";
  download.style.display = "none";
});

btnUpload.addEventListener("change", () => {
  resetValue();

  img.style.display = "block";
  reset.style.display = "block";
  download.style.display = "block";

  let file = new FileReader();
  file.readAsDataURL(btnUpload.files[0]);
  file.onload = () => {
    img.src = file.result;
  };
});

// Filter All Input On Img CSS Filter Property
filters.forEach((filter) => {
  filter.addEventListener("input", () => {
    img.style.filter = `
          saturate(${saturate.value}%)
          contrast(${contrast.value}%)
          brightness(${brightness.value}%)
          sepia(${sepia.value}%)
          grayscale(${grayscale.value})
          blur(${blur.value}px)
          hue-rotate(${hueRotate.value}deg)
      `;
  });
});

reset.addEventListener("click", resetValue);

function resetValue() {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = 0;
  blur.value = 0;
  hueRotate.value = 0;
}

down.addEventListener("click", () => {
  down.href = img.src;
});
