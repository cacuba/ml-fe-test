(function () {
    'use strict';

    function qS(selector) { return document.querySelector(selector); }

    //return(
    new ch.Carousel(qS('.otherProductsCarousel'), {
        'pagination': false,
        'arrows': true,
        'limitPerPage': 3
    });
    //);

    tiny.on('a[href="#"]', 'click', function(e) {
        e.preventDefault();
    });

}(this));