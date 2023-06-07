const ctx = document.getElementById("chart1");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Dark blue", "White", "light blue", "yellow", "dark gray"],
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
        text: "Blue colour pallete",
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
    labels: ["White", "Dark blue", "light blue", "dark gray", "yellow"],
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
        text: "White colour pallete",
        font: {
          size: 21,
          align: "left",
        },
      },
    },
  },
});
