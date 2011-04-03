Sencha Touch Theming Contest, April 2011
========================================

This project is the application to be used in the Sencha Touch Theming Contest. By default it uses the standard Sencha Touch theme, but it also includes a sample custom theme which can be easily switched in by altering the <code>index.html</code> file.

Entries to the competition should comprise a single CSS file only: no changes are allowed to the JavaScript of the application. (Although we might allow you to pull in a different web font in the <code>&lt;head&gt;</code> of <code>index.html</code>...)

We recommend that images are included inline in the generated CSS (as they are in the example), simply so that the judges can easily test them without having to extract directories of additional resources. However, you may also wish to submit your SCSS source too.

To get an idea of how this all works, take a look at the sample <code>roookies.scss</code> (and the resulting <code>roookies.css</code>) files that are shipped in the <code>theming</code> directory of this project. This theme was crafted by Jen Gordon of the awesome [Tapptics](http://www.tapptics.com/)

For more information about how to use SCSS and Compass, please consult the [Saas](http://sass-lang.com/) and [Compass](http://compass-style.org) web sites.

To get started with this project, you will need to follow the instructions below.


Installing Sencha Touch
-----------------------

Download the Sencha Touch v1.1 SDK from [here](http://www.sencha.com/products/touch/download/) and place (or symlink) the unzipped directory, renamed to <code>touch</code>, into the <code>lib</code> folder.

This should ensure that the <code>&lt;link&gt;</code> and <code>&lt;script&gt;</code> tags in the <code>index.html</code> of the application itself point to the correct locations for the JavaScript and CSS resources:

    <script src="lib/touch/sencha-touch.js" type="text/javascript"></script>
    <link  href="lib/touch/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />

You should then be able to test that the application works by opening the <code>index.html</code> file in a WebKit desktop browser. To try the application on a mobile simulator (or real handset), you will have to deploy this directory onto a local (or external) web server.


Creating your custom theme
--------------------------

Use the contents of the <code>theming</code> folder for creating your custom theme for the Roookies application.

1.  Uncomment the style <code>&lt;link&gt;</code> in the app's <code>index.html</code> to link to this new CSS:

        <link href="theming/roookies.css" rel="stylesheet" type="text/css" />

2.  Remove the existing <code>&lt;link&gt;</code> to <code>sencha-touch.css</code> (the <code>roookies.css</code> file includes the entire styling for the app)

3.  Refresh the application. You should now see green and wood.

4.  To compile your own theme, ensure you have Compass 0.11.beta.3 (or later) installed:

        > sudo gem install compass -v 0.11.beta.3

        > compass -v
        Compass 0.11.beta.3

5.  Make changes to the <code>roookies.scss</code> file

6.  Run compass to compile the CSS:

        > compass compile roookies.scss

7.  Refresh the application to see the changes.