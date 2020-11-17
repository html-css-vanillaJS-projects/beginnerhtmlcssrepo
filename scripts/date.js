let inputs = document.querySelectorAll("input");
let selects = document.querySelectorAll("select");
let textarea = document.querySelector("textarea");
inputs.forEach((input) => {
    input.addEventListener("input", (evt) => {
        evt.target.style.fontSize = "1.2em";
        (evt.target.name === "age") ? (evt.target.value < 0) ? evt.target.value = 1: evt.target.value = evt.target.value: evt.target.value = evt.target.value;
    });
})

selects.forEach((select) => {
    select.addEventListener("input", (evt) => {
        evt.target.style.fontSize = "1.2em"
    });
})

textarea.addEventListener("keypress", (evt) => {
    evt.target.style.fontSize = "1.5em"
});