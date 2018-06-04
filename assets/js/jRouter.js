/*!
 * jRouter
 * v1.0.0
 * https://jlomoglio.github.io/jcore
 * https://github.com/jlomoglio/jCore
 * copyright Joe LoMoglio 2018
 * MIT License
*/

// Route Handler /////////////////////////////////////////////////
//
// A hash to store our routes:
var jRoutes = {};

// Exposed method for defining routes
function jRoute (path, loader) {
  jRoutes[path] = {loader: loader};
}

// jRouter
function jRouter () {
    // Current route url (getting rid of '#' in hash as well):
    var url = window.location.hash.slice(1) || '';

    // Get route by url
    var jRoute = jRoutes[url];

    // Create new loader
    new jRoute.loader();
}
// Listen on hash change:
window.addEventListener('hashchange', jRouter);
// Listen on page load:
window.addEventListener('load', jRouter);


// Route Setter /////////////////////////////////////////////////
var jSetRoute = function(route, callback) {
    // Add route hash
    if(route !== "") {
        window.location.hash = '#' + route;
    }
    else if(route === "") {
        window.location.hash = route;
    }

    // Hide menu for mobile only
    if($(document).width() <= '639') {
        $('[role="header"] > nav > ul').hide();
    }
    else {
        $('[role="header"] > nav > ul').show();
    }

    if(callback) {
        callback.call();
    }
}
