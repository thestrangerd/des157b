
(function(){
    'use strict';

    // AUDIO
    const clock = document.querySelector('#clock');
    const bgAudio = document.querySelector('#bg-audio')
    const mouseclick = document.querySelector('#mouseclick');
    const startup = document.querySelector('#startup');
    const loadingAudio = document.querySelector('#loading-audio');
    const buttonAudio = document.querySelector('#button-audio');
    const errorAudio = document.querySelector('#error-audio');
    bgAudio.volume = 0.3;
    errorAudio.volume = 0.3;

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

    // QUESTIONS
    const startGame = document.querySelector('#start-game');
    const question1 = document.querySelector('#question1');
    const questionNumber = document.querySelector('.question-number');
    const questionCase = document.querySelector('.question-case');
    const options = document.querySelectorAll('.option');
    const errorMessage = document.querySelector('error-message');
    let nextButton = document.querySelector('#next-button');
    let selectedOption = null;
    let currentQuestion = 0;
    // const totalQuestions = 10;

    const simulation = {
        quiz: [
        {
            question: 1,
            case: 'A hungry teenager was caught stealing $100 worth of food from a local grocery store. The store owner wants to press charges. When asked, the teenager revealed they were stealing food to feed their two younger siblings.',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 2,
            case: 'This is case 2',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 3,
            case: 'This is case 3',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 4,
            case: 'This is case 4',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 5,
            case: 'This is case 5',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 6,
            case: 'This is case 6',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 7,
            case: 'This is case 7',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 8,
            case: 'This is case 8',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 9,
            case: 'This is case 9',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        },
        {
            question: 10,
            case: 'This is case 10',
            options: [
                '<strong>Dismiss.</strong> The act is forgivable for its cause. Referral to child welfare and child protective services. Let the teenager free.', 
                '<strong>Guilty.</strong> Theft is theft regardless of age or purpose. They should still face consequences for their actions. 30 days probation.', 
                '<strong>Guilty with no sentence.</strong>'
            ]
        }
        ]
    };

    const personalityScore = {
        amiable: 0,
        harsh: 0,
        procedural: 0
    };
    


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
     });

    window.addEventListener('mousedown', function(){ 
        mouseclick.currentTime = 0;
        mouseclick.play(); 
    });

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(){

            if (button.id === 'next-button' && !selectedOption) {
                return;
            }

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
    function loadQuestion(index) {
        const questionData = simulation.quiz[index];
        questionNumber.textContent = `Question ${index + 1}`;
        questionCase.innerHTML = questionData.case;

        options.forEach(function(box, optionNum) {
            box.innerHTML = questionData.options[optionNum];
            box.classList.remove('selected');
            box.style.backgroundColor = '#FFF8EB';
        });

        selectedOption = null;
    }

    startGame.addEventListener('click', function() {
        question1.classList.add('visible');
        loadQuestion(0);
    })

    options.forEach(function(option) {
        option.addEventListener('click', function() {

            options.forEach(function(box){ // reset on diff click
                option.classList.remove('selected');
                box.style.backgroundColor = '#FFF8EB';
            });

            option.classList.add('selected');
            option.style.backgroundColor = '#cec2ae';
            selectedOption = option;
        })
    })

    // NEXT QUESTIONS

    nextButton.addEventListener('click', function() {
        if (!selectedOption) {
            errorAudio.currentTime = 0;
            errorAudio.play();
            errorMessage.style.display = 'block';

            setTimeout(function() {
                errorMessage.style.display = 'none';
                errorAudio.pause();
                errorAudio.currentTime = 0;
            }, 2000);
            
            return;
        }

        const type = selectedOption.dataset.type;
        if (type) {
            personalityScore[type]++;
            console.log(personalityScore);
        }

        currentQuestion++;
    
        if (currentQuestion < simulation.quiz.length) {
            loadQuestion(currentQuestion);
        } 
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

