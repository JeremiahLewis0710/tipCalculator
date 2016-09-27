$(function () {
  $("#Calculate").click(function () {
    var bill = $("#Bill").val();
    var percentage = $("#Quality").find(":selected").val();
    var people = $("#Split").val();
    var total = bill * percentage / people
    console.log(total.toFixed(2));
    var div = $("<div></div>");
    div.append(total.toFixed(2))
    $(".returntip").append(div);
    return false;

  });



});




