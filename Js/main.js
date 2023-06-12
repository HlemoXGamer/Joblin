const ctx = document.getElementById("chart1");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Dark blue 60%", "White 20%", "light blue 10%", "yellow 7%", "dark gray 3%"],
    datasets: [
      {
        label: "# of Votes",
        data: [60, 20, 10, 7, 3],
        backgroundColor: [
          "#043873",
          "#ffffff",
          "#4f9cf9",
          "#ffe492",
          "#212529",
        ],
      },
    ],
  },
  options: {
    layout: {},
    plugins: {
      title: {
        display: true,
        text: "Blue colour palette",
        font: {
          size: 21,
          align: "left",
        },
      },
    },
  },
});
const ctx2 = document.getElementById("chart2");
const myChart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["White 60%", "Dark 20%", "light blue 10%", "dark gray 7%", "yellow 3%"],
    datasets: [
      {
        label: "# of Votes",
        data: [60, 20, 10, 7, 3],
        backgroundColor: [
          "#ffffff",
          "#043873",
          "#4f9cf9",
          "#212529",
          "#ffe492",
        ],
      },
    ],
  },
  options: {
    layout: {},
    plugins: {
      title: {
        display: true,
        text: "White colour palette",
        font: {
          size: 21,
          align: "left",
        },
      },
    },
  },
});
