Creating a custom theme
-----------------------

Use the contents of the <code>theming</code> folder for creating your custom theme for the Roookies application.

<string>Important:</strong> the <code>themes</code> directory includes a copy of part of the Sencha Touch SDK, placed here for your convenience to get started quickly with your theming work. This directory is distributed under the [same licence](http://dev.sencha.com/deploy/touch/license.txt) as the [Sencha Touch SDK](http://sencha.com/products/touch) as a whole.

To create your custom theme for the Roookies app:

1.  Add a <code>style</code> query string to the app's URL to reference a custom CSS file:

        http://myserver/roookies/?style=theming/roookies.css

2.  Add an additional <code>font</code> parameter if you need to reference a Google font by name:

        http://myserver/roookies/?style=theming/roookies.css&font=Perfecto

3.  Refresh the application. You should now see the green and wood of [Jen Gordon's](http://tapptics.com) sample theme.

4.  To compile your own theme, ensure you have Compass 0.11.beta.3 (or later) installed:

        > sudo gem install compass -v 0.11.beta.3

        > compass -v
        Compass 0.11.beta.3

5.  Make changes to the <code>roookies.scss</code> file (or a copy of your own)

6.  Run compass to compile the CSS:

        > compass compile roookies.scss

7.  Refresh the application to see the changes.


You will need to submit the resulting CSS file to enter the theming competition. However, feel free to submit the Sass (.scss) file too if you want to show us how clever you've been!
