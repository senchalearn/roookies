roookies.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {

        roookies.views.shotsLists = new roookies.views.ShotsLists();
        roookies.views.shotDetail = new roookies.views.ShotDetail();

        Ext.apply(this, {
            items: [
                roookies.views.shotsLists,
                roookies.views.shotDetail,
            ]
        });

        roookies.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});


//some template helpers
roookies.views.imgTpl = function () {
    return "<img class='shot-image' width='286' height='{scaled_height}' src='http://i.tinysrc.mobi/286/{image_url}' />";
};
roookies.views.metaTpl = function (startCollapsed) {
    return "<div class='shot-meta' style='overflow:hidden" +
        (startCollapsed ? ";max-height:0" : "") +
        "'>" +
        "<span class='views'><img src='" + Ext.BLANK_IMAGE_URL + "'>{views_count}</span><small class='noun'> views, </small>" +
        "<span class='likes'><img src='" + Ext.BLANK_IMAGE_URL + "'>{likes_count}</span><small class='noun'> likes, </small>" +
        "<span class='rebounds'><img src='" + Ext.BLANK_IMAGE_URL + "'>{rebounds_count}</span><small class='noun'> rebounds, </small>" +
        "<span class='comments'><img src='" + Ext.BLANK_IMAGE_URL + "'>{comments_count}</span><small class='noun'> comments</small>" +
    "</div>";
};
roookies.views.avatarTpl = function () {
    return "<img class='avatar' src='{avatar_url}' style='height:80px; width:80px'/>";
}