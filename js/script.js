console.log("Hello!")

let button = document.querySelector(".button");
let container = document.querySelector(".container");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    container.classList.toggle("dark");
    if (container.classList.contains("dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
});