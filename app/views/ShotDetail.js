roookies.views.ShotDetail = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Roookies',
        items: [
            {
                text: 'Back',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: roookies.controllers.shots,
                            action: 'index',
                            animation: {type:'slide', direction:'right'}
                        });
                    }
                }
            },
        ]
    }],
    scroll: 'vertical',
    items: [
        {
            cls: 'shot',
            tpl: [
                '<div class="title">',
                    '<tpl for="player.data">',
                        roookies.views.avatarTpl(),
                    '</tpl>',
                    '<h2>{title}</h2>',
                    '<tpl for="player.data">',
                        '<span class="player"> by {username}</span>',
                    '</tpl>',
                '</div>',
                roookies.views.imgTpl()
            ]
        }, {
            tpl: roookies.views.metaTpl(false)
        }

    ],

    updateWithRecord: function(record) {

        Ext.each(this.items.items, function(item) {
            item.update(record.data);
        });
        this.doComponentLayout();

    },

    initComponent: function (shot) {
        roookies.views.ShotDetail.superclass.initComponent.apply(this, arguments);

        this.comments = new Ext.List({
            itemTpl: [
                '<tpl for="player.data">',
                    roookies.views.avatarTpl(),
                    '<span class="player">{username}</span><br/>',
                '</tpl>',
                '{body}'
            ],
            itemCls: 'comment',
            scroll: false,
            store: new Ext.data.Store({
                model: 'roookies.models.Comment',
                proxy: {
                    type: 'scripttag',
                    url: '',
                    reader: {
                        type: 'json',
                        root: 'comments'
                    }
                },
                autoLoad: false
            }),
            update: function(data) {
                this.store.proxy.url = 'http://api.dribbble.com/shots/' + data.id + '/comments';
                this.store.load();
            }
        });

        this.add(
            this.comments
        );
    }


});
