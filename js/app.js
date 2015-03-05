/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */

/* DESKTOP */

function pJS_desktop(){
  particlesJS('particles-js', {
    particles: {
      color: '#FF0000',
      shape: 'circle',
      opacity: 0.75,
      size: 3.5,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        opacity: 0.75,
        width: 0.3,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 250
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        color:'#FF0000',
        opacity: 0.6
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}


function pJS_dev(){
  particlesJS('particles-js', {
    particles: {
      color: '#FFF',
      shape: 'triangle',
      opacity: 0.75,
      size: 4,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        opacity: 0.75,
        width: 0.3,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 250
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        color:'#FF0000',
        opacity: 0.25
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}



function pJS_design(){
  particlesJS('particles-js', {
    particles: {
      color: '#30223C',
      shape: 'triangle',
      opacity: 0.7,
      size: 18.5,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        opacity: 0.25,
        width: 30.3,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 250
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        color:'#FF0000',
        opacity: 0.25
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}


function pJS_data(){
  particlesJS('particles-js', {
    particles: {
      color: '#000000',
      shape: 'edge',
      opacity: 0.75,
      size: 5.5,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        opacity: 0.75,
        width: 0.3,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 250
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        color:'#FF0000',
        opacity: 0.6
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}


/* MOBILE / TABLET */

function pJS_mobile(){
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 40,
      line_linked: {
        enable_auto: false,
        distance: 250,
        color: '#fff',
        opacity: 0.5,
        width: 0.5,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}

function pJS_edge(){
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'edge',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 40,
      line_linked: {
        enable_auto: false,
        distance: 250,
        color: '#fff',
        opacity: 0.5,
        width: 1,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: false,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}

function pJS_tri(){
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 40,
      line_linked: {
        enable_auto: false,
        distance: 250,
        color: '#fff',
        opacity: 0.5,
        width: 1,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: false,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}

/* LAUNCH */
if (document.getElementById("my-welcome")){

  if(window.innerWidth > 1100){
    pJS_desktop();
  }else{
    pJS_mobile();
  }

  /* on resize */

  window.addEventListener('resize', function() {
    checkOnResize();
  }, true);

  function checkOnResize(){
    if(window.innerWidth > 1100){
      if(pJS.particles.nb != 150){
        console.log('desktop mode')
        pJS.fn.vendors.destroy();
        pJS_desktop();
      }
    }else{
      if(pJS.particles.nb == 150){
        console.log('mobile mode');
        pJS.fn.vendors.destroy();
        pJS_mobile();
      }
    }
  }


  // Create a new instance of TheaterJS with defaults options.
  var theater = new TheaterJS();

  // First, describe actors by passing a name,
  // an experience and finally a selector string.
  theater
    .describe("Kevin", { speed: .8, accuracy: .6, invincibility: 4 }, "#my-welcome")

  theater
    .write("Kevin:Hello.")
    .write(500)
    .write("Kevin:My Name is Kevin.")
    .write(500)
    .write("Kevin:I love", 600, developer, " programming.", 1000)
    .write(-13)
    .write(designer, " design.", 1000)
    .write(-8)
    .write(dataScientist, " data science.", 1000)
    // .write("Kevin:and a lot of other things...", 800)
    .write(intro,"Kevin:Welcome to my site.", 1000, addButton);
    // .write("Kevin:Explore away.", 1000, addButton);
    // .write(function () { theater.play(true); });
}


function designer () {
  document.getElementById('particles-js').className = "designer";
  // pJS.fn.vendors.destroy();
  // // pJS_design();
  // pJS_mobile();
}

function developer () {
  document.getElementById('particles-js').className = "developer";
  // pJS.fn.vendors.destroy();
  // pJS_dev();
}

function dataScientist () {
  document.getElementById('particles-js').className = "data-scientist";
  // pJS.fn.vendors.destroy();
  // pJS_data();
}

function intro () {
  document.getElementById('particles-js').className = "intro";
  // pJS.fn.vendors.destroy();
  // pJS_desktop();
}

function explore () {
  var node = document.createElement("BUTTON");
  var textnode = document.createTextNode("See More");
  node.appendChild(textnode);
  document.getElementById("my-pannel").appendChild(node);
}

function addButton () {
  document.getElementById("explore-button").className = "button button--nanuk button--round-l button--text-thick button--inverted";
}
