// Oil Reserve Data
var oilReserveData = {
  labels: [
    "Route 66:Alpha",
    "Route 66:Bravo",
    "Route 66:Charlie",
    "Route 66: TOTAL",
    "Hanamura:Delta",
    "Hanamura:Echo",
    "Hanamura:Foxtrot",
    "Hanamura:Golf",
    "Hanamura TOTAL",
    "Nubani:Hotel",
    "Mansfield:Lima",
    "Mansfield:November",
    "Mansfield Total"
  ],
  datasets: [
    {
      label: "Oil Reserves",
      backgroundColor: "blue",
      borderColor: "black",
      borderWidth: 1,
      data: [
        10000,
        12000,
        12000,
        34000,
        3000,
        6000,
        9000,
        12000,
        30000,
        9500,
        35000,
        19000,
        54000
      ]
    }
  ]
};
// end oil reserve data

// gas reserve data
var gasReserveData = {
  labels: [
    "Hanamura:Delta",
    "Hanamura:Foxtrot",
    "Hanamura TOTAL",
    "Nubani:Hotel",
    "Nubani:India",
    "Nubani TOTAL",
    "Mansfield:Juliet",
    "Mansfield:Kilo",
    "Mansfield:Mike",
    "Mansfield TOTAL",
    "Austin:Oscar",
    "Austin:Papa",
    "Austin Total"
  ],
  datasets: [
    {
      label: "Gas Reserves",
      backgroundColor: "green",
      borderColor: "black",
      borderWidth: 1,
      data: [
        1200,
        1600,
        2800,
        3200,
        1800,
        5000,
        1500,
        1400,
        3500,
        6300,
        4000,
        5000,
        9000
      ]
    }
  ]
};
// end gas reserve data
// oil production data
var oilProductionData = {
  labels: ["7/14", "7/15", "7/16", "7/18", "7/19", "7/20"],
  datasets: [
    {
      label: "Route 66:Alpha",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "crimson",
      borderColor: "crimson",
      borderWidth: 1,
      data: [250, 300, 125, 180, 200, 180]
    },
    {
      label: "Route 66:Bravo",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Blue",
      borderColor: "blue",
      borderWidth: 1,
      data: [150, 250, 235, 360, 180, 310]
    },
    {
      label: "Route 66:Charlie",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Green",
      borderColor: "Green",
      borderWidth: 1,
      data: [350, 250, 255, 260, 280, 210]
    },
    {
      label: "Hanamura:Delta",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "cyan",
      borderColor: "cyan",
      borderWidth: 1,
      data: [150, 120, 155, 160, 180, 110]
    },
    {
      label: "Hanamura:Echo",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "magenta",
      borderColor: "magenta",
      borderWidth: 1,
      data: [240, 260, 265, 268, 273, 266]
    },
    {
      label: "Hanamura:Foxtrot",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "orange",
      borderColor: "orange",
      borderWidth: 1,
      data: [280, 320, 330, 332, 346, 332]
    },
    {
      label: "Hanamura:Golf",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "indigo",
      borderColor: "indigo",
      borderWidth: 1,
      data: [310, 340, 366, 356, 356, 328]
    },
    {
      label: "Nubani:Hotel",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "coral",
      borderColor: "coral",
      borderWidth: 1,
      data: [110, 120, 113, 132, 116, 139]
    },
    {
      label: "Mansfield:Lima",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "olive",
      borderColor: "olive",
      borderWidth: 1,
      data: [480, 420, 430, 432, 446, 432]
    },
    {
      label: "Mansfield:November",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "teal",
      borderColor: "teal",
      borderWidth: 1,
      data: [354, 306, 315, 318, 326, 327]
    }
  ]
};
// end oil production data
// site oil production data
var oilSiteProductionData = {
  labels: ["7/14", "7/15", "7/16", "7/18", "7/19", "7/20"],
  datasets: [
    {
      label: "Route 66",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "crimson",
      borderColor: "crimson",
      borderWidth: 1,
      data: [750, 800, 615, 800, 660, 780]
    },
    {
      label: "Hanamura",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "cyan",
      borderColor: "cyan",
      borderWidth: 1,
      data: [980, 1040, 1116, 1116, 1155, 1036]
    },

    {
      label: "Nubani",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "coral",
      borderColor: "coral",
      borderWidth: 1,
      data: [110, 120, 113, 132, 116, 139]
    },
    {
      label: "Mansfield",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "olive",
      borderColor: "olive",
      borderWidth: 1,
      data: [834, 726, 745, 750, 772, 759]
    }
  ]
};
// end site oil production data
// gas production data
var gasProductionData = {
  labels: ["7/14", "7/15", "7/16", "7/18", "7/19", "7/20"],
  datasets: [
    {
      label: "Hunamura:Delta",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "crimson",
      borderColor: "crimson",
      borderWidth: 1,
      data: [50, 40, 45, 55, 42, 38]
    },
    {
      label: "Hunamura:Foxtrot",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Blue",
      borderColor: "blue",
      borderWidth: 1,
      data: [15, 25, 23, 36, 18, 31]
    },
    {
      label: "Nubani:Hotel",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Green",
      borderColor: "Green",
      borderWidth: 1,
      data: [35, 25, 25, 26, 28, 21]
    },
    {
      label: "Nubani:India",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "cyan",
      borderColor: "cyan",
      borderWidth: 1,
      data: [15, 12, 15, 16, 18, 11]
    },
    {
      label: "Mansfield:Juliet",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "magenta",
      borderColor: "magenta",
      borderWidth: 1,
      data: [24, 26, 26, 26, 27, 26]
    },
    {
      label: "Mansfield:Kilo",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "orange",
      borderColor: "orange",
      borderWidth: 1,
      data: [28, 32, 33, 33, 34, 32]
    },
    {
      label: "Mansfield:Mike",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "indigo",
      borderColor: "indigo",
      borderWidth: 1,
      data: [31, 34, 36, 35, 35, 32]
    },
    {
      label: "Austin:Oscar",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "coral",
      borderColor: "coral",
      borderWidth: 1,
      data: [11, 12, 11, 13, 11, 13]
    },
    {
      label: "Austin:Papa",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "olive",
      borderColor: "olive",
      borderWidth: 1,
      data: [48, 42, 43, 43, 44, 43]
    }
  ]
};
// end gas production data
// gas site production data
var gasSiteProductionData = {
  labels: ["7/14", "7/15", "7/16", "7/18", "7/19", "7/20"],
  datasets: [
    {
      label: "Hunamura",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "crimson",
      borderColor: "crimson",
      borderWidth: 1,
      data: [65, 65, 68, 91, 60, 69]
    },
    {
      label: "Nubani",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Green",
      borderColor: "Green",
      borderWidth: 1,
      data: [50, 37, 40, 42, 46, 32]
    },
    {
      label: "Mansfield",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "magenta",
      borderColor: "magenta",
      borderWidth: 1,
      data: [83, 92, 95, 94, 96, 90]
    },
    {
      label: "Austin",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "coral",
      borderColor: "coral",
      borderWidth: 1,
      data: [59, 54, 54, 56, 55, 53]
    }
  ]
};
// end gas site production data
// route66- alpha data
var route66AlphaReserves = [10000];
var route66BravoReserves = [12000];
var route66CharlieReserves = [12000];
var route66Alpha = [250, 300, 125, 180, 200, 180];
var route66Bravo = [150, 250, 235, 360, 180, 310];
var route66Charlie = [350, 250, 255, 260, 280, 210];
//record to DOM table route66 alpha forecast
recordForecast(
  "well-1-name",
  "well-1-res",
  "well-1-prod-rate",
  "well-1-dry-date",
  "Route66:Alpha",
  route66AlphaReserves,
  route66Alpha
);

