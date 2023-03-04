const btnBox = document.querySelector('.btn-container')
const disBtns = (pages,activeIndex)=>{
let myBtns= pages.map((page,index)=>{
    return `<button class="btn btnPage ${activeIndex===index ?"dark":"null"}" data-index=${index+1}>${index+1}</button>`
});

myBtns =myBtns.join('');
btnBox.innerHTML = myBtns;
}
export default disBtns;