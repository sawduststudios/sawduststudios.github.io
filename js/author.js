const authorDetailTrigger = (item, index) => {
    var theBox = item.querySelector('.box')
    if (theBox.classList.contains("show-info")) {
        theBox.classList.remove("show-info");
    } else {
        theBox.classList.add("show-info");
    }
}

var authorBoxList = document.querySelectorAll('.carousel__slide-author-section');
authorBoxList.forEach((item, index) => {
    var icon = item.querySelector('.icon');
    icon.addEventListener('click', e => authorDetailTrigger(item, index))
})