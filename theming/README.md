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