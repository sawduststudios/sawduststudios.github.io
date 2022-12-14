const aboutButton = document.querySelector('.about-button');
const aboutDetail = document.querySelector('.detailed-about')

const aboutButtonClick = () => {
    if(aboutDetail.classList.contains('active-about'))
    {
        aboutDetail.classList.remove('active-about');
        aboutButton.innerHTML = "VÍCE INFO";
    }
    else
    {
        aboutDetail.classList.add('active-about');
        aboutButton.innerHTML = "MÉNĚ INFO";
        setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
            // console.log("scroll")
        },100);

    }
};

aboutButton.addEventListener('click', e => {
    aboutButtonClick();
})