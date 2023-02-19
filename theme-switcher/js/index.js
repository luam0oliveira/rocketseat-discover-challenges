const switcher = document.getElementById("switcher-container");
const body = document.body;

if (localStorage.getItem("darkMode") == "true") {
  body.classList.add("dark-mode");
}

switcher.onclick = () => {
  body.classList.toggle("dark-mode");

  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
};
