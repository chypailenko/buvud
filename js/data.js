const COLORS = {
  borderColor: '#f2f6fc',
  blue: '#49BEEC',
  purple: '#C63AA4',
  yellow: '#acc236'
};
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const PROJECT_ACTIVITY = {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      borderColor: COLORS.borderColor,
      backgroundColor: COLORS.blue,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
    }, {
      label: 'My Second dataset',
      borderColor: COLORS.borderColor,
      backgroundColor: COLORS.purple,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
    }]
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
    },
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }],
    },
    legend: {
      display: false
    }
  }
};

const MANAGERS_ACTIVITY = {
  type: 'bar',
  data: {
    labels: [...Array(31).keys()].map((val, i) => i + 1),
    datasets: [{
      backgroundColor: COLORS.blue,
      borderColor: COLORS.borderColor,
      borderWidth: 1,
      data: [...Array(31).keys()].map(() => randomScalingFactor()),
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }],
    },
  }
};

const VISITS = {
    type: 'doughnut',
    data: {
        labels: ["Views", "Users", "Purchases"],
        datasets: [
            {
                label: "Visits",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                data: [4782,1263,394],
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Visits'
        }
    }
}