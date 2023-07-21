// Find the Bootstrap carousel with id "projectsCarousel"
var carousel = $('#projectsCarousel');
// The slide interval for the carousel
const slideInterval = 7000;

// Flags to represent the state
var boxDetailOn = false;
var authorInfoOn = false;
var filterOn = false;

function boxDetailOnState(newState) {
    // console.log("BOX state changed", newState);
    boxDetailOn = newState;
    updateCarouselSlidingState();
}

function authorInfoOnState(newState) {
    // console.log("AUTHOR state changed", newState);
    authorInfoOn = newState;
    updateCarouselSlidingState();
}

function filteringOnState(newState) {
    // console.log("FILTER state changed", newState);
    filterOn = newState;
    updateCarouselSlidingState();
}

function updateCarouselSlidingState() {
    var shouldSlide = !(boxDetailOn || authorInfoOn || filterOn);
    // console.log("BoxOn:" + boxDetailOn + ", authorOn:" + authorInfoOn + ", filterOn:" + filterOn + " --> shouldSlide:" + shouldSlide);
    if (shouldSlide) {
        startCarousel();
    }
    else {
        stopCarousel();
    }
}

$(document).ready(function() {
    // Set the cycle interval on the carousel
    carousel.carousel({
        interval: slideInterval,
        pause: false
    });
    carousel.carousel('cycle');
    mobileInnitSwipe();
  });

function stopCarousel() {
    console.log("Carousel STOP sliding...");
    $('.carousel').carousel({
        interval: 999999
    });
    carousel.carousel('pause');

    // carousel.carousel({
    //     pause: true,
    //     interval: false
    // });
}

function startCarousel() {
    console.log("Carousel START sliding...");
    $('.carousel').carousel({
        interval: slideInterval
    });
    carousel.carousel('cycle');
}

function allowStartCarousel() {
    updateCarouselSlidingState();
}
  
// innitial slide to show that you can swipe
function mobileInnitSwipe() {
    if (window.innerWidth < 1040) {
        setTimeout(goToNextSlide, 3000); // 3 seconds delay
    }
}