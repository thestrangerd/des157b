
(function(){
    'use strict';

    // AUDIO
    const clock = document.querySelector('#clock');
    const bgAudio = document.querySelector('#bg-audio')
    const mouseclick = document.querySelector('#mouseclick');
    const startup = document.querySelector('#startup');
    const loadingAudio = document.querySelector('#loading-audio');
    bgAudio.volume = 0.2;

    // ICONS
    const judgmentIcon = document.querySelector('#game-open');
    const settingsIcon = document.querySelector('#settings');
    const settingsOverlay = document.querySelector('#settings-overlay');
    const closeSettings = document.querySelector('#close-settings');
    const audioToggle = document.querySelector('#audio-toggle');
    const creditsIcon = document.querySelector('#credits');

    // GAME SCREEN
    const gamescreen = document.querySelector('#judgment');
    const loadingScreen = document.querySelector('#loading-screen');
    const closeWindow = document.querySelector('#window button');

    const startGame = document.querySelector('#start-game');
    const questions = document.querySelectorAll('.question');
    const question1 = document.querySelector('#question1');
    


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
        bgAudio.play();
     });
    window.addEventListener('mousedown', function(){ mouseclick.play(); });

    
    // SETTINGS
    // settings overlay
    settingsIcon.addEventListener('click', function() {
        if (settingsOverlay.style.display === 'block') {
            settingsOverlay.style.display = 'none';
        } else {
            settingsOverlay.style.display = 'block'; 
        }
    })

    // close settings
    closeSettings.addEventListener('click', function() {
        settingsOverlay.style.display = 'none';
    });

    // audio toggle
    audioToggle.addEventListener('change', function () {
        const isMuted = !audioToggle.checked; // if unchecked, mute everything
      
        document.querySelectorAll('audio').forEach(audio => {
          audio.muted = isMuted;
        });
    });

    // whiteNoise.addEventListener('change', function () {
    //     const isMuted = !audioToggle.checked;
      
    //     document.querySelectorAll('audio').forEach(audio => {
    //       audio.muted = isMuted;
    //     });
    // });


    // GAMESCREEN
    judgmentIcon.addEventListener('click', function() {
        loadingScreen.classList.add('active');
        loadingAudio.play();
      
        // loading screen, then moves to gamepage
        setTimeout(() => {
          loadingScreen.classList.remove('active');
          loadingAudio.pause();
        }, 10);

        gamescreen.classList.add('visible');
    });

    // close window when press "x"
    closeWindow.addEventListener('click', function() {
        gamescreen.classList.remove('visible');

        document.querySelectorAll('.question').forEach(questions => {
            questions.classList.remove('visible');
        });
    })

    // start game
    startGame.addEventListener('click', function() {
        question1.classList.add('visible');
    })


















    // LIBRARIES

    // INTERACT.JS DRAGGABLE
        // target elements with the "draggable" class
        interact('.draggable')
        .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
            })
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
            // call this function on every dragmove event
            move: dragMoveListener,

            // call this function on every dragend event
            end (event) {
            var textEl = event.target.querySelector('p')
            }
        }
        });

        function dragMoveListener (event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        }

        // this function is used later in the resizing and gesture demos
        window.dragMoveListener = dragMoveListener

})();

