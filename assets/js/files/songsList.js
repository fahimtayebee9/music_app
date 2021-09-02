export default class Songs{
    static songs_list = [
        {
            "id"        : 0,
            "artist"    : "Alan Walker",
            "album"     : "Faded",
            "duration"  : "3:32",
            "views"     : "3,127,053,990 ",
            "title"     : "Faded",
            "audio"     : "assets/media/Faded.mp3",
            "video"     : "60ItHLz5WEA",
            "poster"    : "assets/img/31845.jpeg",
            "release"   : "3 December, 2015",
            "background": "linear-gradient( 108.1deg,  rgba(167,220,225,1) 11.2%, rgba(217,239,242,1) 88.9% )",
            "mode"      : true
        },
        {
            "id"        : 1,
            "artist"    : "K-391 & Alan Walker",
            "album"     : "Ignite",
            "duration"  : "3:27",
            "views"     : "398,615,182",
            "title"     : "Ignite",
            "audio"     : "assets/media/Ignite.mp3",
            "video"     : "Az-mGR-CehY",
            "poster"    : "assets/img/Ignite.jpg",
            "release"   : "11 May, 2018",
            "background": "linear-gradient( 108.1deg , rgb(16 16 16) 11.2%, rgb(29 0 8) 88.9%)",
            "mode"      : false
        },
        {
            "id"        : 2,
            "artist"    : "Alan Walker & Ava Max",
            "album"     : "Alone",
            "duration"  : "2:43",
            "views"     : "109,202,174",
            "title"     : "Alone",
            "audio"     : "assets/media/Alone.mp3",
            "video"     : "",
            "poster"    : "assets/img/artworks-000199189002-v8ihnl-t500x500.jpg",
            "release"   : "2 December, 2016",
            "background": "linear-gradient( 108.1deg,  rgba(167,220,225,1) 11.2%, rgba(217,239,242,1) 88.9% )",
            "mode"      : true
        }
    ];

    static getRandom = () => {
        return Songs.songs_list[Math.floor(Math.random() * Songs.songs_list.length)];
    }
}