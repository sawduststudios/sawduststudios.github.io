const researchButton = document.querySelector('.research-button');
const reserchDetail = document.querySelector('.detailed-research');

const researchButtonClick = () => {
    console.debug("research clicked...")
    if(reserchDetail.classList.contains('active-research'))
    {
        reserchDetail.classList.remove('active-research');
        researchButton.innerHTML = "VÍCE INFO";
    }
    else
    {
        reserchDetail.classList.add('active-research');
        researchButton.innerHTML = "MÉNĚ INFO";
    }
};

researchButton.addEventListener('click', e => {
    researchButtonClick();
})