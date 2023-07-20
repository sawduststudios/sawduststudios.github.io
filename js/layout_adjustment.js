var isTouchDevice = 'ontouchstart' in document.documentElement;
const bochChangeWidthThreshold = 1040;

// Add event listener to adjust layout on load
window.addEventListener("load", function() {
    adjustLayout();
  });

// Add event listener to adjust layout on window resize
window.addEventListener('resize', function() {
    adjustLayout();
  });

function adjustLayout() {
    adjustCarouselBox();
    // adjustNavbar();
}



function adjustNavbar() {
    const contentWidth = document.body.clientWidth;

    const pcFilterContainer = document.querySelector('.carousel__filter-container');
    const mobileFilterContainer = document.querySelector('.navbar');

    const widthThreshold = 768;
  
    if (contentWidth < widthThreshold || isTouchDevice) {
      pcFilterContainer.classList.add('d-none');
      mobileFilterContainer.classList.remove('d-none');
    } else {
      pcFilterContainer.classList.remove('d-none');
      mobileFilterContainer.classList.add('d-none');
    }
}

function adjustCarouselBox() {
    // Get the height of the carousel
    var carouselHeight = document.getElementById("projectsCarousel").clientHeight;
    // Get the width of the screen
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


    // console.log("Adjusting layout... Carousel height:", carouselHeight);
  
    // Set the max-height of the slide info box to 75% of the carousel height
    const slideBoxes = document.getElementsByClassName("carousel__slide-box");
    const slideInfos = document.getElementsByClassName("carousel__slide-info");

    var boxCoeff = 0.70;
    if (carouselHeight > 650) {
        boxCoeff = 0.80
    }

    for (var i = 0; i < slideBoxes.length; i++) {
        var box = slideBoxes[i];
        var info = slideInfos[i];
        var maxHeight = Math.round(carouselHeight * boxCoeff) + "px";
        if (screenWidth > bochChangeWidthThreshold) {
          box.style.maxHeight = maxHeight;
          info.style.maxHeight = Math.round(carouselHeight * boxCoeff * 0.62) + "px";
      } else {
          box.style.maxHeight = "none";
          info.style.maxHeight = "none";
      }
        // console.log("box:", Math.round(carouselHeight * boxCoeff) + "px", "info:", Math.round(carouselHeight * boxCoeff * 0.62) + "px");
    }    
}

