const buttons = document.querySelectorAll(".btn");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");
console.log(buttons);
buttons.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const btn = e.currentTarget;
    const card = btn.closest(".cards");
    const img = card.querySelector("img");
    const srcset = img.src;
    const text = card.querySelector("h2").textContent;
    const innerDetails = `
    <img  src = "${srcset}"/>
    <h2>${text}</h2>
    `;
    modalInner.innerHTML = innerDetails;
    modalOuter.classList.add("open");
    
  });
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOuter.classList.remove("open");
    
  }
});
modalOuter.addEventListener("click", (e) => {
  const isOutside = !e.target.parentElement.classList.contains("modal-inner");
  if (isOutside) {
    modalOuter.classList.remove("open");
   
  }
});
