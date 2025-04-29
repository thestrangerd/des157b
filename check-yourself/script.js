

(function(){
    'use strict';

    const gameContainer = document.querySelector('.month');
    const monthName = document.querySelector('#month-name');
    

    async function getData() {
        const data = await fetch('data.json');
        const content = await data.json();

        console.log(content);
    }

    
    function monthTitle(content) {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];

        for (let i = 0; i < content.length; i++) {
            const monthLabel = monthNames.length - 1;
        
            gameContainer.addEventListener('mouseenter', function() {
                monthName.textContent = monthLabel;
            })
        }
    }
        
    getData();
})()
