<img src="jCore_Logo.png" height="150" />

jCore is a JavaScript client mobile-first responsive framework that leverages standard web technologies to empower your creativity.

As a VueJS developer I spend a fair amount of time at the end of my projects having to build documentation sites. So I decided that I wanted to have a framework thatcould mimic how vue works, but leveraged jQuery, so that it would be quick and simple to build any basic website or documentation site. So I built jCore.

## Basic Usage
### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>jCore: DevLAB</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A Simple Framework for creating single-page websites and applications">
    <meta name="author" content="Joe LoMoglio">
    <link rel="stylesheet" type="text/css" href="assets/vendor/css/bootstrap/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="assets/vendor/css/fontawesome/css/fontawesome-all.css" />
    <link rel="stylesheet" type="text/css" href="assets/app/css/jcore.css" />
</head>
<body>
    <div role="layout">
        <!-- Layout dynamically gets inserted here -->
    </div>

    <script src="assets/vendor/js/jquery-3.3.1.min.js"></script>
    <script src="assets/vendor/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
    <script type="text/javascript" src="assets/app/js/jRouter.js"></script>
    <script type="text/javascript" src="assets/app/js/jCore.js"></script>

    <script type="text/javascript">
        // initialize application ui
        $(document).ready(function() {
            jLoadLayout('App');
        });
    </script>
</body>
</html>
```
All components and layouts get loaded into the div with role="layout"

### App.html

```
<template>
  <header role="header" data-jblock="simple-fixed"></header>
  <main id="main" role="main"></main>
</template> 

<script src="routes/main_routes.js"></script>
<script>
jLoad('header');
jLoadView('[role="main"]', 'views/home.html');
</script>
```

### layouts/Home.html

```
<section data-view="home">
    <div role="hero" data-jblock="2-col-static"></div>
</section>
<footer role="footer" data-jblock="simple"></footer>

<script>
jLoad('hero');
jLoad('footer');
</script>

<style scoped>

</style>
```
### jLoad 
This method is used to load a view or a jBlock. 

### jBlock

These are the the equivalent to a vue component, you add a jBlock as follows:

```
<footer role="footer" data-jblock="simple"></footer>
```

the data-jblock attribute tells jCore which jblock template to use.


```
<!-- jblocks/containers/footers/simple -->
<template>
  <span class="copyright">jCore & jBlock &copy 2018 Joe LoMoglio. All rights reserved.</span>
</template>

<style scoped="true">
footer {
  background: #343434 url('assets/app/img/dot.png');
  padding: 25px 0;
  color: #e9e9e9;
  height: 74px;
  text-align: center;
  /* position: relative; */
  left: 0;
  right: 0;
}
</style>
```

## Development Notes
The framework is still in development and documentation will be added once it is complete.

[![Build Status][jlomoglio-badge]][jlomoglio-badge-url]


## Sponsored by:
<img src="https://bstacksupport.zendesk.com/attachments/token/NKFfHCZxmMGztqO7sgxUrmP5b/?name=Logo-01.svg" width="250" />

I use <a href="https://www.browserstack.com" target="_blank">BrowserStack</a> for cross browser compatibility on real browsers  for instant access to multiple desktop and mobile browsers.

[jlomoglio-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[jlomoglio-badge-url]: https://jlomoglio.github.io/2018/
