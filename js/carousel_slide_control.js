// Find the Bootstrap carousel with id "projectsCarousel"
var carousel = $('#projectsCarousel');
// The slide interval for the carousel
const slideInterval = 5000;

// Flags to represent the state
var boxDetailOn = false;
var authorInfoOn = false;
var filterOn = false;

function boxDetailState(newState) {
    // console.log("BOX state changed", newState);
    boxDetailOn = newState;
    updateCarouselSlidingState();
}

function authorInfoState(newState) {
    // console.log("AUTHOR state changed", newState);
    authorInfoOn = newState;
    updateCarouselSlidingState();
}

function filteringState(newState) {
    // console.log("FILTER state changed", newState);
    filterOn = newState;
    updateCarouselSlidingState();
}

function updateCarouselSlidingState() {
    var shouldSlide = !(boxDetailOn || authorInfoOn || filterOn);

    if (shouldSlide) {
        startCarousel();
    }
    else {
        stopCarousel();
    }
}

$(document).ready(function() {
    // Set the cycle interval on the carousel to 7 seconds
    carousel.carousel({
        interval: slideInterval
    });
    carousel.carousel('cycle');
    mobileInnitSwipe();
  });

function stopCarousel() {
    // console.log("Carousel STOP sliding...");
    carousel.carousel('pause');
}

function startCarousel() {
    // console.log("Carousel START sliding...");
    carousel.carousel('cycle');
}
  
// innitial slide to show that you can swipe
function mobileInnitSwipe() {
    if (window.innerWidth < 1040) {
        setTimeout(goToNextSlide, 3000); // 3 seconds delay
    }
}