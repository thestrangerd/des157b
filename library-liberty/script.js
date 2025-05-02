AOS.init();


(function(){
    'use strict';


    var granimInstance = new Granim({
        element: '#canvas',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ['#00F260', '#0575E6'],
                    ['#e1eec3', '#f05053']
                ]
            }
        }
    });

})();