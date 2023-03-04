const wrapper = document.querySelector(".wrapper");
const title = document.querySelector("h1");
const displayData = (list) => {
    wrapper.innerHTML = `<h1>pagination</h1>`
  let newList = list.map(({ avatar_url: img, login: name, url }) => {
    return `<article>
    <img src="${img}"/>
    <div class="text_info">
        <h1 class="nameTitle">${name}</h1>
        </div>
        </article>
        `;
  }).join('');
 
  title.textContent = "";
  wrapper.innerHTML = newList;
};
export default displayData;
