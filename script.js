// Fonction pour animer les éléments lorsqu'ils sont visibles dans la fenêtre
// function animateElements() {
//   document.querySelectorAll(".progressbar").forEach(function (element) {
//     var elementPos = element.offsetTop;
//     var topOfWindow = window.scrollY;
//     var percent = element.querySelector(".circle").getAttribute("data-percent");
//     var animate = element.dataset.animate;
//     if (elementPos < topOfWindow + window.innerHeight - 30 && !animate) {
//       element.dataset.animate = true;
//       $(element)
//         .find(".circle")
//         .circleProgress({
//           value: percent / 100,
//           size: 400,
//           thickness: 15,
//           fill: {
//             color: "#03a9f4",
//           },
//         })
//         .on("circle-animation-progress", function (event, progress, stepValue) {
//           $(this)
//             .find("strong")
//             .text((stepValue * 100).toFixed(0) + "%");
//         })
//         .stop();
//     }
//   });
// }

// Appeler la fonction animateElements() lors du chargement de la page et lors du défilement
// animateElements();
// window.addEventListener("scroll", animateElements);

let progressBars = document.querySelectorAll(".progress");
progressBars.forEach((bar) => {
  let progress = bar.getAttribute("data-progress");
  bar.style.width = progress + "%";
});

// Récupérer l'élément HTML par son ID
const nbAnnees = document.getElementById("nbAnnees");
// Obtenir la date courante
const currentTime = new Date();
const currentYear = currentTime.getFullYear();
// Année de référence
const referenceYear = 2008;
// Calculer le nombre d'années écoulées depuis l'année de référence
const nbYearsPassed = currentYear - referenceYear;
// Afficher le résultat dans l'élément HTML
nbAnnees.innerHTML = nbYearsPassed;
