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
                    ['#18A0FB', '#ff5e62'], // blue pink
                    ['#00F260', '#907CFF'], // green purple
                    ['#907CFF', '#18A0FB' ] // purple blue
                ]
            }
        }
    });

})();