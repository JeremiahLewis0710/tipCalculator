$(function () {

  $("#Calculate").click(function () {
    var bill = $("#Bill").val();
    var percentage = $("#Quality").find(":selected").val();
    var people = $("#Split").val();
    var tip = (Math.round((bill * percentage / people) * 100) / 100).toFixed(2);
    var total = (parseFloat(bill) + parseFloat(tip)).toFixed(2);
    console.log(total);

    var div = $("<div></div>");
    div.append("<h3> Your total bill with tip is: $" + total + "</h3>")
      .append("<h3>Your tip comes to: $" + tip + "</h3>")
      // .append("<button class = 'btn btn-default'id ='Reset' type ='reset'>Clear</button>");
    $(".returntip").append(div);

    if (bill == 0) {
      alert("Error Please Enter Valid Number")
      return null;
    }
    else if(bill.length >6){
      alert("Error Please Enter Valid Number"
      )
      return null;
    }
    else {
      return false;
    };


  });
  $("#Reset").click(function () {
    console.log("Function Activates");
    $(".returntip").remove();
    $("#Bill")==$("#Bill").val("");
  
  });


});





