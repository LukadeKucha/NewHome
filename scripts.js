// loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });
  
// Slider
var ListLi = document.querySelectorAll('#ul li');
var raodenoba = ListLi.length;
localStorage.slittyui = 0;
var toNumber = null;
var j = 0;
// function forward() {
//     toNumber = parseInt(localStorage.slittyui);
//     var logo1 = document.querySelectorAll(".sliderimage");
//     var ListLi = document.querySelectorAll('#ul li');

//     if (toNumber < raodenoba - 1) {
//         toNumber += 1;
//         for (var j = 0; j < ListLi.length; j++) {
//             ListLi[j].style.backgroundColor = "#fff";
//         }
//         localStorage.slittyui = toNumber;
//         ListLi[toNumber].style.backgroundColor = "#fbff8c";
//         localStorage.slittyui = toNumber;

//         for (var j = 0; j < ListLi.length; j++) {
//             logo1[j].style.opacity = "0";
//         }
//         logo1[toNumber].style.opacity = "1";
//     }
//     else {
//         toNumber = 0;
//         for (var j = 0; j < ListLi.length; j++) {
//             ListLi[j].style.backgroundColor = "#fff";
//         }
//         localStorage.slittyui = toNumber;
//         ListLi[toNumber].style.backgroundColor = "#fbff8c";
//         localStorage.slittyui = toNumber;



//         for (var j = 0; j < ListLi.length; j++) {
//             logo1[j].style.opacity = "0";
//         }
//         logo1[toNumber].style.opacity = "1";
//     }


// }
// function back() {
//     toNumber = parseInt(localStorage.slittyui);
//     var logo1 = document.querySelectorAll(".sliderimage");
//     var ListLi = document.querySelectorAll('#ul li');

//     if (toNumber != 0) {
//         toNumber -= 1;
//         for (var j = 0; j < ListLi.length; j++) {
//             ListLi[j].style.backgroundColor = "#fff";
//         }
//         localStorage.slittyui = toNumber;
//         ListLi[toNumber].style.backgroundColor = "#fbff8c";
//         localStorage.slittyui = toNumber;



//         for (var j = 0; j < ListLi.length; j++) {
//             logo1[j].style.opacity = "0";
//         }
//         logo1[toNumber].style.opacity = "1";
//     }
//     else {
//         toNumber = ListLi.length - 1;
//         for (var j = 0; j < ListLi.length; j++) {
//             ListLi[j].style.backgroundColor = "#fff";
//         }
//         localStorage.slittyui = toNumber;
//         ListLi[toNumber].style.backgroundColor = "#fbff8c";
//         localStorage.slittyui = toNumber;



//         for (var j = 0; j < ListLi.length; j++) {
//             logo1[j].style.opacity = "0";
//         }
//         logo1[toNumber].style.opacity = "1";
//     }


// }




var gffjjh = setInterval(function autoChange() {

    var logo1 = document.querySelectorAll(".sliderimage");



    toNumber = parseInt(localStorage.slittyui);
    for (var j = 0; j < ListLi.length; j++) {
        ListLi[j].style.backgroundColor = "#fff";
    }
    if (toNumber < raodenoba - 1) {
        toNumber += 1;
        localStorage.slittyui = toNumber;
        ListLi[toNumber].style.backgroundColor = "#fbff8c";
        localStorage.slittyui = toNumber;

    }
    else {
        toNumber = 0;
        localStorage.slittyui = toNumber;
        ListLi[toNumber].style.backgroundColor = "#fbff8c";
    }

    for (var j = 0; j < ListLi.length; j++) {



        logo1[j].style.opacity = "0";



    }



    logo1[toNumber].style.opacity = "1";



}, 5000);


function myFunction() {
    gffjjh = setInterval(function autoChange() {


        var logo1 = document.querySelectorAll(".sliderimage");


        toNumber = parseInt(localStorage.slittyui);
        for (var j = 0; j < ListLi.length; j++) {
            ListLi[j].style.backgroundColor = "#fff";
        }
        if (toNumber < raodenoba - 1) {
            toNumber += 1;
            localStorage.slittyui = toNumber;
            ListLi[toNumber].style.backgroundColor = "#fbff8c";
            localStorage.slittyui = toNumber;
        }
        else {
            toNumber = 0;
            localStorage.slittyui = toNumber;
            ListLi[toNumber].style.backgroundColor = "#fbff8c";
        }
        for (var j = 0; j < ListLi.length; j++) {



            logo1[j].style.opacity = "0";


        }


        logo1[toNumber].style.opacity = "1";

    }, 5000);


}

function myStopFunction() {
    clearInterval(gffjjh);

}

function changeSlider(el) {
    var elItem = parseInt(el.dataset.items);


    var logo1 = document.querySelectorAll(".sliderimage");


    for (var j = 0; j < ListLi.length; j++) {
        ListLi[j].style.backgroundColor = "#fff";
    }
    el.style.backgroundColor = "#fbff8c";
    localStorage.slittyui = elItem;

    for (var j = 0; j < ListLi.length; j++) {
        logo1[j].style.opacity = "0";
    }


    logo1[elItem].style.opacity = "1";

}

// Navbar

const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

// Navbar color change
const txt = document.querySelectorAll('header .navbar-wrapper .navbar-content .nav-links li a');
const navbar = document.querySelector('.navbar-wrapper');
const projectsection = document.getElementById('project-hero');
window.addEventListener('scroll', function () {
    if (window.scrollY > projectsection.offsetTop) {
        navbar.classList.add('bg-color-change');
        txt.classList.add('txt-color-change');
    }
    else {
        txt.classList.remove('txt-color-change');
        navbar.classList.remove('bg-color-change');
    }
})

const section = document.getElementById('project');

window.addEventListener('scroll', function () {
    if (window.scrollY > section.offsetTop) {
        navbar.classList.add('bg-color-change');
    }
    else {
        navbar.classList.remove('bg-color-change');
    }
})
$('.carousel-client').bxSlider({
    auto: true,
    slideWidth: 234,
    minSlides: 2,
    maxSlides: 5,
    controls: false
});
