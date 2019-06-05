$().ready(function(){

    var age = parseInt(prompt("How old are you?"));



      if (age > 21) {
      $('#drinks').show('#drinks, #under-21');
    } else if (age === 21) {
      alert("Now don't go crazy!");
      $('#drinks').show();
    }  else {
      $('#under-21').show();
    }
});

/*
  $("form#math").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  var dob = $("#born").val();

  var favoriteColor = $("#color");


*/
