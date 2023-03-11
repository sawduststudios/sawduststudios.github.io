// Get refs from HTML doc
const myCarousel = document.getElementById('projectsCarousel')
const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev')
const nextButton = document.querySelector('.carousel-control-next')
var slideIndex = 0

const pcFilterContainer = document.querySelector('.carousel__filter-container');
const pcFilterButtons = Array.from(pcFilterContainer.children);

const mobileFilterButtons = document.querySelectorAll('.mobile-filter-button');

// represents the current filter from options 'tech', 'unnat', 'bio', 'socio', 'env';
// filters that belong to this category have this class on them
var currentFilter = '';


$(document).ready(function() {  
    // Add a click event listener to the "Next" carousel button
    $('.carousel-control-next').on('click', function(event) {
        goToNextSlide(event);
    });
    // Add a click event listener to the "Prev" carousel button
    $('.carousel-control-prev').on('click', function(event) {
        goToPrevSlide(event);
    });
  });


function goToNextSlide() {
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


// ---- SELECTING A NEW FILTER ----

// runs when a new filter is selected
const activateFirstFilteredSlide = () => {
    if ($('.carousel-item.active').hasClass(currentFilter)) {
        return;
    }
    else {
        goToNextSlide();
    }    
}

// sets a new filter and loads the first slide in that category
const setFilter = (button, index) => {
    console.log('filter button ' + index + ' clicked');
    // if we are activating an inactive filter
    if (!button.classList.contains('active-filter')) {
        // disable the previous active filter
        var activeFilters = document.querySelectorAll('.active-filter');
        console.log("active filters:", activeFilters)
        activeFilters.forEach(element => {
            element.classList.remove('active-filter');
        });
        
        // activate the new filter
        pcFilterButtons[index].classList.add('active-filter');
        mobileFilterButtons[index].classList.add('active-filter');
        var filterClass = "";
        // select filter based on which button was clicked
        switch (index) {
            case 0:
                filterClass = 'tech';
                break;
            case 1:
                filterClass = 'unnat';
                break;
            case 2:
                filterClass = 'bio';
                break;
            case 3:
                filterClass = 'socio';
                break;
            case 4:
                filterClass = 'env';
                break;
        }
        console.log('filterClass is: ' + filterClass);
        if (currentFilter == filterClass) 
        { return; }
        currentFilter = filterClass;
        console.log("Current filter is:", currentFilter)
        // if the current slide is not in the required category
        var curr_slide = document.querySelector('.active')
        if (!(curr_slide.classList.contains(currentFilter)))
        {
            // curr_slide.classList.remove('active')
            // var new_slide = document.querySelector('.'+currentFilter)
            // new_slide.classList.add('active')
            activateFirstFilteredSlide()
        }
        filteringState(true);
    } 
    // disabeling an active filter
    else {
        // disable the previous active filter
        var activeFilters = document.querySelectorAll('.active-filter');
        console.log("active filters:", activeFilters)
        activeFilters.forEach(element => {
            element.classList.remove('active-filter');
        });
        currentFilter = '';
        filteringState(false);
    }
}

pcFilterButtons.forEach((button, index) => {
    button.addEventListener('click', e => {
        setFilter(button, index);
    })
})

mobileFilterButtons.forEach((button, index) => {
    button.addEventListener('click', e => {
        setFilter(button, index);
    })
})


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
