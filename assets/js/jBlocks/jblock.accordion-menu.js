/*!
 * jBlock.accordion-menu
 * v1.0.0
 * https://jlomoglio.github.io/jcore
 * https://github.com/jlomoglio/jCore
 * copyright Joe LoMoglio 2018
 * MIT License
*/

(function($) {
    $.fn.jbAccordionMenu = function() {
        // Append stylesheet
        $('head').append('<link rel="stylesheet" href="assets/css/jblocks/jblock.accordion-menu.css" type="text/css" />');

        return this.each(function() {
            $(document).ready(function () {
                // Open menu based on current hash
                var hash = window.location.hash;
                hash = hash.replace('#','');
                $('[jBlock="jbAccordion"]').find('[data-route="'+ hash +'"]').closest('ul').show();
                $('[jBlock="jbAccordion"]').find('[data-route="'+ hash +'"]').css({
                    'color': '#ed1144',
                    'font-weight': 'bold !important'
                });
            });

            // Main functionality
            $('[jBlock="jbAccordion"] > ul > li > a').on('click', function(e) {
                var checkElement = $(this).next();

            	$('[jBlock="jbAccordion"] li').removeClass('active');
            	$(this).closest('li').addClass('active');

            	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            		$(this).closest('li').removeClass('active');
            		checkElement.slideUp('normal');
            	}

            	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            		$('[jBlock="jbAccordion"] ul ul:visible').slideUp('normal');
            		checkElement.slideDown('normal');
            	}

            	if (checkElement.is('ul')) {
            		return false;
            	} else {
            		return true;
            	}
            });

            // Menu Links click event for setting routes
            $('[jBlock="jbAccordion"] > ul > li > ul > li > a[data-route]').on('click', function() {
                jSetRoute($(this).attr('data-route'));
            });
        });
    }
}(jQuery));
