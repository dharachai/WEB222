// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};


window.onload = function() {

    var getVideo = document.querySelector('#myVideo');
    var vidStart = "<video", vidEnd = "</video>";

    for (var i = 0; i < video.source.length; i++) {

        vidStart += " width= '" + video.width + "' height= '" + video.height + "' controls>";
        vidStart += "<source src='" + video.source[i].src + "' type='" + video.source[i].type + "' ";
        vidStart += vidEnd;

        getVideo.innerHTML = vidStart;
        }

    }