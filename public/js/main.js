
let nav__toggle = document.getElementById('nav-toggle')
nav__toggle.onclick = e =>{
		var x = document.getElementById("sm-menu--content")
		var menu__toggle = document.getElementById("nav-toggle");
		  menu__toggle.classList.toggle("open")
		  x.classList.toggle("active")
}

document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.post--item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.post--item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}




//::::::::::::Beginning of hero slider slider:::::::::::://
function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 6000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 6000);
}


//:::::::::::: End of hero slider slider:::::::::::://


//:::::::::::: Beginning of blog card slider:::::::::::://



//:::::::::::: End of blog card slider:::::::::::://
