

//:::::::::::::begin of equipment list tabs scroll::::::::::::://

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.querySelector('.nav--tabs--container').scrollLeft += 50;
};
buttonLeft.onclick = function () {
  document.querySelector('.nav--tabs--container').scrollLeft -= 50;
};

//:::::::::::::begin  of equipment list tabs scroll::::::::::::://




//:::::::::::: Beginning of Equipment list nav toggler:::::::::::://

let tabs = document.querySelectorAll(".nav--tabs--container .nav--tabs__links");
let tabContents = document.querySelectorAll(".equipment__description--wrapper .equipment__description");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

//:::::::::::: End of Equipment list nav toggler:::::::::::://





// //:::::::::::: End of Equipment model list accordion:::::::::::://

let models_btns = document.querySelectorAll(".equipment__description--wrapper .collapse--btn");
for (var i = 0; i < models_btns.length; i++) {
    models_btns[i].addEventListener("click", (e)=>{
    let clickedModels_btn = e.target.closest('.model--item')
    clickedModels_btn.classList.toggle("active")
  });
}
// //:::::::::::: End of Equipment model list accordion:::::::::::://
