roookies.controllers.shots = new Ext.Controller({

    index: function(options) {
        roookies.views.viewport.setActiveItem(
            roookies.views.shotsList, options.animation
        );
    },

    show: function(options) {
        var id = parseInt(options.id),
            shot = options.store.getById(id);

        if (shot) {
            roookies.views.shotDetail.updateWithRecord(shot);
            roookies.views.viewport.setActiveItem(
                roookies.views.shotDetail, options.animation
            );
        }
    },

});
