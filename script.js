const display = document.querySelector(".display")
const btns = document.querySelectorAll("button")

console.log(btns);
console.log(display);

btns.forEach((items) => {
    items.addEventListener("click", () => {
        if(items.id === "clear"){
            display.textContent = " "
        }else if(items.id === "ce"){
            display.textContent = display.textContent.slice(0,-1)
        }else if(items.id === "equal"){
            display.textContent = eval(display.textContent)
        }else{
            display.textContent += items.id
        }
    })
})