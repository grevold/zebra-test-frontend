const buttonContainer = document.querySelector(".button_container");
const fillHover = document.querySelector(".fill_hover");
const fillHoverSpan = document.querySelector(".fill_hover_span");
const blades = document.querySelector(".windmill_blades");

buttonContainer.addEventListener("mouseover", function () {
  fillHover.style.left = "0";
  fillHoverSpan.style.left = "350px";
});
buttonContainer.addEventListener("mouseout", function () {
  fillHover.style.left = "-300px";
  fillHoverSpan.style.left = "50%";
});

buttonContainer.addEventListener("click", function () {
  blades.classList.add("windmill_blades_spin_back");
  setTimeout(() => {
    blades.classList.remove("windmill_blades_spin_back");
    blades.classList.add("windmill_blades_spin");
  }, 1000);
});
