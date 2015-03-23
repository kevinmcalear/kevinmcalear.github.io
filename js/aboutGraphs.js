var languages = {
    labels: ["Ruby", "JavaScript", "Python", "PosgreSQL", "Bash", "HTML", "CSS"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [85, 90, 75, 45, 75, 95, 95]
        }
    ]
};

var design = {
    labels: ["Photoshop", "UX", "UI Design", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

var data = {
    labels: ["iPython Notebook", "Scikit Learn", "Pandas", "Numpy", "SciPy", "Cycling", "Running"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

Chart.defaults.global.responsive = true;
Chart.defaults.global.pointDot = true;
Chart.defaults.global.angleLineColor = "rgba(0,0,0,.1)";

(function(){
  if (document.getElementById("lang-graph")){

    // Get the context of the canvas element we want to select
    var langCtx = document.getElementById("lang-graph").getContext("2d");
    var designCtx = document.getElementById("design-graph").getContext("2d");
    var dataCtx = document.getElementById("data-graph").getContext("2d");
    // var myNewChart = new Chart(ctx).PolarArea(data);
    var langRadarChart = new Chart(langCtx).Radar(languages);
    var designRadarChart = new Chart(designCtx).Radar(design);
    var dataRadarChart = new Chart(dataCtx).Radar(data);

  }
})();
