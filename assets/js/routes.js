routie('', function() {
    $('[role="main"]').load('views/home.html');
});

routie('home', function() {
    $('[role="main"]').load('views/home.html');
});

routie('features', function() {
    $('[role="main"]').load('views/features.html');
});

// Documentaion Routes /////////////////////////////////////////////
routie('docs', function() {
    $('[role="main"]').load('views/docs/docs.html');
});

routie('docs/getting-started/welcome', function() {
    $('[role="main"]').load('docs/getting-started/welcome.html');
});
