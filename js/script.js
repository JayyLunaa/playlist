/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Look Back At It", "Te Regalo","Radicamos en South Central"];
console.log()
var links = ["https://www.youtube.com/watch?v=DmNfT-B7nlA", "https://www.youtube.com/watch?v=MVMTGIu84TA","https://www.youtube.com/watch?v=aIzLqOlcX8U"];
var artists = ["A Boogie", "Ulices Chaidez","Jair Luna"];
var songlengths = ["254","300","333"];
var images_urls = ["https://i.ytimg.com/vi/4OrdOIUyV1I/maxresdefault.jpg","https://i.ytimg.com/vi/_CS6uAYUefQ/maxresdefault.jpg","https://s.mxmcdn.net/images-storage/albums4/6/0/2/7/8/5/40587206_800_800.jpg"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $("#songs").append("<p>"+song+"</p>")
    });   
    links.forEach(function(link) {
        $("#links").append("<a href="+link+">listen</a>");
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>"+artist+"</p>");
    });
    songlengths.forEach(function(songlength) {
        $("#lengths").append("<p>"+songlength+"</p>");
    });
    images_urls.forEach(function(image) {
        $("#images").append("<img src="+image+"></img>")
    });
}
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#links").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
