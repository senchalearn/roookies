
roookies.views.ShotsInnerList = Ext.extend(Ext.List, {

    itemTpl: roookies.views.imgTpl(),
    itemTplPost: roookies.views.metaTpl(true),

    itemCls: 'shot',

    multiSelect: true,
    simpleSelect: true,

    metaOpenAnim: new Ext.Anim({
        from: {maxHeight:'0'},
        to: {maxHeight:'2em'},
        autoClear: false
    }),
    metaCloseAnim: new Ext.Anim({
        to: {maxHeight:'0'},
        from: {maxHeight:'2em'},
        autoClear: false
    }),

    afterRender: function () {
        this.addManagedListener(
            this.getTargetEl(),
            'singletap',
            this.listeners.metadisclose,
            this,
            {delegate: 'span,small'}
        );
        roookies.views.ShotsInnerList.superclass.afterRender.call(this);
    },

    listeners: {
        itemtap: function (list, index, element, event) {
            var record = list.getRecord(element);
            var item = Ext.get(element);

            this.scroller.scrollTo({x: 0, y: item.getOffsetsTo(this.scrollEl)[1]}, 300);

            var meta = item.next('.shot-meta');
            if (!meta) {
                return;
            }
            if(list.selModel.isSelected(record)) {
                Ext.Anim.run(
                    meta, list.metaCloseAnim
                );
            } else {
                Ext.Anim.run(
                    meta, list.metaOpenAnim
                );
            }
        },
        metadisclose: function (event, element) {
            var detailType = element.className;
            var record = this.getRecord(Ext.get(element).parent('.shot-meta').prev('.x-list-item', true));
            Ext.dispatch({
                controller: roookies.controllers.shots,
                action: 'show',
                id: record.getId(),
                store: this.getStore(),
                detailType: detailType
            });

        }
    },

    initComponent: function () {
        roookies.views.ShotsInnerList.superclass.initComponent.call(this);
        var tpl = this.tpl.html;
        tpl = tpl.substr(0, tpl.length-6) + this.itemTplPost + '</tpl>';
        this.tpl = new Ext.XTemplate(tpl, {});
    }

});


roookies.views.ShotsLists = Ext.extend(Ext.Panel, {
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Roookies'
    }],
    tabBar: {
        dock: 'bottom',
        layout: {pack: 'center'}
    },
    cardSwitchAnimation: 'fade',
    items: [
        new roookies.views.ShotsInnerList({
            store: new Ext.data.Store({
                model: 'roookies.models.Shot',
                autoLoad: true,
                proxy: {
                    type: 'scripttag',
                    url: 'http://api.dribbble.com/shots/debuts',
                    reader: {
                        type: 'json',
                        root: 'shots'
                    }
                }
            }),
            iconCls: 'user'
        }),
        //new roookies.views.ShotsInnerList({
        //    store: new Ext.data.Store({
        //        model: 'roookies.models.Shot',
        //        autoLoad: true,
        //        proxy: {
        //            type: 'scripttag',
        //            url: 'http://api.dribbble.com/shots/popular',
        //            reader: {
        //                type: 'json',
        //                root: 'shots'
        //            }
        //        }
        //    }),
        //    iconCls: 'favorites'
        //}),
        //new roookies.views.ShotsInnerList({
        //    store: new Ext.data.Store({
        //        model: 'roookies.models.Shot',
        //        autoLoad: true,
        //        proxy: {
        //            type: 'scripttag',
        //            url: 'http://api.dribbble.com/shots/everyone',
        //            reader: {
        //                type: 'json',
        //                root: 'shots'
        //            }
        //        }
        //    }),
        //    iconCls: 'team'
        //}),
    ]
});