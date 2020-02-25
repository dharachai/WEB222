// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

//code for fruits
window.onload = function(){
    var myFruits = document.querySelector("#fruits");
    var openOrder = "<ol>";

   for (var i = 0; i<fruits.length; i++){
       openOrder += "<li>" + fruits[i] + "</li>";
   }

   myFruits.innerHTML = openOrder;
    

// code for Directory
var openUnlist = "<ul>";
var myDirectory = document.querySelector("#directory");
// Dir list , if type is file
for (var i = 0; i<directory.length; i++){
    if (directory[i].type === "file"){
            openUnlist += "<li>" + directory[i].name + "</li>";
        }
        // sub list if type is dir
    else if (directory[i].type === "directory"){
        openUnlist += "<li>" + directory[i].name + "</li>";
            for (var d = 0; d<directory[i].files.length; d++){
                openUnlist += "<ul><li>" + directory[i].files[d].name + "</li></ul>";
            }
        }
    }
    myDirectory.innerHTML = openUnlist;
}
