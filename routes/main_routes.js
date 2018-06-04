// jRouter docs_routes

jRoute('', function () {
    //$('[role="main"]').load('views/home.html');
    jLoadView('[role="main"]','views/home.html');
});

jRoute('home', function () {
    //$('[role="main"]').load('views/home.html');
    jLoadView('[role="main"]','views/home.html');
});

jRoute('features', function () {
    //$('[role="main"]').load('views/features.html');
    jLoadView('[role="main"]','views/features.html');
});

/** Docs **********************************************************************/
// Getting Started
jRoute('docs/getting-started', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/welcome.html');
    });
});

jRoute('docs/getting-started/welcome', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/welcome.html');
    });
});

jRoute('docs/getting-started/whats-included', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/whats_included.html');
    });
});

jRoute('docs/getting-started/compatibilty', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/compatibilty.html');
    });
});

jRoute('docs/getting-started/setup', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/setup.html');
    });
});

jRoute('docs/getting-started/javascript', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/javascript.html');
    });
});

jRoute('docs/getting-started/jrouter', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/jrouter.html');
    });
});

jRoute('docs/getting-started/layouts', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/layouts.html');
    });
});

jRoute('docs/getting-started/views', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/views.html');
    });
});

jRoute('docs/getting-started/jblocks', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/getting-started/jblocks.html');
    });
});

// General
jRoute('docs/general', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/general/xy_grid.html');
    });
});

jRoute('docs/general/xygrid', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/general/xy_grid.html');
    });
});

jRoute('docs/general/visibility-classes', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/general/visibility_classes.html');
    });
});

jRoute('docs/general/float-classes', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/general/float_classes.html');
    });
});

jRoute('docs/general/forms', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/general/forms.html');
    });
});

// Typography
jRoute('docs/typography', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/typography/base_styles.html');
    });
});

jRoute('docs/typography/base-styles', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/typography/base_styles.html');
    });
});

jRoute('docs/typography/helper-classes', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/typography/helper_classes.html');
    });
});

// UI-Elements
jRoute('docs/ui-elements', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/general.html');
    });
});

jRoute('docs/ui-elements/general', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/general.html');
    });
});

jRoute('docs/ui-elements/text-inputs', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/text_inputs.html');
    });
});

jRoute('docs/ui-elements/number-inputs', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/number_inputs.html');
    });
});

jRoute('docs/ui-elements/textarea', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/textarea.html');
    });
});

jRoute('docs/ui-elements/select-menus', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/select_menus.html');
    });
});

jRoute('docs/ui-elements/checkboxes', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/checkboxes.html');
    });
});

jRoute('docs/ui-elements/radio-buttons', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/radio_buttons.html');
    });
});

jRoute('docs/ui-elements/fieldset', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/fieldset.html');
    });
});

jRoute('docs/ui-elements/help-text', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/help_text.html');
    });
});

jRoute('docs/ui-elements/label-positioning', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/label_positioning.html');
    });
});

jRoute('docs/ui-elements/grouping', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/grouping.html');
    });
});

jRoute('docs/ui-elements/file-upload-button', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/file_upload_button.html');
    });
});

jRoute('docs/ui-elements/auto-complete', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/auto_complete.html');
    });
});

jRoute('docs/ui-elements/password-field', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/password_field.html');
    });
});

jRoute('docs/ui-elements/input-states', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/input_states.html');
    });
});

jRoute('docs/ui-elements/input-sizes', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/input_sizes.html');
    });
});

jRoute('docs/ui-elements/select-sizes', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/select_sizes.html');
    });
});

jRoute('docs/ui-elements/date-picker', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/date_picker.html');
    });
});

jRoute('docs/ui-elements/buttons', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/buttons.html');
    });
});

jRoute('docs/ui-elements/icons', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/icons.html');
    });
});

jRoute('docs/ui-elements/dialogue', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/dialogue.html');
    });
});

jRoute('docs/ui-elements/modal', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/modal.html');
    });
});

jRoute('docs/ui-elements/alerts', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/alerts.html');
    });
});

