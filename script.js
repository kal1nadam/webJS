
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";
    
    setTimeout(carousel, 6000); // Change image every 6 seconds
}



// <!-- MAP -->

function initMap(){
    var options = {
        zoom:13,
        center: {lat: 39.007504, lng: -94.529625},
    }
    var map = new google.maps.Map(document.getElementById("map"), options)
    var marker = new google.maps.Marker({
        position:{lat: 39.007504, lng: -94.529625},
        map: map
    })
}





// <!-- LIGHTBOX -->

const lightbox = document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)
const images = document.querySelectorAll("#galimg")
images.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("active")
        const img = document.createElement("img")
        img.src = image.src
        img.classList.add("LBborder")
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})
lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active")
})


// SCROLLSPY


let about = document.querySelector("#about");
let map = document.querySelector("#mappart");
let gallery = document.querySelector("#gallery");
let history = document.querySelector("#history");

let aboutbutton = document.querySelector(".about")
let mapbutton = document.querySelector(".map")
let gallerybutton = document.querySelector(".gallery")
let historybutton = document.querySelector(".history")

window.addEventListener("scroll", () =>{
    var windo = window.pageYOffset;
    if(about.offsetTop <= windo && map.offsetTop - 1 > windo){
        console.log("about")
        aboutbutton.setAttribute("id", "aboutactive")
        mapbutton.removeAttribute("id", "mapactive")
        gallerybutton.removeAttribute("id", "galleryactive")
        historybutton.removeAttribute("id", "historyactive")
    }

    else if(map.offsetTop - 1 <= windo && gallery.offsetTop > windo){
        console.log("map")
        aboutbutton.removeAttribute("id", "aboutactive")
        mapbutton.setAttribute("id", "mapactive")
        gallerybutton.removeAttribute("id", "galleryactive")
        historybutton.removeAttribute("id", "historyactive")
    }

    else if(gallery.offsetTop <= windo && history.offsetTop > windo){
        console.log("gallery")
        aboutbutton.removeAttribute("id", "aboutactive")
        mapbutton.removeAttribute("id", "mapactive")
        gallerybutton.setAttribute("id", "galleryactive")
        historybutton.removeAttribute("id", "historyactive")
    }

    else if(history.offsetTop <= windo){
        console.log("history")
        aboutbutton.removeAttribute("id", "aboutactive")
        mapbutton.removeAttribute("id", "mapactive")
        gallerybutton.removeAttribute("id", "galleryactive")
        historybutton.setAttribute("id", "historyactive")
    }

    else{
        console.log("begin")
        aboutbutton.removeAttribute("id", "aboutactive")
        mapbutton.removeAttribute("id", "mapactive")
        gallerybutton.removeAttribute("id", "galleryactive")
        historybutton.removeAttribute("id", "historyactive")
    }
})
