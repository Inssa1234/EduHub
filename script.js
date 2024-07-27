const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50){
        header.classList.add('header');
    } else {
        header.classList.remove('header');
    }
});
NProgress.start(); // Affiche la barre de progression
window.onload = function() {
  NProgress.done(); // Masque la barre de progression lorsque la page est complètement chargée
};
  
