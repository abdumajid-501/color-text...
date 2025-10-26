const bodyEl = document.body
const formEl = document.querySelector(".form")
const wrappwerEl = document.querySelector(".wrapper")

const colors = []

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const color = formData.get("color").trim();
    
    bodyEl.style.backgroundColor = color;
    if (bodyEl.style.backgroundColor === color && colors[colors.length - 1] != color) {
        let squareEl = document.createElement("span");
        squareEl.classList.add("square")
        squareEl.style.backgroundColor = color;
        wrappwerEl.append(squareEl); 
        colors.push(color)
    }


    
    console.log(colors);
    


    formEl.reset();
})