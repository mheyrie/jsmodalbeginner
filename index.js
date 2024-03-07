let openBtn = document.querySelector(".open-btn")
let modalContainer = document.getElementById("modal-container")
let closeBtn = document.querySelector(".close")

//Event Listener

//Show modal
openBtn.addEventListener('click', function(){

    modalContainer.style.display = 'block';
})

//Close Modal
closeBtn.addEventListener('click', function(){

    modalContainer.style.display = 'none';
})

//Close Modal that handle anywhere clicking
window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
    
})
