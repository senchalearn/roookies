Installing Sencha Touch
-----------------------

By default, the Roookies app links to online versions of the JavaScript and CSS files, and uses the query string of the app to switch CSS. However, you may also want to download the Sencha Touch SDK and link to those files locally - this means you will be able to work on the app offline, and you get the benefits of the documentation and examples present in the SDK.

Download the Sencha Touch v1.1 SDK from [here](http://www.sencha.com/products/touch/download/) and place (or symlink) the unzipped directory, renamed to <code>touch</code>, into the <code>lib</code> folder.

You can alter the <code>&lt;link&gt;</code> and <code>&lt;script&gt;</code> tags in the <code>index.html</code> of the application itself point to the correct locations for the local JavaScript and CSS resources if you wish:

    <script src="lib/touch/sencha-touch.js" type="text/javascript"></script>
    <link  href="lib/touch/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />

(If you link to your CSS files explicitly like this, you should remove the <code>&lt;script&gt;</code> block that writes them in based on the query string).

You should then be able to test that the application works by opening the <code>index.html</code> file in a WebKit desktop browser. To try your local copy of the application on a mobile simulator (or real handset), you will have to deploy this directory onto a local (or external) web server.