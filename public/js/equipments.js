

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

const tabs = document.querySelector(".equipments--container");
const tabButton = document.querySelectorAll(".nav--tabs__links");
const contents = document.querySelectorAll(".equipment__description");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}

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
