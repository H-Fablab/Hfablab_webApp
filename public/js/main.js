


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




//:::::::::::::begin  of event collapse::::::::::::://

const accordionContent = document.querySelectorAll(".event-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".expand--btn");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".event-description");
        if(item.classList.contains("open")){
            description.style.display = `block`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("svg--down", "svg--up");
        }else{
            description.style.display = "none";
            item.querySelector("i").classList.replace("svg--up", "svg--down");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".event-description");
            des.style.display = "none";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}

//:::::::::::::begin   of event collapse::::::::::::://





//:::::::::::::begin of equipments list tabs::::::::::::://

// const tabs = document.querySelector(".model--item");
// const tabButton = document.querySelectorAll(".collapse--btn");
// const contents = document.querySelectorAll(".model--content");

// tabs.onclick = e => {
//   const id = e.target.dataset.id;
//   if (id) {
//     tabButton.forEach(btn => {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");

//     contents.forEach(content => {
//       content.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// }



//:::::::::::: Beginning of blog card slider:::::::::::://

document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.post--item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.post--item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}

//:::::::::::: End of blog card slider:::::::::::://





  
//::::::::::::Beginning of hero slider slider:::::::::::://

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

//:::::::::::: End of hero slider slider:::::::::::://





// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const carouselChildrens = [...carousel.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
// carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
// carousel.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
//     });
// });

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     // Records the initial cursor and scroll position of the carousel
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// const infiniteScroll = () => {
//     // If the carousel is at the beginning, scroll to the end
//     if(carousel.scrollLeft === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }
//     // If the carousel is at the end, scroll to the beginning
//     else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }

//     // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//     clearTimeout(timeoutId);
//     if(!wrapper.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//     // Autoplay the carousel after every 2500 ms
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);









