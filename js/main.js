// toogle side menu
document.getElementById("menu").addEventListener("click", showSideMenu);
function showSideMenu() {
  let disply = document.querySelector("nav").classList.contains("appear");
  if (!disply) {
    document.querySelector("nav").classList.add("appear");
  } else {
    document.querySelector("nav").classList.remove("appear");
  }
}

// close menus when clicked outside
window.addEventListener("click", function (e) {
  let side_menu = document.querySelector("nav");
  if (
    !side_menu.contains(e.target) &&
    e.target != document.querySelector("#menu i")
  ) {
    document.querySelector("nav").classList.remove("appear");
  }
});
