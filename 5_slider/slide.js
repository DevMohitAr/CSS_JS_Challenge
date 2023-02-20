let prev;
let current;
let next;
const slides = document.querySelector(".slides");
const prevButton = document.querySelector(".goToPrev");
const nextButton = document.querySelector(".goToNext");

function startSlider(){
    current = document.querySelector(".current") || slides.firstElementSibling;
    prev = current.previousElementSibling;
    next = current.nextElementSibling || slides.firstElementSibling;
   
}
function applyClasses(){
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
}
function move(direction){
    const classesToRemove = ["prev","current","next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction==="back"){
        [prev,current,next]=[prev.previousElementSibling || slides.lastElementChild,prev,current]
    }else{
        [prev,current,next] = [current,next,next.nextElementSibling || slides.firstElementChild,];
    }
    applyClasses()
}



startSlider()
applyClasses();

prevButton.addEventListener("click",()=>move("back"));
nextButton.addEventListener("click",move)