const bodyEl = document.body
const formEl = document.querySelector(".form")
const wrappwerEl = document.querySelector(".wrapper")
const btnEl = document.querySelector(".btn-reset")

const colors = JSON.parse(localStorage.getItem("colors")) || [];


const createSquareEl = (colors) => {
    wrappwerEl.innerHTML = ""
    colors.forEach((color) => {
        let squareEl = document.createElement("span");
        squareEl.classList.add("square")
        squareEl.style.backgroundColor = color;
        wrappwerEl.append(squareEl); 
    });
}

createSquareEl(colors)

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const color = formData.get("color").trim();
    
    bodyEl.style.backgroundColor = color;
    if (bodyEl.style.backgroundColor === color && colors[colors.length - 1] != color) {
        colors.push(color)
        createSquareEl(colors)
        localStorage.setItem("colors", JSON.stringify(colors));
    }


    
    console.log(colors);
    


    formEl.reset();
})



btnEl.addEventListener("click", () => {
    localStorage.clear();

    location.reload();
})