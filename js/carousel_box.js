var normal_text = "<p style=\"font-weight: 800;\">Králové a královny termitů se dožívají výrazně delšího života než ostatní příslušníci jejich druhu. Proč tomu tak je? Pomáhá jim při tom zvláštní enzym, který zbrzďuje stárnutí buněk, jakýsi „elixír mládí“. Jeho poznání by jednou mohlo přispět i k prodloužení života lidí.</p>"
var detail_text = "<p style=\"font-weight: 800;\">Králové a královny termitů se dožívají výrazně delšího života než ostatní příslušníci jejich druhu. Proč tomu tak je? Pomáhá jim při tom zvláštní enzym, který zbrzďuje stárnutí buněk, jakýsi „elixír mládí“. Jeho poznání by jednou mohlo přispět i k prodloužení života lidí.</p><p style=\"font-weight: 500;\">Jednotky dědičné informace (geny) jsou v jádru buňky uloženy v chromozomech. Každý chromozom má na svých koncích část zvanou telomera, která chrání chromozomy před zkracováním při dělení buněk. Zkracování je spojováno se stárnutím buňky a vyšším rizikem jejího poškození nemocemi.\nV některých buňkách však vzniká enzym telomeráza, který se navazuje na konce telomer a délku chromozomů prodlužuje. Vědci ve světě proto zjišťují, zda se telomeráza dá využít v medicíně. Výzkum financovaný Grantovou agenturou ČR sledoval telomerázu u dlouhověkého hmyzu – králů a královen u termitů a také královen u včel. Ukázalo se, že i u nich je aktivita telomerázy vyšší než u krátce žijících dělnic, některé její projevy jsou však jiné než v buňkách savců. Výzkumníci z Akademie věd ČR proto nyní zjišťují, jaké ještě nepoznané vlastnosti telomeráza má a zda to může mít dopad pro přípravu potenciálních léků i pro lidi. Jednotky dědičné informace (geny) jsou v jádru buňky uloženy v chromozomech. Každý chromozom má na svých koncích část zvanou telomera, která chrání chromozomy před zkracováním při dělení buněk. Zkracování je spojováno se stárnutím buňky a vyšším rizikem jejího poškození nemocemi. V některých buňkách však vzniká enzym telomeráza, který se navazuje na konce telomer a délku chromozomů prodlužuje. Vědci ve světě proto zjišťují, zda se telomeráza dá využít v medicíně. Výzkum financovaný Grantovou agenturou ČR sledoval telomerázu u dlouhověkého hmyzu – králů a královen u termitů a také královen u včel. Ukázalo se, že i u nich je aktivita telomerázy vyšší než u krátce žijících dělnic, některé její projevy jsou však jiné než v buňkách savců. Výzkumníci z Akademie věd ČR proto nyní zjišťují, jaké ještě nepoznané vlastnosti telomeráza má a zda to může mít dopad pro přípravu potenciálních léků i pro lidi.</p>"

var carousel = document.querySelector("#projectsCarousel")
var infoButtonList = document.querySelectorAll('.carousel__slide-button');


infoButtonList.forEach((button, index) => {
    var currSlide = button.closest(".carousel__slide-box");
    button.addEventListener('click', e => slideDetailTrigger())
});

const slideDetailTrigger = () => {
    var slide = document.querySelector('.active')
    var box = slide.querySelector('.carousel__slide-box')
    var info = slide.querySelector('.carousel__slide-info')

    // var detail = slide.querySelector('.carousel__slide-details');

    var header = slide.querySelector('.carousel__slide-header');
    var button = slide.querySelector('.carousel__slide-button');

    if (header.classList.contains("shown-detail")) {
        hideBoxDetail(slide, box, info, header, button);
    } else {
        showBoxDetail(slide, box, info, header, button);
    }
}


function tryHideCurrentBox() {
    var slide = document.querySelector('.active')
    var box = slide.querySelector('.carousel__slide-box')
    var info = slide.querySelector('.carousel__slide-info')

    var header = slide.querySelector('.carousel__slide-header');
    var button = slide.querySelector('.carousel__slide-button');

    if (header.classList.contains("shown-detail")) {
        hideBoxDetail(slide, box, info, header, button);
    }
}


function showBoxDetail(slide, box, info, header, button) {
    // detail.classList.add("shown-detail");
    info.innerHTML = detail_text;
    box.style.maxHeight = box.scrollHeight + "px";
    header.classList.add("shown-detail");
    // $("#projectsCarousel").carousel("pause");
    // stopCarousel();
    button.innerHTML = "<p>MÉNĚ INFO</p>";
    boxDetailState(true);
}

function hideBoxDetail(slide, box, info, header, button) {
    // window.scrollTo(0, 0);        
    setTimeout(function () {
        // detail.classList.remove("shown-detail");
        info.innerHTML = normal_text;
        box.style.maxHeight = null;
        header.classList.remove("shown-detail");
        // $("#projectsCarousel").carousel("cycle");
        button.innerHTML = "<p>VÍCE INFO</p>";
        boxDetailState(false);
    },100);
}
  