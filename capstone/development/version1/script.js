
(function(){
    'use strict';

    const clock = document.querySelector('#clock');
    const bgAudio = document.querySelector('#bg-audio')
    const mouseclick = document.querySelector('#mouseclick');
    const startup = document.querySelector('#startup');
    bgAudio.volume = 0.2;

    const gameIcon = document.querySelector('#desktop-icon');
    const gamescreen = document.querySelector('#judgment');
    const loadingScreen = document.querySelector('#loading-screen');
    const closeWindow = document.querySelector('#window button');


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
    gameIcon.addEventListener('click', () => {
        loadingScreen.classList.add('active');
      
        setTimeout(() => {
          loadingScreen.classList.remove('active');
        }, 2500);

        gamescreen.classList.add('visible');
      });

    closeWindow.addEventListener('click', function() {
        gamescreen.classList.remove('visible');
    })


})();

