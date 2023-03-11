const myCarousel = document.getElementById('projectsCarousel')

const pcFilterContainer = document.querySelector('.carousel__filter-container');
const pcFilterButtons = Array.from(pcFilterContainer.children);

const mobileFilterButtons = document.querySelectorAll('.mobile-filter-button');

const navbar = document.querySelector('.navbar');
const navbarOffset = navbar.offsetTop;

// represents the current filter from options 'tech', 'unnat', 'bio', 'socio', 'env';
// filters that belong to this category have this class on them
var currentFilter = '';

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


// function to handle the scroll event
function handleScroll() {
    // get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var carouselHeight = document.getElementById("projectsCarousel").clientHeight;
  
    // check if the user has scrolled past the navbar
    if (scrollTop >= navbarOffset && scrollTop <= navbarOffset + carouselHeight/2) {
      // add the fixed-top class to the navbar
      navbar.classList.remove('d-none');
      navbar.classList.add('fixed-top');
    } else {
      // remove the fixed-top class from the navbar
      navbar.classList.remove('fixed-top');
      navbar.classList.add('d-none');
    }
  }
  
  // add the scroll event listener
  window.addEventListener('scroll', handleScroll);
