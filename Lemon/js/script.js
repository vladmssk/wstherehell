window.addEventListener('DOMContentLoaded' , function(){


    //swiper-slider
    const swiper = new Swiper('.swiper-container', {

        simulateTouch: false,
        loop: true,
        speed: 500,
        initialSlide: 1,

        autoplay:{
            delay:3000,
        },


        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },
    });


        // menuIcon
        let isMobile = {
            Android: function() {return navigator.userAgent.match(/Android/i);},
            BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
            iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
            Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
            Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
            any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
        };
        let body = document.querySelector('body');

            if (isMobile.any()) {
                body.classList.add('touch');

                let menuIcon = document.querySelector('.menu__icon'),
                nav = document.querySelector('.nav'),
                menuLinks = document.querySelectorAll('.header__li'),
                arrows = document.querySelectorAll('.arrow'),
                subMenu = document.querySelectorAll('.sub-menu');
            
            
                menuIcon.addEventListener('click' , function(){
                    body.classList.toggle('lock');
                    menuIcon.classList.toggle('_active');
                    nav.classList.toggle('_active');
                });


                for(let i = 0; i < menuLinks.length; i++) {
                    menuLinks[i].addEventListener('click' , function() {
                        subMenu.forEach(menu => menu.classList.remove("_active"));
                        arrows.forEach(arrow => arrow.classList.remove("_active"));
                        subMenu[i].classList.add("_active");
                        arrows[i].classList.add("_active");
                    })
                }
            }           
            else {
                body.classList.add('mouse');
            }
});


