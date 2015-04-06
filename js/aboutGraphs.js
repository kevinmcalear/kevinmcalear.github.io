var languages = {
    labels: ["Ruby", "JavaScript", "Python", "PosgreSQL", "Bash", "HTML", "CSS"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(15, 35, 66, 0.2)",
            strokeColor: "rgba(15, 35, 66, 1)",
            pointColor: "rgba(15, 35, 66, 1)",
            pointStrokeColor: "rgba(15, 35, 66, 1)",
            pointHighlightFill: "rgba(15, 35, 66, 0.2)",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [85, 90, 75, 45, 75, 95, 95]
        }
    ]
};

var design = {
    labels: ["Photoshop", "Illustrator", "UX", "UI Design"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(66, 15, 46, 0.2)",
            strokeColor: "rgba(66, 15, 46, 1)",
            pointColor: "rgba(66, 15, 46, 1)",
            pointStrokeColor: "rgba(66, 15, 46, 1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [80, 50, 75, 70]
        }
    ]
};

var data = {
    labels: ["iPython Notebook", "Scikit Learn", "Pandas", "Data Analysis", "Statistics"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(40, 15, 66, 0.2)",
            strokeColor: "rgba(40, 15, 66, 1)",
            pointColor: "rgba(40, 15, 66, 1)",
            pointStrokeColor: "rgba(40, 15, 66, 1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [85, 90, 85, 70, 75]
        }
    ]
};

Chart.defaults.global.responsive = true;
Chart.defaults.global.pointDot = false;
Chart.defaults.global.pointDotRadius = 3;
// Chart.defaults.global.angleLineColor = "rgba(0,0,0,.1)";
Chart.defaults.global.angleLineWidth = 5;
Chart.defaults.global.pointLabelFontSize = 20;

(function(){
  if (document.getElementById("lang-graph")){

    // Get the context of the canvas element we want to select
    var langCtx = document.getElementById("lang-graph").getContext("2d");
    var designCtx = document.getElementById("design-graph").getContext("2d");
    var dataCtx = document.getElementById("data-graph").getContext("2d");
    // var myNewChart = new Chart(ctx).PolarArea(data);
    var langRadarChart = new Chart(langCtx).Radar(languages,{
      pointDot   : true,
      pointDotRadius : 1,
      datasetStrokeWidth : 1,
      responsive : true,
      angleLineWidth : .5,
      angleLineColor : "rgba(0,0,0,.1)",
      pointLabelFontSize : 11,
      tooltipTemplate: "<%=label%>: <%= value %>%",

    });
    var designRadarChart = new Chart(designCtx).Radar(design,{
      pointDot   : true,
      pointDotRadius : 1,
      datasetStrokeWidth : 1,
      responsive : true,
      angleLineWidth : .5,
      angleLineColor : "rgba(0,0,0,.1)",
      pointLabelFontSize : 11,
      tooltipTemplate: "<%=label%>: <%= value %>%",

    });
    var dataRadarChart = new Chart(dataCtx).Radar(data,{
      pointDot   : true,
      pointDotRadius : 1,
      datasetStrokeWidth : 1,
      responsive : true,
      angleLineWidth : .5,
      angleLineColor : "rgba(0,0,0,.1)",
      pointLabelFontSize : 11,
      tooltipTemplate: "<%=label%>: <%= value %>%",

    });

    var fired = false;
    var mapEl = document.getElementById("map");
    var aboutEl = document.getElementsByClassName('about')
    if ( aboutEl.length == 1 ) {
      document.addEventListener("scroll",function(){
        if ( !checkvisible( mapEl ) && !fired ) {
          fired = true;
          setTimeout(function(){
            fadeIn(mapEl)
            // Map stuff
            // TODO: CREATE A CUSTOM MAP WITH JUST GERMANY AND USA: https://github.com/markmarkoh/datamaps/blob/master/README.md#using-custom-maps
            // TODO: Try to get arcs to launch sequentially: http://datamaps.github.io/old.html
            var map = new Datamap({
              element: document.getElementById("map"),
               // scope: 'usa',
               // responsive: true,
               projection: 'orthographic',
               projectionConfig: {
                  rotation: [77,-30]
                },
                geographyConfig: {
                  popupOnHover: false, //disable the popup while hovering
                  highlightOnHover: false,
              },
              fills: {
                defaultFill: "rgba(126, 128, 126, 0.2)",
                win: 'rgba(15, 27, 250, 0.25)',
                travelColor: '#DD1C77'
              },
              data: {
                'DEU': { fillKey: 'win' },
                'USA': { fillKey: 'win' }
              },
              arcConfig: {
                strokeColor: '#DD1C77',
                strokeWidth: 1,
                arcSharpness: 1,
                animationSpeed: 2000
              },
              bubblesConfig: {
                borderWidth: 8,
                borderColor: 'rgba(126, 128, 126, 0.2)',
                popupOnHover: true,
                popupTemplate: function(geography, data) {
                  return '&lt;div class="hoverinfo"&gt;&lt;strong&gt;' + data.name + '&lt;/strong&gt;&lt;/div&gt;';
                },
                fillOpacity: 1,
                highlightOnHover: true,
                highlightFillColor: '#DD1C77',
                highlightBorderColor: 'rgba(126, 128, 126, 0.8)',
                highlightBorderWidth: 8,
                highlightFillOpacity: 0.85
              }
            });

            var myTravels = [
              {
                  origin: {
                      latitude: 41.6656,
                      longitude: -83.5753
                  },
                  destination: {
                      latitude: 48.7833,
                      longitude: 9.1833
                  }
              },
              {
                  origin: {
                      latitude: 48.7833,
                      longitude: 9.1833
                  },
                  destination: {
                      latitude: 36.3167,
                      longitude: -119.3000
                  },
                  // options: {
                  //   strokeWidth: 1,
                  //   // strokeColor: 'rgba(100, 10, 200, 0.4)',
                  //   greatArc: true
                  // }
              },
              {
                  origin: {
                      latitude: 36.3167,
                      longitude: -119.3000
                  },
                  destination: {
                      latitude: 40.6928,
                      longitude: -73.9903
                  }
              },
              // {
              //     origin: {
              //         latitude: 40.6928,
              //         longitude: -73.9903
              //     },
              //     destination: {
              //         latitude: 47.6097,
              //         longitude: -122.3331
              //     }
              // }
            ];

            // Add arcs in order
            function addArcs(index) {
                map.arc( myTravels.slice(0, index) , {strokeWidth: 1, arcSharpness: 2.1});
                if ( index < myTravels.length ) {
                    window.setTimeout(function() {
                        addArcs(++index)
                    }, 1900);
                }
            }

            addArcs(1);
            // map.graticule();
            map.bubbles([
             {name: 'Ohio', latitude: 41.6656, longitude: -83.5753, radius: 2, fillKey: 'travelColor'},
             {name: 'Germany', latitude: 48.7833, longitude: 9.1833, radius: 2, fillKey: 'travelColor'},
             {name: 'California', latitude: 36.3167, longitude: -119.3000, radius: 2, fillKey: 'travelColor'},
             {name: 'New York City', latitude: 40.6928, longitude: -73.9903, radius: 2, fillKey: 'travelColor'},
             // {name: 'Seattle', latitude: 47.6097, longitude: -122.3331, radius: 2, fillKey: 'travelColor'},
              ], {
               popupTemplate: function(geo, data) {
                 return "<div class='hoverinfo tooltip'>" + data.name + "";
               }
            });

            window.addEventListener('resize', function() {
                map.resize();
            });
          },400);
        }
      })
    }
  }
})();

