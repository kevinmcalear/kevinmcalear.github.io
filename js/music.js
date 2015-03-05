function img_create(src, alt, title) {
    var img= document.createElement('img');
    img.src= src;
    if (alt!=null) img.alt= alt;
    if (title!=null) img.title= title;
    return img;
}


function loadXMLDoc() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
           if(xmlhttp.status == 200){
               var musicList = document.getElementById("music")
               var songList = JSON.parse(xmlhttp.responseText);
               for(var index in songList) {
                  if ( songList[index] ) {
                    var song = songList[index];
                    var image = img_create(song["thumb_url_large"]);
                    var a = document.createElement('a');
                    a.setAttribute('href',song["posturl"]);
                    a.setAttribute('target',"_blank");
                    var span = document.createElement('span');
                    span.appendChild(image);
                    a.innerHTML = span.innerHTML;
                    var span = document.createElement('span');
                    span.appendChild(a);
                    musicList.appendChild(span);
                  }
               }
               console.log(JSON.parse(xmlhttp.responseText))
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400')
           }
           else {
               alert('something else other than 200 was returned')
           }
        }
    }

    xmlhttp.open("GET", "http://hypem.com/playlist/loved/kevinmcalear/json/1/data.js", true);
    xmlhttp.send();
}

loadXMLDoc();
