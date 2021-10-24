const menu = document.getElementById("nav-menu")
const button = document.getElementById("button")

button.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})