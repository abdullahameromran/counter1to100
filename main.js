let outer = document.querySelector(".outer");
let iner = document.querySelector(".iner");
let text = document.querySelector(".iner span");
let count = 0;

iner.addEventListener("click", () => {
    setInterval(animate, 150);
})
animate = () => {
    if (count == 82) {
        clearInterval();
        outer.classList.remove("loading");
    } else {
        count++;
        outer.classList.add("loading");
        text.textContent = count + '%';
    }
}