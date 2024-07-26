const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50){
        header.classList.add('header');
    } else {
        header.classList.remove('header');
    }
});