$(document).ready(function ($) {
  function animateElements() {
    $(".progressbar").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find(".circle").attr("data-percent");
      var animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            // startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 400,
            thickness: 15,
            fill: {
              color: "#03a9f4",
            },
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .find("strong")
                .text((stepValue * 100).toFixed(0) + "%");
            }
          )
          .stop();
      }
    });
  }

  animateElements();
  $(window).scroll(animateElements);
});

let progressBars = document.querySelectorAll(".progress");
progressBars.forEach((bar) => {
  let progress = bar.getAttribute("data-progress");
  bar.style.width = progress + "%";
});

var nbAnnees = document.getElementById("nbAnnees");
var currentTime = new Date();
var year = currentTime.getFullYear();
nbAnnees.innerHTML = year - 2008;
