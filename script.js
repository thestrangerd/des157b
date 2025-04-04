


(function(){
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('section a');
    const website = document.querySelector('#website');
    let mode = 'light';

    button.addEventListener('click', function(){
        if (mode === 'light') {
            body.className = 'switch';
            header.className = 'switch';
            website.className = 'switch';
            button.className = 'switch';
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
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            for (const link of links) {
                link.removeAttribute('class');
            }
            mode = 'light';
        }
    })

}());