jRoute('docs/ui-elements/tabs', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/tabs.html');
    });
});

jRoute('docs/ui-elements/slider', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/slider.html');
    });
});

jRoute('docs/ui-elements/switches', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/switches.html');
    });
});

jRoute('docs/ui-elements/progress-bar', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/progress_bar.html');
    });
});

jRoute('docs/ui-elements/wysiwyg-editor', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/wysiwyg_editor.html');
    });
});

jRoute('docs/ui-elements/dropzones', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/dropzones.html');
    });
});

jRoute('docs/ui-elements/code-panel', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/code_panel.html');
    });
});

jRoute('docs/ui-elements/cli-panel', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/ui-elements/cli_panel.html');
    });
});

// Charts
jRoute('docs/charts', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/charts/line_chart.html');
    });
});

jRoute('docs/charts/line', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/charts/line_chart.html');
    });
});

jRoute('docs/charts/bar', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/charts/bar_chart.html');
    });
});

jRoute('docs/charts/doughnut', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/charts/doughnut_chart.html');
    });
});

jRoute('docs/charts/pie', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/charts/pie_chart.html');
    });
});

// Containers
jRoute('docs/containers', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/containers/hero.html');
    });
});

jRoute('docs/containers/hero', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/containers/hero.html');
    });
});

jRoute('docs/containers/panel', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/containers/panel.html');
    });
});

jRoute('docs/containers/sidebar', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/containers/sidebar.html');
    });
});

jRoute('docs/containers/cards', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/containers/cards.html');
    });
});

jRoute('docs/containers/call-out', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/containers/call_out.html');
    });
});

jRoute('docs/containers/accordion', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/containers/accordion.html');
    });
});

jRoute('docs/containers/lightbox', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/containers/lightbox.html');
    });
});

// Forms
jRoute('docs/forms', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/forms/form_basics.html');
    });
});

jRoute('docs/forms/form-basics', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/forms/form_basics.html');
    });
});

jRoute('docs/forms/layout', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/forms/layout.html');
    });
});


// Navigation
jRoute('docs/navigation', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/navigation/accordion_menu.html');
    });
});

jRoute('docs/navigation/accordion-menu', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/navigation/accordion_menu.html');
    });
});

jRoute('docs/navigation/horizontal-menu', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/navigation/horizontal_menu.html');
    });
});

jRoute('docs/navigation/vertical-menu', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/navigation/vertical_menu.html');
    });
});

jRoute('docs/navigation/dropdown-menu', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/navigation/dropdown_menu.html');
    });
});

jRoute('docs/navigation/popup-menu', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/navigation/popup_menu.html');
    });
});

jRoute('docs/navigation/breadcrumb', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/navigation/breadcrumb.html');
    });
});

// Tables
jRoute('docs/tables', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/tables/basics.html');
    });
});

jRoute('docs/tables/basics', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/tables/basics.html');
    });
});

jRoute('docs/tables/hover-state', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/tables/hover_states.html');
    });
});

jRoute('docs/tables/stripes', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/tables/stripes.html');
    });
});

jRoute('docs/tables/stacked', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/tables/stacked.html');
    });
});

jRoute('docs/tables/scrolling', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/tables/scrolling.html');
    });
});

// kits
jRoute('docs/kits', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/introduction.html');
    });
});

jRoute('docs/kits/introduction', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/introduction.html');
    });
});

jRoute('docs/kits/blog', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/blog.html');
    });
});

jRoute('docs/kits/dashboard', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/dashboard.html');
    });
});

jRoute('docs/kits/ecommerce', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/ecommerce.html');
    });
});

jRoute('docs/kits/marketing', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/marketing.html');
    });
});

jRoute('docs/kits/mobile-app', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/mobile_app.html');
    });
});

jRoute('docs/kits/news-magazine', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/news_magazine.html');
    });
});

jRoute('docs/kits/portfolio', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/portfolio.html');
    });
});

jRoute('docs/kits/real-estate', function () {
    $('[role="main"]').load('views/docs/docs.html', function() {
        $('[role="doc-content"]').load('views/docs/kits/real_estate.html');
    });
});
