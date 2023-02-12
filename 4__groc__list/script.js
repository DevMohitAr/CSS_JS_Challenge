// Declaration
const btn = document.querySelector(".btn");
const inputText = document.querySelector(".inputText");
let textContent = document.querySelector(".content");
const btnEnter = document.querySelector(".enter");
let items = localStorage.getItem("item");
let index;

// set items
items ? (items = JSON.parse(items)) : (items = []);

// adding event listener on window
window.addEventListener("load", () => {
  showItems(items);
});

// setting function
function showItems(items) {
  let html = "";
  items.forEach((element) => {
    html += `<article>
 <h3 class="input__item">${element}</h3>
            <div class="icon__box">
            <button class="icon edit">
              <svg
                width="700pt"
                height="700pt"
                version="1.1"
                viewBox="0 0 700 700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="m235.39 308.73 203.72-203.73 85.891 85.891-203.73 203.72-96.602 10.727z"
                  />
                  <path
                    d="m465.13 78.961 35.121-35.105c5.707-5.6719 13.43-8.8516 21.473-8.8516 8.0469 0 15.766 3.1797 21.473 8.8516l42.93 42.945c5.6836 5.6992 8.8711 13.422 8.8711 21.473 0 8.0508-3.1875 15.77-8.8711 21.473l-35.105 35.105z"
                  />
                  <path
                    d="m560 297.5c-4.6406 0-9.0938 1.8438-12.375 5.125s-5.125 7.7344-5.125 12.375v157.5c0 4.6406-1.8438 9.0938-5.125 12.375s-7.7344 5.125-12.375 5.125h-367.5c-4.6406 0-9.0938-1.8438-12.375-5.125s-5.125-7.7344-5.125-12.375v-367.5c0-4.6406 1.8438-9.0938 5.125-12.375s7.7344-5.125 12.375-5.125h157.5c6.2539 0 12.031-3.3359 15.156-8.75s3.125-12.086 0-17.5-8.9023-8.75-15.156-8.75h-157.5c-13.926 0-27.277 5.5312-37.125 15.375-9.8438 9.8477-15.375 23.199-15.375 37.125v367.5c0 13.926 5.5312 27.277 15.375 37.125 9.8477 9.8438 23.199 15.375 37.125 15.375h367.5c13.926 0 27.277-5.5312 37.125-15.375 9.8438-9.8477 15.375-23.199 15.375-37.125v-157.5c0-4.6406-1.8438-9.0938-5.125-12.375s-7.7344-5.125-12.375-5.125z"
                  />
                </g>
              </svg>
            </button>
            <button class="icon trash">
              <svg
                width="700pt"
                height="700pt"
                version="1.1"
                viewBox="0 0 700 700"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g>
                  <path
                    d="m350.52 67.203c-19.52 0-33.062 7.2578-43.051 14.875-9.9883 7.6172-16.969 14.855-28.875 19.602l0.003906-0.003907c-4.3516 1.5938-7.2734 5.6953-7.3516 10.324h-106.05v22.398h369.6v-22.398h-106.05c-0.078125-4.6289-3-8.7305-7.3516-10.324-11.988-4.7656-19.332-12.051-29.227-19.602-9.8906-7.5508-23.047-14.875-41.648-14.875zm0 22.398c13.375 0 19.547 3.875 28 10.324 4.4766 3.418 9.3594 7.8047 15.398 12.074h-88.199c6.0352-4.3164 10.922-8.6602 15.398-12.074 8.375-6.3828 14.777-10.324 29.398-10.324zm-151.73 56v296.98c0 33.504 16.715 50.227 50.574 50.227h201.6c33.371 0 50.227-16.723 50.227-50.227v-296.98zm61.602 72.801h22.398v201.6h-22.398zm78.398 0h22.398v201.6h-22.398zm78.398 0h22.398v201.6h-22.398z"
                  /> 
                </g>
              </svg>
            </button>
            </div>  
        </article>`;
  });
  textContent.innerHTML = html;
}

// click event outside
window.addEventListener("click", (e) => {
  const btn = e.target.closest(".icon");
  const selectText = btn.closest("article").querySelector("h3").textContent;
  const itemIndex = items.indexOf(selectText);
  if (btn.classList.contains("trash")) {
    items.splice(itemIndex, 1);
    localStorage.setItem("item", JSON.stringify(items));
    showItems(items);
  }
  if (btn.classList.contains("edit")) {
    inputText.value = selectText;
    btnEnter.textContent = "edit";
    index=itemIndex; 
  }
});

// button click event
btn.addEventListener("click", (e) => {
  let item = e.target.parentElement.querySelector(".inputText").value;

  if (btnEnter.textContent === "edit") {
   items.splice(index,1,inputText.value);
   localStorage.setItem('item',JSON.stringify(items));
   inputText.value=''
   showItems(items);
   btnEnter.textContent = "Enter item"
   
    
  }
  if (btnEnter.textContent === "Enter item") {
    !items.includes(item) && item != "" && items.push(item);
    localStorage.setItem("item", JSON.stringify(items));
    showItems(items);
    e.target.parentElement.querySelector(".inputText").value = "";
  }
});
