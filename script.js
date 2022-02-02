$(".opener").click(function () {
  $(".opener").hide();
  $(".gamburger").slideDown();
});
$(".closer").click(function () {
  $(".opener").show();
  $(".gamburger").slideUp();
});
