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
                    ['#18A0FB', '#ff5e62' ], // blue pink
                    ['#ff5e62', '#907CFF' ], // pink green
                    ['#907CFF', '#00F260'], // green purple
                    ['#00F260', '#6C53F8'] // purple green
                ]
            }
        }
    });

})();