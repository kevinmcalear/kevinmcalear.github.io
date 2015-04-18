// Scroll Reveal stuff for songs
window.sr = new scrollReveal();


var wall = $('#projects').GITheWall({
  // Callbacks API
  onBeforeInit: null,
  onReady: null,
  onViewPortUpdate: null,
  onItemChange: null,
  onDestroy: null,
  onShow: null,
  onHide: null,
  onContentLoading: null,
  onContentLoaded: null,
  margin: {
    top: 10,
    bottom: 10
  },
  scrollerElm: null,
  scrollOffset: 150,
  // settings
  arrows: true,
  closebutton: true,
  keyboardNavigation: true,
  animationSpeed: 300,
  autoscroll: true,
  responsive: true,
  initialWrapperHeight: 600,
  dynamicHeight: true,
  nextButtonClass: '',
  prevButtonClass: '',
  closeButtonClass: ''
});






// // sorting projects
// var container = document.querySelector('#projects');
// var iso = new Isotope( container, {
//   // options...
//   itemSelector: '.test',
//   masonry: {
//     columnWidth: 200
//   }
// });

