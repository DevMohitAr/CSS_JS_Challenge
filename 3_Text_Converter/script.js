const allInputs = Array.from(document.querySelectorAll("[name='filter']"));
const textInitial = document.querySelector(".initial");
const textFinal = document.querySelector(".final");
let text = textInitial.value;

function filter(text) {
  const radioFilter = allInputs.find((ele) => {
    return ele.checked === true;
  });
  const selectedValue = radioFilter.value;
  if (selectedValue === "capital") {
    textFinal.value = text.toUpperCase();
  }
  if (selectedValue === "alternate") {
    let newText = text.split("");
    const myText = newText.map((ele, index) => {
      if (index % 2) {
        return ele.toLowerCase();
      }
      return ele.toUpperCase();
    });
    textFinal.value = myText.join("");
  }
  if (selectedValue === "lower") {
    textFinal.value = text.toLowerCase();
  }
}

textInitial.addEventListener("input", (e) => filter(e.target.value));

allInputs.forEach((ele) => {
  ele.addEventListener("input", (e) => {
    filter(textInitial.value);
  });
});
