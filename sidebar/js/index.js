const toggleMenuButton = document.getElementById("toggle-menu");
const body = document.querySelector("body");

toggleMenuButton.onclick = () => {
  body.classList.toggle("active");
};
