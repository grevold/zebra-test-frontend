const buttonContainer = document.querySelector(".button_container");
const fillHover = document.querySelector(".fill_hover");
const fillHoverSpan = document.querySelector(".fill_hover_span");
const blades = document.querySelector(".windmill_blades");
const clouds = document.querySelector(".clouds");

//анимация для движения облаков
window.setTimeout(() => {
  clouds.style.left = "-800px";
}, 1000);

//анимация при наведении на кнопку
buttonContainer.addEventListener("mouseover", function () {
  fillHover.style.left = "0";
  fillHoverSpan.style.left = "350px";
});

//анимация при выводе курсора с кнопки
buttonContainer.addEventListener("mouseout", function () {
  fillHover.style.left = "-300px";
  fillHoverSpan.style.left = "50%";
});

//анимация, запускающая движение лопастей
buttonContainer.addEventListener("click", function () {
  blades.classList.add("windmill_blades_spin_back");
  window.setTimeout(() => {
    blades.classList.remove("windmill_blades_spin_back");
    blades.classList.add("windmill_blades_spin");
  }, 1000);
});
