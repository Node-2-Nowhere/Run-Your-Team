/* globals Chart:false */

(() => {
  "use strict";

  // Graphs
  const ctx = document.getElementById("myChart");
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Night Owls",
        "Backups",
        "Early Birds",
        "Wild Bunch",
        "High Caliber",
        "Code Red",
        "Eagles",
        "Dragons",
      ],
      datasets: [
        {
          data: [10, 6, 5, 3, 8, 1, 7, 9],
          //lineTension: 0,
          backgroundColor: "#007bff",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          boxPadding: 3,
        },
      },
    },
  });
})();
