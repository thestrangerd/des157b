


(function(){
    'use strict';

    const switchbutton = document.querySelector('#switch');
    const icon = document.querySelector('#switchicon');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('section a');
    const website = document.querySelector('#website');
    const contact = document.querySelector('#contact');
    let mode = 'light';

    switchbutton.addEventListener('click', function(){
        if (mode === 'light') {
            body.className = 'switch';
            header.className = 'switch';
            website.className = 'switch';
            website.className = 'switch';
            contact.className = 'switch';
            switchbutton.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            for (const link of links) {
                links.className = 'switch';
            }
            mode = 'dark';
        } else {
            body.removeAttribute('class');
            header.removeAttribute('class');
            website.removeAttribute('class');
            website.removeAttribute('class');
            contact.removeAttribute('class');
            switchbutton.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            for (const link of links) {
                link.removeAttribute('class');
            }
            mode = 'light';
        }

        if (switchbutton.classList.contains("switch")) {
            switchicon.src = "images/moon.svg";
        } else {
            switchicon.src = "images/sun.svg";
        }
    })

}());