const list = document.querySelectorAll(".header__nav li a");
const flag = document.querySelector(".header__nav__mobile");
const menu = document.querySelector(".header__nav");

flag.addEventListener("click", () => {
    console.log("beClicked!");
    if (!menu.classList.contains("show")) {
        menu.classList.add("show");
        console.log("#");
    } else {
        menu.classList.remove("show");
        console.log("$");
    }
    console.log("Clicked!");
});

list.forEach((li) => {
    li.addEventListener("mouseover", () => {
        list.forEach((el) => {
            if (el !== li) {
                el.style.color = "#eaeaea";
            }
        });
    });
    li.addEventListener("mouseout", () => {
        list.forEach((el) => {
            if (el !== li) {
                el.style.color = "#22242a";
            }
        });
    });
});
