var players = ["yo", "tu", "Yellow", "Green", "Purple", "Orange"];
var results = [12, 19, 3, 5, 2, 3];
var tournament = [{
  label: players,
  data : results,
  backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ],
  borderColor: [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ],
  borderWidth: 1
}]

var main = function() {
  var ctx = document.getElementById("grafica");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: players,
      datasets: tournament
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

$(document).ready(main);
