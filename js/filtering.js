// Get refs from HTML doc
const myCarousel = document.getElementById('projectsCarousel')
const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev')
const nextButton = document.querySelector('.carousel-control-next')
var leftScroll = false
var slideIndex = 0

const filterContainer = document.querySelector('.carousel__filter-container');
const filterButtons = Array.from(filterContainer.children);
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
const setFilter = (index) => {
    console.log('filter button ' + index + ' clicked');
    // if we are activating an inactive filter
    if (!filterButtons[index].classList.contains('active-filter')) {
        // disable the previous active filter
        var activeFilter = document.querySelector('.active-filter');
        if (activeFilter) {
            activeFilter.classList.remove('active-filter');
        }
        // activate the new filter
        filterButtons[index].classList.add('active-filter');
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
        
    } 
    // disabeling an active filter
    else {
        filterButtons[index].classList.remove('active-filter');
        currentFilter = '';
    }
}

filterButtons.forEach((button, index) => {
    filterButtons[index].addEventListener('click', e => {
        setFilter(index);
    })
    leftScroll = false
})
