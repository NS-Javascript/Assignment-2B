
$(document).ready(function(){
    alert("into jQuery");
    //
    // $("#firstname").on("blur keypress", function (event) {  if($("#firstname").val()==""){
    //   $("#first_span").html("plz enter first name");
    //     }
    // });
$("#firstname").on("blur",funFirstname);
$("#lastname").on("blur",funLastname);
$("#phone").on("blur",funPhone);
$("#office").on("blur",funOffice);
$("#email").on("blur",funEmail);
});


//firstname
function funFirstname(){
  if($("#firstname").val()==""){
  $("#first_span").html("plz enter first name");
}
    else
      $("#first_span").html("");
  }

//lastname
function funLastname(){
  if($("#lastname").val()==""){
  $("#last_span").html("plz enter last_span name");
    }
    else {
        $("#last_span").html("");
    }
  }

//phone number
  function funPhone() {
      var b = $("#phone").val();
      var pat1 = /^\d{10,10}$/;
      if (!pat1.test(b)){
        $("#phone_span").html("plz enter 10 digit phone number");
      }
      else {
          $("#phone_span").html("");
      }
    }

//office number
  function funOffice() {
      var b = $("#office").val();
      var pat1 = /\d/;
      if (!pat1.test(b)){
        $("#office_span").html("only number alowed");
          }
          else {
              $("#office_span").html(" ");
          }
        }

//email number
   function funEmail() {
      var b = $("#email").val();
      var pat1 = /\w*\.?\w+@[a-zA-Z]+\.[a-z]{2,4}/;
      if (!pat1.test(b)){
        $("#email_span").html("enter valid email-id");
                  }
                  else {
                      $("#email_span").html("")
                  }
                }
