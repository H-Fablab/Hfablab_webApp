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

