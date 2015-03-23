// used for building our imag tags
function img_create(src, alt, title) {
    var img= document.createElement('img');
    img.src= src;
    if (alt!=null) img.alt= alt;
    if (title!=null) img.title= title;
    return img;
}

// used for creating and adding in the music player
var createPlayer = function() {
  // add the player
  (function() {
      var script = document.createElement("script");

      script.type = "text/javascript";
      script.async = true;
      script.src = "//sd.toneden.io/production/toneden.loader.js"

      var entry = document.getElementsByTagName("script")[0];
      entry.parentNode.insertBefore(script, entry);
  }());

  ToneDenReady = window.ToneDenReady || [];
  ToneDenReady.push(function() {
      // Modify the dom and urls parameters to position
      // your player and select tracks/sets/artists to play.
      ToneDen.player.create({
          dom: "#player",
          urls: [
              "https://soundcloud.com/kevin-mcalear"
          ]
      });
  });
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
                    // make a div and append the anchor to it
                    var div = document.createElement('div');
                    div.setAttribute('data-sr',"move 16px scale up 20%, over 2s");
                    // div.setAttribute('class','col-3');
                    div.innerHTML = a.outerHTML;
                    // var p = document.createElement('p');
                    a.innerHTML = songList[index]["title"]+' - '+songList[index]["artist"];
                    a.setAttribute('class',"title");
                    div.appendChild(a);
                    // append the div to the list
                    musicList.appendChild(div);
                  }
              }
              // Scroll Reveal stuff for songs
              window.sr = new scrollReveal();
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
    // Add in the player
    createPlayer();
    // get the songs I like and add them in
    getSongs();

  }
})();


