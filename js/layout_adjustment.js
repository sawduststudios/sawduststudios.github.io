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
    adjustNavbar();
}


function adjustNavbar() {
    const widthThreshold = 800;

    const contentWidth = document.body.clientWidth;

    const pcFilterContainer = document.querySelector('.carousel__filter-container');
    const mobileFilterContainer = document.querySelector('.navbar');
  
    if (contentWidth < widthThreshold) {
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

    console.log("Adjusting layout... Carousel height:", carouselHeight);
  
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
        box.style.maxHeight = maxHeight;
        info.style.maxHeight = Math.round(carouselHeight * boxCoeff * 0.62) + "px";
        
        // console.log("box:", Math.round(carouselHeight * boxCoeff) + "px", "info:", Math.round(carouselHeight * boxCoeff * 0.62) + "px");
    }    
}

