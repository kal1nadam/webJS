
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

// SLIDE
/*
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.module');

    if (entry.isIntersecting) {
      square.classList.add('square-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation');
  });
});
*/