


(function(){
    'use strict';

    const video = document.querySelector('#mainVideo');
    const play = document.querySelector('#play');
    const pause = document.querySelector('#pause');
    let controlTimeout;


    function updateIcons() {
        if (video.paused) {
            play.style.display = 'inline-block';
            pause.style.display = 'none';
        } else {
            play.style.display = 'none';
            pause.style.display = 'inline-block';
        }

        if (!video.paused) {
            play.classList.remove('inactive');
            controlTimeout = setTimeout(() => {
                play.classList.add('inactive');
            }, 3000);
        }
    }

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        updateIcons();
    })

    window.addEventListener('load', updateIcons);

    video.addEventListener('mousemove', function(event) {
        const width = window.innerWidth;
        const mousePos = event.clientX;
        const value = mousePos / width;

        video.playbackRate = mousePos / 300 + 0.25;

        if (event.clientX <= width) {
            console.log(value);
            video.style.filter = `hue-rotate(${value * 360}deg)`;
        }
    })

})();