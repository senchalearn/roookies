Sencha Touch Theming Contest, April 2011
========================================

This project is the application to be used in the Sencha Touch Theming Contest. By default it uses the standard Sencha Touch theme, but it also includes a sample custom theme which can be easily switched in.

Read more about the contest [here](http://www.sencha.com/theme-contest/), and be sure to read [the rules](http://www.sencha.com/theme-contest/contest-rules/) too.

You can try out the (unthemed) application live [here](http://senchalearn.github.com/roookies/), or with the sample custom theme [here](http://senchalearn.github.com/roookies/?style=demo). Think you can do better?

To get an idea of how this all works, take a look at the sample <code>roookies.scss</code> (and the resulting <code>roookies.css</code>) files that are shipped in the <code>theming</code> directory of this project. This theme was crafted by Jen Gordon of the awesome [Tapptics](http://www.tapptics.com/)

For more information about how to use SCSS and Compass, please consult the [Sass](http://sass-lang.com/) and [Compass](http://compass-style.org) web sites.

Other resources that will help you include:

*   [Sass and Compass - The Next Wave in Styling and Theming](http://vimeo.com/18084338)
*   [An introduction to theming Sencha Touch](http://www.sencha.com/blog/an-introduction-to-theming-sencha-touch/)
*   [Theming Sencha Touch](http://vimeo.com/17879651)
*   [Sencha Touch SASS Variables and Mixins Reference](http://dev.sencha.com/deploy/touch/docs/theme/)
*   [Contest help in the Sencha forums](http://www.sencha.com/forum/showthread.php?130834-Sencha-Touch-Theme-Contest-April-2011)

Entries to the competition should comprise a single CSS file only: no changes are allowed to the JavaScript of the application. We recommend that images are included inline in the generated CSS (as they are in the example), simply so that the judges can easily test them without having to extract directories of additional resources. However, you may also wish to submit your SCSS source too, to show us how elegant your Sass is.


Creating a custom theme
-----------------------

Use the contents of the <code>theming</code> folder for creating your custom theme for the Roookies application.

<string>Important:</strong> the <code>themes</code> directory includes a copy of part of the Sencha Touch SDK, placed here for your convenience to get started quickly with your theming work. This directory is distributed under the (same licence)[http://dev.sencha.com/deploy/touch/license.txt] as the [Sencha Touch SDK](http://sencha.com/products/touch) as a whole.

To create your custom theme for the Roookies app:

1.  Add a <code>style</code> query string to the app's URL to reference a custom CSS file:

        http://myserver/roookies/?style=theming/roookies.css

2.  Add an additional <code>font</code> parameter if you need to reference a Google font by name:

        http://myserver/roookies/?style=theming/roookies.css&font=Perfecto

3.  Refresh the application. You should now see the green and wood of (Jen Gordon's)[http://tapptics.com] sample theme.

4.  To compile your own theme, ensure you have Compass 0.11.beta.3 (or later) installed:

        > sudo gem install compass -v 0.11.beta.3

        > compass -v
        Compass 0.11.beta.3

5.  Make changes to the <code>roookies.scss</code> file (or a copy of your own)

6.  Run compass to compile the CSS:

        > compass compile roookies.scss

7.  Refresh the application to see the changes.


You will need to submit the resulting CSS file to enter the theming competition. However, feel free to submit the Sass (.scss) file too if you want to show us how clever you've been!



Installing Sencha Touch
-----------------------

By default, the Roookies app links to online versions of the JavaScript and CSS files, and uses the query string of the app to switch CSS. However, you may also want to download the Sencha Touch SDK and link to those files locally - this means you will be able to work on the app offline, and you get the benefits of the documentation and examples present in the SDK.

Download the Sencha Touch v1.1 SDK from [here](http://www.sencha.com/products/touch/download/) and place (or symlink) the unzipped directory, renamed to <code>touch</code>, into the <code>lib</code> folder.

You can alter the <code>&lt;link&gt;</code> and <code>&lt;script&gt;</code> tags in the <code>index.html</code> of the application itself point to the correct locations for the local JavaScript and CSS resources if you wish:

    <script src="lib/touch/sencha-touch.js" type="text/javascript"></script>
    <link  href="lib/touch/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />

(If you link to your CSS files explicitly like this, you should remove the <code>&lt;script&gt;</code> block that writes them in based on the query string).

You should then be able to test that the application works by opening the <code>index.html</code> file in a WebKit desktop browser. To try your local copy of the application on a mobile simulator (or real handset), you will have to deploy this directory onto a local (or external) web server.



Submitting your entry
---------------------

To submit an entry, you'll need to provide at least an external link to your resulting CSS file. You can try out your CSS on our live application by altering the <code>style</code> parameter of the URL. For example:

    http://senchalearn.github.com/roookies/?style=http://mysite.com/awesome.css

If you have used a custom font face in your theme, don't forget to provide the name of the [Google web font](http://www.google.com/webfonts) used. Again, check this works using the query string:

    http://senchalearn.github.com/roookies/?style=http://mysite.com/awesome.css&font=bangers

To submit your theme to the competition, use [this form](https://spreadsheets.google.com/a/extjs.com/spreadsheet/viewform?formkey=dDNEbzA5N2UyckhsaGxESjR1WlhZNHc6MQ) to provide both the CSS URL and the font name, and be sure to get your entry in before the deadline, 2nd May 2011.

Good luck!