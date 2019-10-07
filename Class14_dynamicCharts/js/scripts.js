
$( document ).ready(function() {
  createCharts();
});

function createCharts() {

  var eraChart = c3.generate({
      title: {
        text: 'ERA Leaerboard'
      },
      bindto: '#era-chart',
      data: {
        columns: [
          ['Pitcher',2.32, 2.43, 2.50, 2.58, 2.68, 2.75, 2.87, 2.92, 2.93, 3.03],
        ],
        axes: {
          data2: 'y2',
          labels: 'x'
        },
        types: {
          Pitcher: 'bar'
        }
      },
      axis: {
        y: {
          label: {
            text: 'ERA',
            position: 'outer-middle'
          }
        },
        y2: {
          show: false,
          label: {
            text: 'ERA',
            position: 'outer-middle'
          }
        },
        x: {
          show:true,
          type: 'category',
          categories: ['Ryu','deGrom','Cole','Verlander','Soroka','Flaherty','Gray','Scherzer','Greinke','Kershaw']
        }
      }

  });

  var strikeChart = c3.generate({
    title: {
      text: 'Overall % of strikes and balls'
    },
      bindto: '#strikeBall-chart',
      data: {
          // iris data from R
          columns: [
              ['Strike', 63],
              ['Ball', 37],
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });

  var ryuChart = c3.generate({
    title: {
      text: "Ryu's ERA from 2013 to 2019"
    },
    bindto: '#ryuERA-chart',
    data: {
      columns: [
        ["Ryu's ERA over time", 3.00, 3.38, 11.57, 3.77, 1.97, 2.32],
      ],
      axes: {
        data2: 'y2',
        labels: 'x'
      }
    },
    axis: {
      y: {
        label: {
          text: 'ERA',
          position: 'outer-middle'
        }
      },
      y2: {
        show: false,
        label: {
          text: 'ERA',
          position: 'outer-middle'
        }
      },
      x: {
        show:true,
        type: 'category',
        categories: ['2013','2014','2016','2017','2018','2019']
      }
    }
});
};
