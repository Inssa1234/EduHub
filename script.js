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
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(
        "body"
      ).style.visibility = "hidden";
      document.querySelector(
        "#progress-bar"
      ).style.visibility = "visible";
    } else {
      document.querySelector(
        "#progress-bar"
      ).style.display = "none";
      document.querySelector(
        "body"
      ).style.visibility = "visible";
    }
  };
  
  let progress = 0;
  const interval = setInterval(() => {
    if (progress < 100) {
      progress += 10;
      document.querySelector('.progress-bar-fill').style.width = `${progress}%`;
    } else {
      clearInterval(interval);
    }
  }, 500);
  
