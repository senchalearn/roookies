roookies.models.Comment = Ext.regModel("roookies.models.Comment", {
    fields: [
        {name: "id", type: "int"},
        {name: "body", type: "string"},
        {name: "created_at", type: "date"},
        {name: "likes_count", type: "int"},
        {name: "player", type: "auto", convert: function (value) {
            return new roookies.models.Player(value);
        }}
    ]
});
