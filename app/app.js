Ext.regApplication({
    tabletStartupScreen: 'theming/images/loading-tablet.jpg',
    phoneStartupScreen: 'theming/images/loading-phone.jpg',
    icon: 'theming/images/icon@2x.png',
    tabletIcon: 'theming/images/icon-tablet.png',
    phoneIcon: 'theming/images/icon.png',
    glossOnIcon: false,

    name: 'roookies',
    launch: function() {
        this.views.viewport = new this.views.Viewport();
    }
});