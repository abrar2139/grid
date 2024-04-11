const toggleButton = document.getElementById('toggleMusic');
const backgroundMusic = document.getElementById('backgroundMusic');
toggleButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleButton.innerHTML =" <i class='fas fa-volume-mute' style='font-size:26px; color: brown;'></i>";
    } else {
        backgroundMusic.pause();
        toggleButton.innerHTML= "<i class='fas fa-volume-up' style='font-size:26px; color: brown; '></i>";
    }
});


const galleryItems = document.querySelector(".herosection").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page-num");

const maxItem=6;
let index= 1;

const pagination = Math.ceil(galleryItems.length/maxItem);

prev.addEventListener('click', function(){
   index--
   check()
   showItems() 
})
next.addEventListener('click', function () {
    index++
    check()
    showItems()
})
function check() {
    if (index==pagination) {
        next.classList.add("disabled");
    }
    else{
        next.classList.remove("disabled");

    }
    if (index==1) {
        prev.classList.add("disabled")
    }
    else{
        prev.classList.remove("disabled")
       
    }
}

function showItems() {
  for (let i= 0; i < galleryItems.length; i++) {
    galleryItems[i].classList.remove("show");
    galleryItems[i].classList.add("hide");
    
    if (i>=(index*maxItem)-maxItem && i<index*maxItem) {
        galleryItems[i].classList.remove("hide");
       galleryItems[i].classList.add("show");
        
    }  
    page.innerHTML=index;
  }
}

window.onload=function(){
    showItems()
    check()
}