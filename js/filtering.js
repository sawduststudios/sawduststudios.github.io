const myCarousel = document.getElementById('projectsCarousel')
const slides = document.querySelectorAll('.carousel-item');

const filterContainer = document.querySelector('.carousel__filter-container');
const filterButtons = Array.from(filterContainer.children);
var currentFilter = '';

myCarousel.addEventListener('slid.bs.carousel', event => {
 if (currentFilter === '') {return}    
  var curr_slide = document.querySelector('.active')
  if(!(curr_slide.classList.contains(currentFilter)))
  {
    $("#projectsCarousel").carousel("next");
  }
})

const activateFirstFilteredSlide = () => {
    $("#projectsCarousel").carousel("next");
}


const setFilter = (index) => {
    console.log('filter button ' + index + ' clicked');
    if (!filterButtons[index].classList.contains('active-filter')) {
        var activeFilter = document.querySelector('.active-filter');
        if (activeFilter) {
            activeFilter.classList.remove('active-filter');
        }
        filterButtons[index].classList.add('active-filter');
        var filterClass = "";
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
        var curr_slide = document.querySelector('.active')
        if (!(curr_slide.classList.contains(currentFilter)))
        {
            // curr_slide.classList.remove('active')
            // var new_slide = document.querySelector('.'+currentFilter)
            // new_slide.classList.add('active')
            activateFirstFilteredSlide()
        }
        
    } else {
        filterButtons[index].classList.remove('active-filter');
        currentFilter = '';
    }
}

filterButtons.forEach((button, index) => {
    filterButtons[index].addEventListener('click', e => {
        setFilter(index);
    })
})


// const resfilterSlides = () => {
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
