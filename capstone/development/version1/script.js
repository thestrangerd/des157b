
(function(){
    'use strict';

    const clock = document.querySelector('#clock');
    const bgAudio = document.querySelector('#bg-audio')
    const mouseclick = document.querySelector('#mouseclick');
    const startup = document.querySelector('#startup');
    bgAudio.volume = 0.2;

    const gameIcon = document.querySelector('#desktop-icon');
    const gamescreen = document.querySelector('#judgment');


    // REAL-TIME CLOCK
    function updateClock() {
        const now = new Date();
        const properties = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true // determines AM/PM
        };
        const timeString = now.toLocaleTimeString(undefined, properties);
        if (clock) clock.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();


    // AUDIO
    window.addEventListener('load', function(){
        startup.play();
    });
    
    window.addEventListener('click', function(){
        bgAudio.play();
    });

    window.addEventListener('mousedown', function() {
        mouseclick.play();
    });
    

    // GAMESCREEN
    gameIcon.addEventListener('click', function() {
        gamescreen.classList.add('visible');
        console.log('hey this works!');
    })


})();

