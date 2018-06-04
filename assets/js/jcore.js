/*!
 * jCore - A WEB FRAMEWORK FOR THE REST OF US
 * v1.0.0
 * https://jlomoglio.github.io/jcore
 * https://github.com/jlomoglio/jCore
 * copyright Joe LoMoglio 2018
 * MIT License
*/

// Mobile Menu Trigger
var jTriggerMobileMenu = function() {
    if($('[role="header"] > nav > ul').hasClass('menu-open')) {
        $('[role="header"] > nav > ul').removeClass('menu-open');
        $('[role="header"] > nav > ul').hide();
    }
    else {
        $('[role="header"] > nav > ul').addClass('menu-open');
        $('[role="header"] > nav > ul').show();
    }
}


// Global Loaders
//
// Loads master layout template
var jLoadLayout = function() {
    $('[role="layout"]').load(layout + '.html');
}
//
// Loads views
var jLoadView = function(el, viewPath, callback) {
    $(el).load(viewPath);
    if(callback) { callback.call(); }
}
//
// Loads all jBlock components
var jLoad = function(role) {
    switch(role) {
        /** Containers **/
        case 'hero':
            var jblock = $(document).find('[role="hero"]').attr('data-jblock');
            var template = 'jblocks/containers/heros/' + jblock + '.html';
            break;

        /** Headers **/
        case 'header':
            var jblock = $(document).find('[role="header"]').attr('data-jblock');
            var template = 'jblocks/containers/headers/' + jblock + '.html';
            break;

        /** Footers **/
        case 'footer':
            var jblock = $(document).find('[role="footer"]').attr('data-jblock');
            var template = 'jblocks/containers/footers/' + jblock + '.html';
            break;
    }

    $('[role="'+role+'"]').load(template);
}

var jBlock = function(jblock, slides) {
    switch(jblock) {
        /** Containers **/
        case 'hero':
            var jblockContainer = $(document).find('[jblock-type="hero"]').attr('jblock');
            var jblockTemplate = 'jblocks/containers/heros/' + jblockContainer + '.html';
            var slideCount = 1;
            var li = '';

            // Loop through slides and populate <li> template
            $.each(slides, function(key, value) {
                li += '<li data-slide="'+slideCount+'" data-slide-img="'+ value.image +'">';
                li += '    <div role="caption">'+ value.caption +'</div>';
                li += '</li>';
                //console.log(JSON.stringify(value.image));
                slideCount++;
            });

            // Load the jblockTemplate into the view and append the <li> template
            $('[jblock-type="'+jblock+'"]').load(jblockTemplate, function() {
                $(document).find('[jblock-type="'+jblock+'"]').find('ul[data-slides]').append(li);
                // Loads the image as a background
                $('[data-slide]').each(function() {
                    $(this).css({
                        'background-image':'url('+$(this).attr('data-slide-img')+')',
                        'background-size':'cover'
                    });
                });
            });
            break;
    }


}




// Misc Helpers ///////////////////////////////////////////
//
