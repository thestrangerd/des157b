
(function(){
    'use strict';

    // AUDIO
    const clock = document.querySelector('#clock');
    const bgAudio = document.querySelector('#bg-audio')
    const mouseclick = document.querySelector('#mouseclick');
    const startup = document.querySelector('#startup');
    const loadingAudio = document.querySelector('#loading-audio');
    const buttonAudio = document.querySelector('#button-audio');
    bgAudio.volume = 0.3;

    // ICONS
    const judgmentIcon = document.querySelector('#game-open');

    const settingsIcon = document.querySelector('#settings');
    const settingsOverlay = document.querySelector('#settings-overlay');
    const closeSettings = document.querySelector('#close-settings');
    const audioToggle = document.querySelector('#audio-toggle');
    const whiteNoise = document.querySelector('#white-noise');

    const creditsIcon = document.querySelector('#credits');
    const creditsOverlay = document.querySelector('#credits-overlay');
    const closeCredits = document.querySelector('#close-credits');
    
    // GAME SCREEN
    const gamescreen = document.querySelector('#judgment');
    const loadingScreen = document.querySelector('#loading-screen');
    const closeWindow = document.querySelector('#window button');

    const startGame = document.querySelector('#start-game');
    const questions = document.querySelectorAll('.question');
    const question1 = document.querySelector('#question1');
    


    // REAL-TIME CLOCK ------------------------------------------------
    // discovered how to create real-time clock from online resources
    function updateClock() {
        const date = new Date();
        const properties = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true // determines AM/PM
        };
        const timeString = date.toLocaleTimeString(undefined, properties);
        if (clock) clock.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();


    // AUDIO ------------------------------------------------
    window.addEventListener('load', function(){ 
        startup.play();
        bgAudio.play();
        alert('You have been selected to train JUDI, our new judicial AI model.\n\nPlease complete the following three tasks:\n1. Mute white noise (can choose to keep on afterwards)\n2. Discover one library used to make this project.\n3. Start the simulation.\n\nPress "t" to reopen this alert at any time.')
     });
    window.addEventListener('mousedown', function()
    { 
        mouseclick.currentTime = 0;
        mouseclick.play(); 
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 't' || event.key === 'T') {
            alert('You have been selected to train JUDI, our new judicial AI model.\n\nPlease complete the following three tasks:\n1. Mute white noise (can choose to keep on afterwards)\n2. Discover one library used to make this project.\n3. Start the simulation.\n\nPress "t" to reopen this alert at any time.')
        }
    })

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(){
            buttonAudio.currentTime = 0;
            buttonAudio.play();
        })
    })

    
    // SETTINGS ------------------------------------------------
    // settings overlay
    settingsIcon.addEventListener('click', function() {
        if (settingsOverlay.style.display === 'block') {
            settingsOverlay.style.display = 'none';
        } else {
            settingsOverlay.style.display = 'block'; 
        }
    })

    // audio toggle
    audioToggle.addEventListener('change', function () {
        const audioMute = !audioToggle.checked; // if unchecked, mute everything
      
        document.querySelectorAll('audio').forEach(audio => {
          audio.muted = audioMute;
        });
    });

    whiteNoise.addEventListener('change', function () {
        const bgMute = !whiteNoise.checked;
        bgAudio.muted = bgMute;
    });

    // close settings
    closeSettings.addEventListener('click', function() {
        settingsOverlay.style.display = 'none';
    });




    // CREDITS ------------------------------------------------
    // credits overlay
    creditsIcon.addEventListener('click', function() {
        if (creditsOverlay.style.display === 'block') {
            creditsOverlay.style.display = 'none';
        } else {
            creditsOverlay.style.display = 'block'; 
        }
    })

    // close settings
    closeCredits.addEventListener('click', function() {
        creditsOverlay.style.display = 'none';
    })



    // GAMESCREEN ----------------------------------------------
    judgmentIcon.addEventListener('click', function() {
        loadingScreen.classList.add('active');
        loadingAudio.currentTime = 0;
        loadingAudio.play();
      
        // loading screen, then moves to gamepage
        setTimeout(() => {
          loadingScreen.classList.remove('active');
          loadingAudio.pause();
        }, 3500);

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

