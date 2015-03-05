// used for building our imag tags
function img_create(src, alt, title) {
    var img= document.createElement('img');
    img.src= src;
    if (alt!=null) img.alt= alt;
    if (title!=null) img.title= title;
    return img;
}

function getSongs() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        //  request finished and response is ready (4)
        if (xmlhttp.readyState == 4 ) {
           // everything worked properly
           if(xmlhttp.status == 200){
               // find the element with the music id
               var musicList = document.getElementById("music");
               // get back the list of my faves from HypeMachine and parse it into JSON
               var songList = JSON.parse(xmlhttp.responseText);

               // go through each song in the song list to create elements to attach to the musicList
               for(var index in songList) {
                  // make sure an object is actually a song
                  if ( songList[index]["posturl"] ) {
                    // grab each song
                    var song = songList[index];
                    // create an image from each song's picture
                    var image = img_create(song["thumb_url_large"]);
                    // create an anchor tag to add the song's link to
                    var a = document.createElement('a');
                    a.setAttribute('href',song["posturl"]);
                    a.setAttribute('target',"_blank");
                    // add the song's image inside the link
                    a.innerHTML = image.outerHTML;
                    // append the anchor to the list
                    musicList.appendChild(a);
                  }
               }
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    }
    // open our request
    xmlhttp.open("GET", "http://hypem.com/playlist/loved/kevinmcalear/json/1/data.js", true);
    // send that baby
    xmlhttp.send();
}

// Get us some songs!
(function(){
  if (document.getElementById("music")){
    getSongs();
  }
})();
