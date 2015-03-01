/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */

/* DESKTOP */

function pJS_desktop(){
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circle',
      opacity: .2,
      size: 2.5,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        opacity: 0.3,
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


/*
 * Github repository:
 * https://github.com/Zhouzi/TheaterJS
 *
 * Github page:
 * http://gabinaureche.com/TheaterJS
 *
 */





// Create a new instance of TheaterJS with defaults options.
var theater = new TheaterJS();



// First, describe actors by passing a name,
// an experience and finally a selector string.
theater
  .describe("Kevin", { speed: .8, accuracy: .6, invincibility: 4 }, "#my-welcome")


// The write method adds scenes to the theater's scenario.
// It accepts an indefinite number of parameters and is chainable.
// theater.write("I:Hello", 400).write("You:Wassup?", 400);
// Is the same as:
// theater.write("I:Hello", 400, "Your:Wassup?", 400);
theater

  // "Kevin:Luke" adds 2 scenes:
  // 1 - Update current actor.
  // 2 - Add a "say" scene with the speech (Luke in this example).
  .write("Kevin:Hello.")

  // When passing a positive int to the write method,
  // it adds a "wait" scene.
  // A break lasting for the amout of the passed argument (ms).
  .write(400)

  // A function is added as a "call" scene.
  // It simply call the passed function by setting
  // the context to the TheaterJS instance.
  // In this case, the toggleClass is simply toggling body's class.
  // Luke has a white background while Vader has a darker one.
  // .write(toggleClass)

  // .write("Luke:What?", toggleClass)
  .write("Kevin:My Name is Kevin.")
  .write(500)
  .write("Kevin:I am",600," a developer.")

  // Previous arguments are just shorthands that build the proper scene object.
  // However, you can pass a scene object with more complex args.
  // .write({ name: "call", args: [kill, true] })

  // .write("Luke:Nooo...")

  // A negative int creates an "erase" scene that removes x characters.
  .write(-10)

  .write("a designer", 400, "No! ", 400)
  // .write("Luke:That's not true!", 400)
  // .write("Luke:That's impossible!", toggleClass)
  .write("Kevin:Search your feelings.", 1600)
  .write("Kevin:You know it to be true.", 1000, toggleClass)

  // Passing the actor's name in the string update the current actor.
  // It also erase the previous speech to show the new one.
  // If you want to append a value rather than replacing it, simply omit the actor's name.
  // e.g.: theater.write("Luke:Noooooooo! ", "No!");
  // .write("Luke:Noooooooo! ", 400, "No!", toggleClass)
  .write("Kevin:Luke.", 800)
  .write("Kevin:You can destroy the Emperor.", 1600)
  .write("Kevin:He has foreseen this. ", 800)
  .write("Kevin:It is your destiny.", 1600)
  .write("Kevin:Join me.", 800)
  .write("Kevin:Together we can rule the galaxy.", 800)
  .write("Kevin:As father and son.", 1600)
  .write("Kevin:Come with me. ", 800)
  .write("Kevin:It is the only way.", 2000)

  // This last statement makes the scenario loop.
  // The true argument means "restart from scratch".
  .write(function () { theater.play(true); });



// Code below is used for the purpose of the demo.
var body = document.getElementsByTagName("BODY")[0];

function toggleClass (className) {
  if (typeof className !== "string") className = "light";

  if (theater.utils.hasClass(body, className)) theater.utils.removeClass(body, className);
  else theater.utils.addClass(body, className);
}

function kill () {
  var self    = this,
      delay   = 300,
      i       = 0,
      timeout = setTimeout(function blink () {
        toggleClass("blood");
        if (++i < 6) timeout = setTimeout(blink, delay);
        else self.next();
      }, delay);

  return self;
}
