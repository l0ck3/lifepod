import Chart from 'chart.js'

function displayChart1() {
  var ctx = document.getElementById("SpotInstaBarChart");

  var tab = ctx.dataset.tab.split('-');

  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Instagram", "Spotify"],
          datasets: [{
              label: '% accepted suggestions',
              data: tab,
              backgroundColor: [
                  'rgba(2, 120, 174, 0.25)',
                  'rgba(2, 120, 174, 0.5)'
              ],
              borderColor: [
                  'rgba(2, 120, 174, 0.75)',
                  'rgba(2, 120, 174, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              xAxes: [{
                barPercentage: 0.5
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

}


function displayChart2() {
  var ctx = document.getElementById("ManuPieChart");
  var tab = ctx.dataset.tab.split('-');

  new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Photos", "Videos", "Quotes"],
        datasets: [{
          data: tab,
          label: "% repartion of self-added memories",
          backgroundColor: ['rgba(2, 120, 174, 0.7)', 'rgba(2, 120, 174, 0.4)', 'rgba(2, 120, 174, 0.1)'],
          borderColor: ['rgba(2, 120, 174, 1)', 'rgba(2, 120, 174, 0.7)', 'rgba(2, 120, 174, 0.4)'],
          borderWidth: 1,
        }]
      },
      options: {}
  });
}

function displayChart3() {
  var ctx = document.getElementById("SuggePieChart");
  var tab = ctx.dataset.tab.split('-');

  new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Spotify", "Instagram"],
        datasets: [{
          data: tab,
          label: "% repartion of self-added memories",
          backgroundColor: ['rgba(2, 120, 174, 0.7)', 'rgba(2, 120, 174, 0.1)'],
          borderColor: ['rgba(2, 120, 174, 1)', 'rgba(2, 120, 174, 0.4)'],
          borderWidth: 1,
        }]
      },
      options: {}
  });
}

function displayChart4() {
  var ctx = document.getElementById("ManuSuggePieChart");
  var tab = ctx.dataset.tab.split('-');

  new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Suggestion", "Self-added"],
        datasets: [{
          data: tab,
          label: "Suggestion VS Self-added",
          backgroundColor: ['rgba(2, 120, 174, 0.7)', 'rgba(2, 120, 174, 0.1)'],
          borderColor: ['rgba(2, 120, 174, 1)', 'rgba(2, 120, 174, 0.4)'],
          borderWidth: 1,
        }]
      },
      options: {}
  });
}


function displayChart5() {
  var ctx = document.getElementById("line-chart");
  var tab = ctx.dataset.tab.split('-');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['112 Days Ago','98 Days Ago','84 Days Ago','70 Days Ago','56 Days Ago','42 Days Ago','28 Days Ago','14 Days Ago','Today'],
      datasets: [{
          data: tab,
          label: "Number of added memories",
          borderColor: 'rgba(2, 120, 174, 1)',
          fill: false
        }
      ]
    },
    options: {}
  });
}

export {displayChart1}
export {displayChart2}
export {displayChart3}
export {displayChart4}
export {displayChart5}
