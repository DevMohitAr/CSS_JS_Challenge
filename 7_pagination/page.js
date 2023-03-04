const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
import fetchData from "./fetchData.js"
import displayData from "./displayData.js";
import disBtns from "./displayBtns.js";
const btnBox = document.querySelector(".btn-container");
let index=0;

const setPage = async(url)=>{
  
   const data =  await fetchData(url);
   const itemsPerPage = 9;
   const totalNumOfPages = Math.ceil(data.length / itemsPerPage);
  
   let allPages = Array.from({length:totalNumOfPages},(_,index)=>{
    const start = index * itemsPerPage;
     return data.slice(start, start + itemsPerPage);
   })
    displayData(allPages[index]);
    console.log(index);
    disBtns(allPages,index)
}

btnBox.addEventListener("click",(e)=>{
  if(e.target.classList.contains("btnPage")){
   index = Number(e.target.textContent-1)
    setPage(url)
  }
  

})
window.addEventListener('load',()=>setPage(url))

