$("button")
  .eq(0)
  .click(function () {
    $(".box").removeClass("night").addClass("day");
  });

$("button")
  .eq(1)
  .click(function () {
    $(".box").removeClass("day").addClass("night");
  });
