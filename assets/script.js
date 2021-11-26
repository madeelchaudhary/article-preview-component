const tooltipToggler = document.querySelector(".tooltip-toggler");

function tooltipHandler(e) {
  const x = window.matchMedia("(max-width: 890px)");
  if (x.matches) {
    e.currentTarget.parentElement.classList.toggle("tooltip-show");
  }
}
tooltipToggler.addEventListener("click", tooltipHandler);
