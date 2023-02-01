document.addEventListener('DOMContentLoaded', ()=>{
    changeText() 
})

function changeText(){
    let labText = document.getElementById('text')
    labText.textContent = "This is really cool!"
}
