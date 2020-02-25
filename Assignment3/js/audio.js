// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function () {

    var getAudio = document.querySelector("#audio");
    var codeStart = "";

    if (audio.controls === true){ 
     codeStart += "<audio controls>";
    }

    else{
        codeStart += "<audio>";
    }
        for (var i = 0; i < audio.source.length; i++){
            codeStart += "<source src='" + audio.source[i].src + "'" + "type='" + audio.source[i].type + "'>";
        }
    codeStart += "</audio>";

    getAudio.innerHTML += codeStart;   

}