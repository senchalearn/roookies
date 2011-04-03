roookies.models.Shot = Ext.regModel("roookies.models.Shot", {
    fields: [
        {name: "id", type: "int"},
        {name: "title", type: "string"},
        {name: "url", type: "string"},
        {name: "image_url", type: "string"},
        {name: "image_teaser_url", type: "string"},
        {name: "width", type: "int"},
        {name: "height", type: "int"},
        {name: "views_count", type: "int"},
        {name: "likes_count", type: "int"},
        {name: "comments_count", type: "int"},
        {name: "rebounds_count", type: "int"},
        {name: "created_at", type: "date"},
        {name: "likes_count", type: "int"},
        {name: "player", type: "auto", convert: function (value) {
            return new roookies.models.Player(value);
        }},
        {name: "scaled_height", type: "int", convert: function(value, record) {
            var h = record.get('height'),
                w = record.get('width');
            return (h / w) * 286;
        }}

    ]
});
