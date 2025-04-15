


(function(){
    'use strict';

    const video = document.querySelector('#mainVideo');
    const play = document.querySelector('#play');
    const pause = document.querySelector('#pause');
    const filterBtn = document.querySelector('#filter');
    const filtertext = document.querySelector('#filtertext');
    const message = document.querySelector('#message');
    let iconTime;
    let filterMode = 0;
    let value = 0;


    // PLAY/PAUSE BUTTONS
    function updateIcons() {
        if (video.paused) {
            play.style.display = 'inline-block';
            pause.style.display = 'none';
            pause.classList.remove('inactive');
        } else if (!video.paused) {
            play.style.display = 'none';
            pause.style.display = 'inline-block';

            pause.classList.remove('inactive');
            iconTime = setTimeout(function() {
                pause.classList.add('inactive');
            }, 2000);
        }
    }

    // PLAY VID IF PRESS PLAY BUTTON
    play.addEventListener('click', function() {
        video.play();
        updateIcons();
        message.style.opacity = '0';
        setTimeout(function() {
            message.style.display = 'none';
        }, 5000);
    })

    // PAUSE VID IF PRESS PAUSE BUTTON
    pause.addEventListener('click', function() {
        video.pause();
        updateIcons();
        message.style.opacity = '1';
        message.style.display = 'block';
    })

    // PLAY/PAUSE BY CLICKING VIDEO
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            message.style.opacity = '0';
            setTimeout(function() {
                message.style.display = 'none';
            }, 5000);
        } else {
            video.pause();
            message.style.opacity = '1';
            message.style.display = 'block';
        }
        updateIcons();
    })

    window.addEventListener('load', updateIcons);

    // CHANGE SPEED + FILTER THROUGH MOUSE MOVEMENT
    video.addEventListener('mousemove', function(event) {
        const width = window.innerWidth;
        const mousePos = event.clientX;
        value = mousePos / width;

        video.playbackRate = mousePos / 300 + 0.25;

        if (filterMode === 0) {
            video.style.filter = `hue-rotate(${value * 360}deg)`;
        } else if (filterMode === 1) {
            video.style.filter = `grayscale(${value})`;
        } else if (filterMode === 2) {
            video.style.filter = `contrast(${1 + value})`;
        } else if (filterMode === 3) {
            video.style.filter = `brightness(${0.5 + value})`;
        }
    })

    // ROTATE BETWEEN FILTER SETTINGS FROM BUTTON
    filterBtn.addEventListener('click', function() {
        if (filterMode === 0) {
            video.style.filter = `hue-rotate(${value * 360}deg)`;
            filterMode = 1;
            filtertext.textContent = 'Grayscale';
        } else if (filterMode === 1) {
            video.style.filter = `grayscale(${value})`;
            filterMode = 2;
            filtertext.textContent = 'Contrast';
        } else if (filterMode === 2) {
            video.style.filter = `contrast(${1 + value})`;
            filterMode = 3;
            filtertext.textContent = 'Brightness';
        } else if (filterMode === 3) {
            video.style.filter = `brightness(${1 + value})`;
            filterMode = 0;
            filtertext.textContent = 'Hue Rotate';
        } 
    })

})();