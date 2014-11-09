//The public url of your search engine:
//https://www.google.com:443/cse/publicurl?cx=006706712175573801517:en2owg__5fa

//https://www.google.com/cse/publicurl?cx=006706712175573801517:en2owg__5fa
//Your search engine ID:
//006706712175573801517:en2owg__5fa//
window.onload = app;

// runs when the DOM is loaded
function app() {

    // load some scripts (uses promises :D)
    loader.load({
        url: "./bower_components/jquery/dist/jquery.min.js"
    }, {
        url: "./bower_components/lodash/dist/lodash.min.js"
    }, {
        url: "./bower_components/backbone/backbone.js"
    }, {
        url: "./bower_components/pathjs/path.min.js"
    }, {
        url: "./js/api.js"
    }).then(function() {
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;



        (function() {
            var cx = '006706712175573801517:en2owg__5fa';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
                '//www.google.com/cse/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
        })();
        //<gcse:search></gcse:search>


        var yum = new YumClient();
    })

}