//record to table route66 bravo forecast
recordForecast(
  "well-2-name",
  "well-2-res",
  "well-2-prod-rate",
  "well-2-dry-date",
  "Route66:Bravo",
  route66BravoReserves,
  route66Bravo
);

//record to table route66 bravo forecast
recordForecast(
  "well-3-name",
  "well-3-res",
  "well-3-prod-rate",
  "well-3-dry-date",
  "Route66:Charlie",
  route66CharlieReserves,
  route66Charlie
);

// function to add data to DOM
function recordForecast(id1, id2, id3, id4, well, reserve, weeklyRate) {
  document.getElementById(id1).innerHTML = well;
  document.getElementById(id2).innerHTML = reserve;
  document.getElementById(id3).innerHTML = productionRate(weeklyRate);
  document.getElementById(id4).innerHTML = forcast(reserve, weeklyRate);
}

// function to total daily production data
function productionRate(prodRate) {
  var total = prodRate.reduce(function(sum, element) {
    sum += element;
    return sum;
  }, 0);
  return total;
}
// function to forcast well dry date
function forcast(reserve, weeklyRate) {
  var weeklyFactor = weeklyRate.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
  totalWeeks = Math.floor(reserve[0] / weeklyFactor);
  var dryDays = totalWeeks * weeklyRate.length;
  dryDate = wellDryDate(dryDays);
  return dryDate;
}
// function to convert date format to mm/dd/yyyy
function wellDryDate(dryDays) {
  var today = new Date();
  var newdate = new Date();
  newdate.setDate(today.getDate() + dryDays);
  var dateString =
    newdate.getMonth() +
    1 +
    "/" +
    newdate.getDate() +
    "/" +
    newdate.getFullYear() +
    " ";
  return dateString;
}
//  chart.js section start
let mychart = document.getElementById("myChartOil").getContext("2d");

let oilReserves = new Chart(myChartOil, {
  type: "bar",
  data: oilReserveData,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Barrels",
            fontSize: 20
          }
        }
      ]
    }
  }
});

let gasReserves = new Chart(myChartGas, {
  type: "bar",
  data: gasReserveData,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Cubic Feet",
            fontSize: 20
          }
        }
      ]
    }
  }
});

let oilProduction = new Chart(myChartWellOilProd, {
  type: "line",
  data: oilProductionData,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Barrels",
            fontSize: 20
          }
        }
      ]
    }
  }
});

let oilSiteProduction = new Chart(myChartSiteOilProd, {
  type: "line",
  data: oilSiteProductionData,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Barrels",
            fontSize: 20
          }
        }
      ]
    }
  }
});

let gasProduction = new Chart(myChartWellGasProd, {
  type: "line",
  data: gasProductionData,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Cubic Feet",
            fontSize: 20
          }
        }
      ]
    }
  }
});

let gasSiteProduction = new Chart(myChartSiteGasProd, {
  type: "line",
  data: gasSiteProductionData,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Cubic Feet",
            fontSize: 20
          }
        }
      ]
    }
  }
});
