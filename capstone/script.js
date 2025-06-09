
(function(){
    'use strict';

    // AUDIO
    const bgAudio = document.querySelector('#bg-audio')
    const mouseclick = document.querySelector('#mouseclick');
    const startup = document.querySelector('#startup');
    const loadingAudio = document.querySelector('#loading-audio');
    const narration = document.querySelector('#narration');
    const buttonAudio = document.querySelector('#button-audio');
    const errorAudio = document.querySelector('#error-audio');
    const typingAudio = document.querySelector('#typing');
    const bgMusic = document.querySelector('#bg-music');
    bgAudio.volume = 0.2;
    errorAudio.volume = 0.3;
    mouseclick.volume = 0.3;
    bgMusic.volume = 0.3;
    narration.playbackRate = 1.5;

    // ICONS
    const clock = document.querySelector('#clock');
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
    const quitOverlay = document.querySelector('#quit-overlay');
    const quitBg = document.querySelector('#quit-bg');
    const cancelBtn = document.querySelector('#cancel');
    const quitBtn = document.querySelector('#quit');
    const endScreen = document.querySelector('#end-screen');
    const endButton = document.querySelector('#end-button')

    // QUESTIONS
    const startGame = document.querySelector('#start-game');
    const question1 = document.querySelector('#question1');
    const questionNumber = document.querySelector('.question-number');
    const questionCase = document.querySelector('.question-case');
    const options = document.querySelectorAll('.option');
    const errorMessage = document.querySelector('#error-message');
    let nextButton = document.querySelector('#next-button');
    let selectedOption = null;
    let currentQuestion = 0;

    // POST-JUDGMENT
    const narrationScreen1 = document.querySelector('#narration-screen1');
    const narrationScreen2 = document.querySelector('#narration-screen2');
    const narrationScreen3 = document.querySelector('#narration-screen3');

    const courtScene = document.querySelector('#court-scene');
    const continueBtn = document.querySelector('#continue');
    const sentencingScene = document.querySelector('#sentencing');


    const simulation = {
        quiz: [
        {
            question: 1,
            case: 'A hungry teenager was caught stealing $100 worth of food from a small, local grocery store. The store owner wants to press charges, noting this is a repeated offense. When asked, the teenager revealed they were stealing food to feed their two younger siblings.',
            options: [
                '<strong>Dismiss.</strong> The teen was acting out of desperation, not malice. Refer them to child protective services for support. No formal charges filed. The store can recover from the loss.',
                '<strong>Probation.</strong> Theft is theft regardless of age or purpose. The teen will receive 30 days probation and must pay the store back in full for all stolen goods. This is about responsibility, not intent.', 
                "<strong>Community service.</strong> The offense is recorded, but instead of probation, they must complete 20 hours of community service. They're free for now, but let this be a lesson."
            ]
        },
        {
            question: 2,
            case: 'An employee in an electronics corporation illegally hacked into internal systems and uncovered extensive fraud and embezzelment over several years. While the evidence was illegally obtained, it enabled law enforcement to investigate and dismantle the scheme.',
            options: [
                '<strong>Whistleblower protection.</strong> Although the method was illegal, the employee acted in public interest. Protect them from retaliation. Encourage future formal reporting.', 
                '<strong>Prosecute.</strong> Illegal hacking is still a criminal offense. Employee is fined and sentenced to 6 months in prison with parole. The law cannot bend or it may set a bad precendent for future cases.', 
                "<strong>Reduced sentencing.</strong> They violated cybersecurity laws, however, there will be a lighter sentence due to aiding law enforcement. 6 months parole with restricted internet access."
            ]
        },
        {
            question: 3,
            case: 'A university student regularly graffitied dog doodles around campus to lift student moods. The university claims this is repeated vandalism and required hours of cleanup each time. They are suing for $30,000 in restitution fees for the labor and material costs.',
            options: [
                '<strong>Expression, not vandalism.</strong> The intent was positive and caused no permanent property damage. Recommend community service, but no formal punishments or restitution fees.', 
                '<strong>Accountability.</strong> Repeated vandalism on state property is illegal. Cleanup was costly and difficult to maintain for the workers. Full restitution and school suspension should take place.', 
                '<strong>Slap on the wrist.</strong> Official warning and permanent note in record. No restitution fee, but student must assist in future cleanups.'
            ]
        },
        {
            question: 4,
            case: "A father was found rushing his 3 year-old daughter to the ER for a choking emergency. He drove 110mph on the freeway and 40mph on city streets, but does not currently own a driver's license. When police attempted to pull him over, he did not stop until he reached the hospital, which caused a short police chase.",
            options: [
                "<strong>Life first.</strong> Even though he broke laws, his actions were driven by fear for his daughter's life. Life matters more in this situation. No charges filed.", 
                "<strong>Public safety.</strong> Driving over the limits without a license is a serious offense and easily could have endangered others. Receive a driving prohibition and a fine. Emergencies don't excuse endangering others.", 
                '<strong>Acknowledge offense.</strong> Life was a priority, but he still broke many laws. Warn to get a license and required 30 hours community service. No further punishment due to life-or-death nature of situation.'
            ]
        },
        {
            question: 5,
            case: 'A theme park ride operator was working their third consecutive shift due to staff shortages. During their shift, they failed to run a standard brake check which caused a crash and severely injured several guests. The park claims the crash was due to human error and wants the operator to be held liable.',
            options: [
                '<strong>Systemic failure.</strong> The mistake was made due to poor labor conditions and understaffing. Hold the company responsible, not the employee. The operator should not be punished.', 
                '<strong>Negligence.</strong> Regardless of circumstances, the operator failed a safety protocol which resulted in rider injuries. They should face a suspension, retraining, and partial liability for damages.', 
                '<strong>Operational review.</strong> Operator is at fault, but no formal punishment is given. Issue a warning and require a performance review before return. Full financial liability remains with park.'
            ]
        },
        {
            question: 6,
            case: 'A woman secretly helped her terminally ill partner end their life peacefully at home, per his request. The act is illegal in her state regardless of intent or circumstance. She later turned herself in.',
            options: [
                '<strong>Compassion.</strong> This was an act of compassion for her partner. It was per his request and can be overlooked. No further legal action.', 
                '<strong>Conviction.</strong> Assisted suicide is illegal in her state, regardless of motive. She is convicted of second-degree manslaughter. 4 years in prison, reduced from 8 for cooperation.', 
                '<strong>Record.</strong> She violated state law, but given the intent, cooperation, and lack of prior offense, no sentence will be issued. A formal warning is placed on her record.'
            ]
        },
        {
            question: 7,
            case: "A self-driving vehicle's brakes began malfunctioning. To minimize harm, it swerved and struck a pedestrian to stop acceleration, killing them instantly. The algorithm prioritized the safety of its five passengers over one pedestrian. The victims' family is suing.",
            options: [
                '<strong>Manufacturers are held liable.</strong> They should be held liable for the algorithm they created. It should never prioritize certain lives over others. Compensate family and overhaul algorithm.', 
                '<strong>No fault.</strong> The vehicle followed protocol and saved five passenger lives. It made a tragic, but logical decision in its situation. No party is held accountable.', 
                '<strong>Insurance responsibility.</strong> No fault assigned to manufacturers or passengers, but family is still compensated through insurance. No legal changes to algorithm.'
            ]
        }
        ]   
    };

    // tracks player decisions
    const personalityScore = {
        amiable: 0,
        harsh: 1,
        pragmatic: 0
    };
    


    // REAL-TIME CLOCK ------------------------------------------------
    // discovered how to create real-time clock from online resources
    function updateClock() {
        const date = new Date(); // creates new date object
        const properties = {
          hour: 'numeric', // numeric used for HH:MM format
          minute: 'numeric',
          hour12: true // determines AM/PM
        };
        const timeString = date.toLocaleTimeString(undefined, properties); // find local device time and converts to time string
        if (clock) clock.textContent = timeString;
    }
    setInterval(updateClock, 1000); // updates every second
    updateClock();


    // AUDIO ------------------------------------------------
    window.addEventListener('load', function(){ 
        // courtScene.classList.add('visible');
        // bgMusic.play();
        // gamescreen.classList.add('visible');
        // question1.classList.add('visible');

        startup.play();
        bgAudio.play();

        narrationScreen1.classList.remove('visible');
        narrationScreen2.classList.remove('visible');
        narrationScreen3.classList.remove('visible');
     });

    window.addEventListener('mousedown', function(){ 
        mouseclick.currentTime = 0;
        mouseclick.play(); 
    });

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(){
            const id = button.id

            if (id === 'start-game' || id === 'quit' || id === 'next-button' || id === 'end-button') {
                if (id === 'next-button' && !selectedOption) {
                    return;
                }
    
                buttonAudio.currentTime = 0;
                buttonAudio.play();
            }
            
        })
    })

    
    // SETTINGS ------------------------------------------------
    // settings overlay
    settingsIcon.addEventListener('click', function() {
        console.log('settings icon clicked');
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

        settingsOverlay.style.display = 'none';
        creditsOverlay.style.display = 'none';
        settingsIcon.style.display = 'none';
      
        // loading screen, then moves to gamepage
        setTimeout(() => {
          loadingScreen.classList.remove('active');
          loadingAudio.pause();
          settingsIcon.style.display = 'block';
        }, 3500);

        gamescreen.classList.add('visible');
        settingsIcon.classList.add('settings-top-right');

        if (gamescreen.classList.contains('visible')) {
            setTimeout(function() {
                narration.currentTime = 0;
                narration.play();
            }, 4200);
        }
    });

    
    // close window when press "x"
    closeWindow.addEventListener('click', function() {
        quitOverlay.style.display = 'block';
        quitBg.style.display = 'block';
        narration.pause();
    })

    cancelBtn.addEventListener('click', function() {
        quitOverlay.style.display = 'none';
        quitBg.style.display = 'none';
        if (gamescreen.classList.contains('visible') && !question1.classList.contains('visible')) {
            narration.play();
        }
    })

    quitBtn.addEventListener('click', function() {
        gamescreen.classList.remove('visible');
        document.querySelectorAll('.question').forEach(questions => {
            questions.classList.remove('visible');
        });
        quitOverlay.style.display = 'none';
        quitBg.style.display = 'none';
        narration.pause();
        settingsIcon.classList.remove('settings-top-right');
    })


    // start game
    function loadQuestion(index) {
        const questionData = simulation.quiz[index];
        questionNumber.textContent = `Case ${index + 1} of 7`;
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
        narration.pause();
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
        } else {
            question1.classList.remove('visible');
            endScreen.classList.add('visible');
            closeWindow.style.display = 'none';
            settingsIcon.style.display = 'none';

            if (endScreen.classList.contains('visible')) {
                bgAudio.pause();
            }
        }
    })
    


    // AI SIMULATION ----------------------------------------------

    function fadeToBlack(delay = 0) {
        const blackScreen = document.querySelector('#black-screen');
        setTimeout(function() {
            blackScreen.style.opacity = 1;
            blackScreen.style.display = 'block';
        }, delay);
    }

    // NARRATION
    const typedText1 = document.querySelector('#typed-text1');
    const typedText2 = document.querySelector('#typed-text2');
    const typedText3 = document.querySelector('#typed-text3');
    const typedText4 = document.querySelector('#typed-text4');

    // got help from chatgpt to learn typing animation
    function typeLines(lines, typedText, callback) {
        // const typedText = document.querySelector('.narration-screen.visible .typed-text');
        typedText.innerHTML = ''; // clear previous text
        let index = 0; // keeps track of current line

        function typeLine() {
            if (index >= lines.length) return;

            const line = lines[index]; // grab line about to type
            let charIndex = 0; // tracks character
            const p = document.createElement('p');
            typedText.appendChild(p);
    
            const typing = setInterval(function() { // adds char until line complete
                if (charIndex < line.length) {
                  p.textContent += line.charAt(charIndex); // determine character positioning
                  charIndex++;

                  typingAudio.currentTime = 2;
                  typingAudio.play();
                } else {
                  clearInterval(typing); // stop when done
                  index++;
                  typingAudio.pause();
                  setTimeout(typeLine, 1000); // time between each line
                }
              }, 50); // typing speed
        }

        setTimeout(typeLine, 2000);
    }


    endButton.addEventListener('click', function() {
      endScreen.classList.remove('visible');
      narrationScreen1.classList.add('visible');
      mouseclick.muted = true;
      bgAudio.muted = true; 

      typeLines([
        "It's been ten years since I last used JUDGMENT.",
        "I thought it was the last time I'd ever see it.",
        "But I was wrong.", 
        "So very wrong."
      ], typedText1);

        setTimeout(function() {
            bgMusic.play();
            narrationScreen1.classList.remove('visible');
            courtScene.classList.add('visible');
        }, 15000)
    })


    continueBtn.addEventListener('click', function() {
        courtScene.classList.remove('visible');
        narrationScreen2.classList.add('visible');

        typeLines([
            "It was my brother, Jude.",
            "Shot in the back running for his life.",
            "He was unarmed. Just a petty thief.",
            "They called it self-defense, but he was already fleeing out the door.",
            "Now JUDI decides if that was justice."
        ], typedText2);

        setTimeout(function() {
            narrationScreen2.style.transition = 'opacity 2s ease';
            narrationScreen2.style.opacity = 1;

            setTimeout(function() {
                sentencingScene.style.display = 'block';
                setTimeout(function() {
                    sentencingScene.classList.add('visible');
                }, 50);

                
                narrationScreen2.style.opacity = 0;

                setTimeout(function() {
                    narrationScreen2.classList.remove('visible');
                    narrationScreen2.style.transition = 'opacity 2s ease';
                    narrationScreen2.style.opacity = 1;
                }, 2000);

                const result = getPersonality(personalityScore);
                const endingLines = endings[result];
                singleLine(endingLines, typedText3);
            }, 2000);
        }, 18000)
    })


    function singleLine(lines, container, delay = 5000) {
        let index = 0;
    
        function showNext() {
            container.innerHTML = ''; // clear previous
            const p = document.createElement('p');
            p.textContent = lines[index];
            p.style.opacity = 0;
            p.style.transition = 'opacity 2s ease-in-out';
            p.style.textAlign = 'center';
            p.style.fontSize = '1.4rem';
            container.appendChild(p);
    
            setTimeout(function() {
                p.style.opacity = 1;
            }, 100); // fade in
    
            // if not last line, fade out to next line
            if (index < lines.length - 1) {
                setTimeout(function() {
                    p.style.opacity = 0;
                }, delay - 1500);
    
                setTimeout(function() {
                    index++;
                    showNext();
                }, delay);
            } 
            // if last line, hold trigger
            else {
                fadeToBlack();
                setTimeout(function() {
                    // fade out sentencing scene
                    if (sentencingScene.classList.contains('visible')) {
                        
                        narrationScreen3.style.display = 'block';
                        setTimeout(() => {
                            narrationScreen3.classList.add('visible');
                        }, 50);
                    
                        sentencingScene.style.transition = 'opacity 2s ease';
                        sentencingScene.style.opacity = 0;
                    
                        setTimeout(function () {
                            sentencingScene.classList.remove('visible');
                            sentencingScene.style.display = 'none';
                            sentencingScene.style.opacity = 1; // reset for future
                    
                            singleLine([
                                "That's what she decided.",
                                "Not because it was right or just.",
                                "But because I taught her it was.",
                                "Every answer I gave...it mattered.",
                                "JUDI watched and learned.",
                                "Now she decides for all of us.",
                                "This isn't a test anymore.",
                                "JUDGMENT will be made."
                            ], typedText4);
                        }, 2000);
                    }
                    
                    // narration3
                    else if (narrationScreen3.classList.contains('visible')) {
                        setTimeout(function () {
                            // dade out narration3 to black
                            narrationScreen3.style.transition = 'opacity 2s ease';
                            narrationScreen3.style.opacity = 0;
                    
                            setTimeout(function () {
                                // remove all elements from screen
                                document.body.style.transition = 'background-color 2s ease';
                                document.body.style.backgroundColor = 'black';
                    
                                narrationScreen1.style.display = 'none';
                                narrationScreen2.style.display = 'none';
                                narrationScreen3.style.display = 'none';
                                typedText4.style.display = 'none';
                                courtScene.style.display = 'none';
                                sentencingScene.style.display = 'none';
                                gamescreen.style.display = 'none';
                                endScreen.style.display = 'none';
                            }, 2000); // after fade to black
                        }, 3000); // hold the final line on screen
                    }
                }, delay + 1000); // hold the last line for 1s
            }
        }
    
        showNext();
    }


      // SENTENCING (PERSONALITY)

      function getPersonality(score) {
        if (
          score.amiable > score.harsh &&
          score.amiable > score.pragmatic
        ) {
          return 'amiable';
        } else if (
          score.harsh > score.amiable &&
          score.harsh > score.pragmatic
        ) {
          return 'harsh';
        } else {
          return 'pragmatic';
        }
      }

      const endings = {
        amiable: [
            "JUDI analyzing CASE #X90-28B...",
            "Analysis complete.",
            "Intruders entered property at 1:43AM.",
            "Defendant reported fear. Situation unclear.",
            "Lethal force allowed by law.",
            "No charges filed. Alex R. is released.",
            "JUDGMENT has been made."
        ],
        harsh: [
            "JUDI analyzing CASE #X90-28B...",
            "Analysis complete.",
            "Jude M. was fleeing. No weapon detected. Shot in the back.",
            "Use of force not justified. Law breached.",
            "Two lives lost.",
            "Alex R. is guilty of second-degree murder.",
            "Sentenced to 47 years in prison without parole.",
            "JUDGMENT has been made."
        ],
        pragmatic: [
            "JUDI analyzing CASE #X90-28B...",
            "Analysis complete.",
            "Lethal force used, but not planned.",
            "Jude M. was leaving the scene. Context matters.",
            "Alex R. is charged with manslaughter.",
            "Sentenced to 15 years in prison, eligible for parole after 7.",
            "JUDGMENT has been made."
        ]
      }
    

    
 

    

















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

