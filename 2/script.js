const tabButtons = document.querySelectorAll('.btn');
const tabPenals =Array.from( document.querySelectorAll('.tab__panel'))
tabButtons.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    tabButtons.forEach((btn)=>{
        btn.classList.remove('select')
    })
e.currentTarget.classList.add('select');
const btnSelect = e.currentTarget;
const id= btnSelect.getAttribute("data-id");

tabPenals.forEach((penal)=>{
penal.hidden = true
})
const penal = tabPenals.find((penal)=>{
return penal.getAttribute('aria-labelledby')===id
})
penal.hidden = false;


})
})