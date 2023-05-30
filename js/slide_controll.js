
$(document).ready(function() {  
    // Add a click event listener to the "Next" carousel button
    $('.carousel-control-next').on('click', function(event) {
        goToNextSlide();
    });
    // Add a click event listener to the "Prev" carousel button
    $('.carousel-control-prev').on('click', function(event) {
        goToPrevSlide();
    });
  });

function goToNextSlide() {
    console.log("Going to next slide...");
    // Hide the project box detail if open
    tryHideCurrentBox();
    // Hide author detail if open
    tryHideAuthorDetail();

    // Check if the currentFilter string is empty
    if (currentFilter.length > 0) {
        // Find the next slide with the desired class
        var $nextSlide = $('.carousel-item.active').nextAll('.carousel-item').filter('.' + currentFilter).first();

        // If no slide with the desired class is found, loop back to the first slide with the desired class
        if ($nextSlide.length === 0) {
            $nextSlide = $('.carousel-item').siblings('.' + currentFilter).filter(':first');
        }
        if ($nextSlide.length > 0) {
            // If a slide with the class was found, update the carousel to display it
            $('#projectsCarousel').carousel($nextSlide.index());
        } else {
            // If no slide with the class was found, do normal next
            $('#projectsCarousel').carousel('next');
        }
    } else {
    // If the currentFilter string is empty, proceed to the next slide as usual
    $('#projectsCarousel').carousel('next');
    }
}

function goToPrevSlide() {
    console.log("Going to next slide...");
    // Hide the project box detail if open
    tryHideCurrentBox();
    // Hide author detail if open
    tryHideAuthorDetail();
    
    // Check if the currentFilter string is empty
    if (currentFilter.length > 0) {
        // Find the next slide with the desired class
        var $prevSlide = $('.carousel-item.active').prevAll('.carousel-item').filter('.' + currentFilter).first();

        // If no slide with the desired class is found, loop back to the first slide with the desired class
        if ($prevSlide.length === 0) {
            $prevSlide = $('.carousel-item').siblings('.' + currentFilter).last();
        }
        if ($prevSlide.length > 0) {
            // If a slide with the class was found, update the carousel to display it
            $('#projectsCarousel').carousel($prevSlide.index());
        } else {
            // If no slide with the class was found, do normal prev
            $('#projectsCarousel').carousel('prev');
        }
    } else {
    // If the currentFilter string is empty, proceed to the next slide as usual
    $('#projectsCarousel').carousel('prev');
    }
}


let touchStartX = null;
let touchEndX = null;

myCarousel.addEventListener('touchstart', function(e) {
  touchStartX = e.touches[0].clientX;
});

myCarousel.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].clientX;
  handleCarouselSwipe();
});

function handleCarouselSwipe() {
  if (touchStartX > touchEndX && window.innerWidth < 768) {
    goToNextSlide();
  } else if (touchStartX < touchEndX && window.innerWidth < 768) {
    goToPrevSlide();
  }

  touchStartX = null;
  touchEndX = null;
}