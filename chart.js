const ctx = document.getElementById("chart");

const data = {
  labels: ["Jan","Feb","Mar","Apr","May"],
  datasets: [{
    label: "Fuel Price",
    data: [5.2,5.4,5.1,5.6,5.8],
  }]
};

new Chart(ctx, {
  type: "line",
  data: data
});