var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["PHP", "JavaScript", "Python", "Ruby"],
    datasets: [{
        backgroundColor: [
            "#8892be",
            "#f7df1e",
            "#4584b6",
            "#cc342d",
        ],
        data: [80, 11, 7, 2]
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: '勉強した言語の割合'
    }
  }
});

setInterval(function () {
  $("#ex-pastArea").height($("#ex-pastArea").width()).css({
    borderRadius: "50%"
  });
}, 1);
