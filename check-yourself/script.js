

(function(){
    'use strict';

    const gameContainer = document.querySelectorAll('.month');
    const monthName = document.querySelector('#month-name');
    const gameName = document.querySelector('#game-name');
    const hoursPlayed = document.querySelectorAll('.hours');
    

    async function getData() {
        const data = await fetch('data.json');
        const content = await data.json();

        monthTitle(content);
        playTime(content);
        gameTitle(content);
    }

    
    function monthTitle(content) {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];

        for (let i = 0; i < gameContainer.length; i++) {
            const monthNumber = content[i].month;
            const monthLabel = monthNames[monthNumber - 1];
        
            gameContainer[i].addEventListener('mouseenter', function() {
                monthName.textContent = monthLabel;
            })
        }
    }


    function playTime(content) {
        for (let i = 0; i < gameContainer.length; i++) {
            const hours = content[i].hours;

            gameContainer[i].addEventListener('mouseenter', function() {
                hoursPlayed[i].textContent = `Hours Played: ${hours}`;
            })
        }
    }


    function gameTitle(content) {
        for (let i = 0; i < gameContainer.length; i++) {
            const title = content[i].title;

            gameContainer[i].addEventListener('mouseenter', function() {
                gameName.textContent = `Most Played: ${title}`;
            })
        }
    }
        
    getData();
})()
