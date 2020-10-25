const districts = document.querySelectorAll('path')
const modal  = document.querySelector('.modal-bg')
const closeModal  = document.querySelector('.closeBtn')
let regionName = document.querySelector('.modal-heading h2')
const dataattri = document.querySelectorAll('[data-region]')
const longshit = modal.children[0].childNodes[1].children
let questionNo = 0

//console.log(dataattri)
districts.forEach(region =>{
    region.addEventListener('click',()=> {
        //console.log(modal.children[0].childNodes[1].children[0])
        questionNo+=1
        console.log(longshit[4])
        regionName.innerText = region.dataset.region
        console.log(regionName)
        modal.classList.add('active')
    })   
})

//console.log(modal.childNodes)

closeModal.addEventListener('click',()=>{
    modal.classList.remove('active')
})

function openModel(model){
    if(model == null) return
    model.classList.add('active')
}
function closeModel(model){
    if(model == null) return
    model.classList.remove('active')
}