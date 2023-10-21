$(document).ready(function () {
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 10,
      max: 10000,
      values: [1600, 7000],
      slide: function (event, data) {
        $("#min").text(data.values[0]);
        $("#max").text(data.values[1]);
      },
    });
    $("#min").text("#slider-range".slider("values", 0));
    $("#max").text("#slider-range".slider("values", 1));
  });
});
