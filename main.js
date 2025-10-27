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
        currentIndex = colors.length - 1; 
        highlightActive(); 
    }

    console.log(colors);
    formEl.reset();
})

btnEl.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})



const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let currentIndex = colors.length > 0 ? colors.length - 1 : -1;

const highlightActive = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((sq, i) => {
        if (i === currentIndex) sq.classList.add("active"); 
        else sq.classList.remove("active");   
    });
};

highlightActive();

prevBtn.addEventListener("click", () => {
    if (colors.length === 0) return;
    currentIndex--;
    if (currentIndex < 0) currentIndex = colors.length - 1;
    bodyEl.style.backgroundColor = colors[currentIndex];
    highlightActive(); 
});

nextBtn.addEventListener("click", () => {
    if (colors.length === 0) return;
    currentIndex++;
    if (currentIndex >= colors.length) currentIndex = 0;
    bodyEl.style.backgroundColor = colors[currentIndex];
    highlightActive(); 
});
