const authorDetailTrigger = (item, index) => {
    var theBox = item.querySelector('.box');
    if (theBox.classList.contains("show-info")) {
        authorDetailOff(theBox);
    } else {
        authorDetailOn(theBox);
    }
}

var authorBoxList = document.querySelectorAll('.carousel__slide-author-section');
authorBoxList.forEach((item, index) => {
    var icon = item.querySelector('.icon');
    icon.addEventListener('click', e => authorDetailTrigger(item, index))
})



function tryHideAuthorDetail() {
    var activeSlide = document.querySelector('.active');
    var theBox = activeSlide.querySelector('.carousel__slide-author-section .box');
    if (theBox.classList.contains("show-info")) {
        console.log("Auto hiding author detail...");
        authorDetailOff(theBox);
    }
}

function authorDetailOn(infoBox) {
    infoBox.classList.add("show-info");
    authorInfoOnState(true);
}

function authorDetailOff(infoBox) {
    infoBox.classList.remove("show-info");
    authorInfoOnState(false);
}

