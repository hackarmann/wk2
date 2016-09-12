var imagesContainer = document.getElementsByClassName('slider');
var image = document.getElementsByClassName('slideImage');
var dots = document.getElementsByClassName('dot');
var nextSlide = 1;
var oldSlide = 0;
function slide() {
    image[nextSlide].classList.add("slideToLeft");
    image[nextSlide].classList.remove("getInLine");
    image[oldSlide].classList.add("slideAllTheWay");
    image[oldSlide].classList.remove("slideToLeft");
    dots[nextSlide].classList.add("theChosenOne");
    dots[oldSlide].classList.remove("theChosenOne");
    console.log(image[nextSlide]);
    image[nextSlide].addEventListener("transitionend", prepareNextSlide);
    var oldOld = oldSlide;
    var oldNext = nextSlide;
    function prepareNextSlide (){
        image[oldOld].classList.remove("slideAllTheWay");
        image[oldOld].classList.add("getInLine");
        image[oldNext].removeEventListener("transitionend", prepareNextSlide);
    }
    nextSlide++;
    if (nextSlide > 3){
        nextSlide = 0;
    }
    oldSlide++;
    if (oldSlide > 3){
        oldSlide = 0;
    }
    setTimeout(slide, 3000);
    console.log("lets see");
}

function firstTime (){
    setTimeout(slide,3000);
}
firstTime();











/*var sliderImages = document.getElementsByClassName("slideImage");
var currentImage = sliderImages[0];
currentImage.className += " active*/
