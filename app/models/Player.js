roookies.models.Player = Ext.regModel("roookies.models.Player", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: "username", type: "string"},
        {name: "url", type: "string"},
        {name: "avatar_url", type: "string"},
        {name: "location", type: "string"},
        {name: "twitter_screen_name", type: "string"},

        {name: "shots_count", type: "int"},
        {name: "draftees_count", type: "int"},
        {name: "followers_count", type: "int"},
        {name: "following_count", type: "int"},

        {name: "comments_count"},
        {name: "comments_received_count"},
        {name: "likes_count"},
        {name: "likes_received_count"},
        {name: "rebounds_count"},
        {name: "rebounds_received_count"},

        {name: "created_at", type: "date"},
    ]
});

