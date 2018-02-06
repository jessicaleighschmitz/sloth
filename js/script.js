$(function() {
  $(".clickable").click(function() {
    $(".hide-koala").fadeToggle(2000, "linear");
    $(".show-koala").fadeToggle(4000, "swing");

  });
});
