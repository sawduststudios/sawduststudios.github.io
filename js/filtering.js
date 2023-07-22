const myCarousel = document.getElementById('projectsCarousel')

const pcFilterContainer = document.querySelector('.carousel__filter-container');
const pcFilterButtons = Array.from(pcFilterContainer.children);

const filterLabel = document.querySelector('.carousel__filter-label');

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

const classToName = (filterClass) => {
    switch (filterClass) {
        case 'tech':
            return 'TECHNICKÉ VĚDY';
        case 'unnat':
            return 'VĚDY O NEŽIVÉ PŘÍRODĚ';
        case 'bio':
            return 'LÉKAŘSKÉ A BIOLOGICKÉ VĚDY';
        case 'socio':
            return 'SPOLEČENSKÉ A HUMANITNÍ VĚDY';
        case 'env':
            return 'ZEMĚDĚLSKÉ A BIOLOGICKO-<br>ENVIROMENTÁLNÍ VĚDY';
    }
}

const activateFilterLabel = (filterClass) => {
    filterLabel.innerHTML = classToName(filterClass);
    filterLabel.classList.add('label-active');
}

const deactivateFitlerLabel = () => {
    filterLabel.classList.remove('label-active');    
}

// sets a new filter and loads the first slide in that category
const setFilter = (button, index) => {
    console.log('filter button ' + index + ' clicked');
    // if we are activating an inactive filter
    if (!button.classList.contains('active-filter')) {
        // disable the previous active filter
        var activeFilters = document.querySelectorAll('.active-filter');
        // console.log("active filters:", activeFilters)
        activeFilters.forEach(element => {
            element.classList.remove('active-filter');
        });
        
        // activate the new filter
        pcFilterButtons[index].classList.add('active-filter');
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
        activateFilterLabel(filterClass);
        setTimeout(function () { deactivateFitlerLabel(); }, 3000);
        if (currentFilter == filterClass) 
        { return; }
        currentFilter = filterClass;
        console.log("Current filter is:", currentFilter);
        // if the current slide is not in the required category
        var curr_slide = document.querySelector('.active');
        if (!(curr_slide.classList.contains(currentFilter)))
        {
            activateFirstFilteredSlide();
        }
        filteringOnState(true);
    } 
    // disabeling an active filter
    else {
        // disable the previous active filter
        deactivateFitlerLabel();
        var activeFilters = document.querySelectorAll('.active-filter');
        activeFilters.forEach(element => {
            element.classList.remove('active-filter');
        });
        currentFilter = '';
        filteringOnState(false);
    }
}

pcFilterButtons.forEach((button, index) => {
    button.addEventListener('click', e => {
        setFilter(button, index);
    })
})