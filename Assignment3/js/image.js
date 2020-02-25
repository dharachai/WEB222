// Data for the "HTML Images" Page

var images = [
    {caption: "Red Slate Mountain", alt: "Mountain", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Red_Slate_Mountain_1.jpg/320px-Red_Slate_Mountain_1.jpg"},
    {caption: "St. Petersburg River", alt: "River", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Saint-petersburg-river-march-24-2016.jpg/320px-Saint-petersburg-river-march-24-2016.jpg"},
    {caption: "Lybian Desert", alt: "Desert", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Libyan_Desert_-_2006.jpg/320px-Libyan_Desert_-_2006.jpg"},
    {caption: "Azerbaijan Forest", alt: "Forest", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Azerbaijan_forest_3.JPG/320px-Azerbaijan_forest_3.JPG"},
    {caption: "Indonesian Jungle", alt: "Jungle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Indonesian_jungle3%2C_Zoo_Prague.jpg/320px-Indonesian_jungle3%2C_Zoo_Prague.jpg"}
];

window.onload = function() {
    var strictPhoto = document.querySelector('#PickedPhoto');
    var string = "";

    for (var i = 0; i < 1; i++) { 	
        /*On instuction said only first 2 picture shown. But the picture shown are the first and the last one. 
        So, I decided to show first picture and last picture*/

       string += "<img src=" + "'" + images[0].url + "' alt='" + images[0].alt + "'></img>" + "<br>" +
       "<caption>" + images[0].caption + "</caption>" + "<br>";
       
       string +="<img src="  + "'" + images[4].url + "' alt='" + images[4].alt + "'></img>" + "<br>" +
       "<caption>" + images[4].caption + "</caption>" + "<br>";

    }

    strictPhoto.innerHTML += string;
}