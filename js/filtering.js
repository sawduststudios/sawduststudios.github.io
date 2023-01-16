// Get refs from HTML doc
const myCarousel = document.getElementById('projectsCarousel')
const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev')
var leftScroll = false
var slideIndex = 0

const filterContainer = document.querySelector('.carousel__filter-container');
const filterButtons = Array.from(filterContainer.children);
// represents the current filter from options 'tech', 'unnat', 'bio', 'socio', 'env';
// filters that belong to this category have this class on them
var currentFilter = '';

function UpdateSlideIndex(delta) {
    slideIndex = slideIndex + delta + slideIndex
    slideIndex = slideIndex % slides.length;
    console.log("slide index is: " + slideIndex)
}


// myCarousel.addEventListener('slide.bs.carousel', event => {
//     // alert('A new slide is about to be shown!')
//     console.log('A new slide is about to be shown!')
//     findNextFilteredSlide()
//   });

// // finds the index of the next filtered slide
// function findNextFilteredSlide() {
//     var curr_slide = document.querySelector('.active')
//     var start_i = slides.index(curr_slide)
//     console.log("curr slide was: " + start_i)
// }


// adds a listener to the event 'when carsousel slide finishes'
myCarousel.addEventListener('slid.bs.carousel', event => {
  if (currentFilter === '') {return}    
  var curr_slide = document.querySelector('.active')
  // if the curr slide is not in the filtered class
  if(!(curr_slide.classList.contains(currentFilter)))
  {
    if (leftScroll)
    {
        // scroll left
        $("#projectsCarousel").carousel("prev");
        UpdateSlideIndex(-1);
        // keep scrolling left until a match is found
        var new_slide = document.querySelector('.active')
        if(new_slide.classList.contains(currentFilter))
            leftScroll = false
    }
    else
    {
        // scroll right
        $("#projectsCarousel").carousel("next");
        UpdateSlideIndex(1);
    }
  }
})

// handling state logic for direction when looking for a filtered slide
const prevButtonClick = () => {
    leftScroll = true
};
// adding a listener to click on prev slide button
prevButton.addEventListener('click', e => {
    prevButtonClick();
})


// ---- SELECTING A NEW FILTER ----

// runs when a new filter is selected
const activateFirstFilteredSlide = () => {
    $("#projectsCarousel").carousel("next");
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
})


// issue - hidden slides just do not appear but take up time
// const refilterSlides = () => {
//     slides.forEach((slide, index) => {
//         if (currentFilter === '' || slide.classList.contains(currentFilter))
//         {
//             slide.classList.remove('d-none')
//         }
//         else
//         {
//             slide.classList.add('d-none')
//         }
//     })
// }
