(function() {
    'use strict';
var rahul=[];

                var myJson = {
                    "country": [
                        {
                            "name": "United States",
                            "id": "usa",
                            "states": [
                                {
                                    "name": "State 1 USA",
                                    "id": "usaState1",
                                    "cities": [
                                        {
                                            "name": "City 1",
                                            "id": "usaState1City1",
                                            "area": "12345 sqkm"
                                        },
                                        {
                                            "name": "City 2",
                                            "id": "usaState1City2",
                                            "area": "12345 sqkm"
                                        }
                                    ]
                                },
                                {
                                    "name": "State 2 USA",
                                    "id": "usaState2",
                                    "cities": [
                                        {
                                            "name": "City 3",
                                            "id": "usaState2City3",
                                            "area": "12345 sqkm"
                                        },
                                        {
                                            "name": "City 4",
                                            "id": "usaState2City4",
                                            "area": "12345 sqkm"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Australia",
                            "id": "aus",
                            "states": [
                                {
                                    "name": "State 1 Australia",
                                    "id": "ausState1",
                                    "cities": [
                                        {
                                            "name": "City 5",
                                            "id": "ausState1City5",
                                            "area": "12345 sqkm"
                                        },
                                        {
                                            "name": "City 6",
                                            "id": "ausState1City6",
                                            "area": "12345 sqkm"
                                        }
                                    ]
                                },
                                {
                                    "name": "State 2 Australia",
                                    "id": "ausState2",
                                    "cities": [
                                        {
                                            "name": "City 7",
                                            "id": "ausState2City7",
                                            "area": "12345 sqkm"
                                        },
                                        {
                                            "name": "City 8",
                                            "id": "ausState2City8",
                                            "area": "12345 sqkm"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
  var rahul1 ;
    $(document).ready(function(event) {
     dyanmicyear();

        var validationOnIDs = [
            "firstname",
            "lastname",
            "phone",
            "office",
            "email",
            "password",
            "Confirm_password",
            "month",
            "day",
            "year",
            "age",
            "residence1",
            "residence2",
            "checkbox_sample18",
            "checkbox_sample19",
            "checkbox_sample20",
            "gender",
            "nextStep",
            "About_you",
            "country",
            "state",
            "city"
        ];




          //      console.log(_.values(myJson)["0"]["0"].name);
//console.log(_.values(myJson));
console.log(_.values(myJson) );
 var validatecountry = function(eventData) {
   console.log("dfajsh1454");
   console.log(eventData.currentTarget.value);
if(eventData.currentTarget.value=="Select Country")
   {
      console.log(eventData.currentTarget.parentElement.firstElementChild);

          $(eventData.currentTarget.parentElement.firstElementChild).append(" <span id='sCountry' style='color:red'>Please Fill the First name</span>");

        //  console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
          return false;

   }
else {
    $("#sCountry").remove();
   if($("#country").val() == "USA"){
     $("#state").append($('<option id="usa1"></option>').val(_.values(myJson)["0"]["0"].states["0"].name).html(_.values(myJson)["0"]["0"].states["0"].name));
      $("#state").append($('<option id="usa2"></option>').val(_.values(myJson)["0"]["0"].states["1"].name).html(_.values(myJson)["0"]["0"].states["1"].name));
      $("#city").append($('<option id="city1"></option>').val(_.values(myJson)["0"]["0"].states["0"].cities["0"].name).html(_.values(myJson)["0"]["0"].states["0"].cities["0"].name));
       $("#city").append($('<option id="city2"></option>').val(_.values(myJson)["0"]["0"].states["0"].cities["1"].name).html(_.values(myJson)["0"]["0"].states["0"].cities["1"].name));
       $("#city").append($('<option id="city3"></option>').val(_.values(myJson)["0"]["0"].states["1"].cities["0"].name).html(_.values(myJson)["0"]["0"].states["1"].cities["0"].name));
        $("#city").append($('<option id="city4"></option>').val(_.values(myJson)["0"]["0"].states["1"].cities["1"].name).html(_.values(myJson)["0"]["0"].states["1"].cities["1"].name));

   }
   else {
     $("#usa1").remove();
     $("#usa2").remove();
     $("#city1").remove();
     $("#city2").remove();
     $("#city3").remove();
     $("#city4").remove();

   }
   if($("#country").val() == "Australia"){
     $("#state").append($('<option id="aus1"></option>').val(_.values(myJson)["0"]["1"].states["0"].name).html(_.values(myJson)["0"]["1"].states["0"].name));
      $("#state").append($('<option id="aus2"></option>').val(_.values(myJson)["0"]["1"].states["1"].name).html(_.values(myJson)["0"]["1"].states["1"].name));
      $("#city").append($('<option id="city5"></option>').val(_.values(myJson)["0"]["1"].states["0"].cities["0"].name).html(_.values(myJson)["0"]["1"].states["0"].cities["0"].name));
       $("#city").append($('<option id="city6"></option>').val(_.values(myJson)["0"]["1"].states["0"].cities["1"].name).html(_.values(myJson)["0"]["1"].states["0"].cities["1"].name));
       $("#city").append($('<option id="city7"></option>').val(_.values(myJson)["0"]["1"].states["1"].cities["0"].name).html(_.values(myJson)["0"]["1"].states["1"].cities["0"].name));
        $("#city").append($('<option id="city8"></option>').val(_.values(myJson)["0"]["1"].states["1"].cities["1"].name).html(_.values(myJson)["0"]["1"].states["1"].cities["1"].name));


}
else {
  $("#aus1").remove();
  $("#aus2").remove();
  $("#city5").remove();
  $("#city6").remove();
  $("#city7").remove();
  $("#city8").remove();

}
}
console.log(_.values(myJson)["0"]["0"].name );
  /*  $("#country").append($('<option></option>').val(_.values(myJson)["0"]["0"].name).html(_.values(myJson)["0"]["0"].name));

$('#country').change(function () {
    alert($(this).val());
    //Code to select image based on selected car id
});*/
};

var validatestate = function(eventData) {
  console.log("dfajsh1454");
  console.log(eventData.currentTarget.value);
if(eventData.currentTarget.value=="Select State")
  {
     console.log(eventData.currentTarget.parentElement.firstElementChild);

         $(eventData.currentTarget.parentElement.firstElementChild).append(" <span id='sState' style='color:red'>Please Fill the First name</span>");

       //  console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
         return false;

  }
else {
   $("#sState").remove();
  if($("#state").val() == "State 1 USA"){

     $("#city").append($('<option id="city1"></option>').val(_.values(myJson)["0"]["0"].states["0"].cities["0"].name).html(_.values(myJson)["0"]["0"].states["0"].cities["0"].name));
      $("#city").append($('<option id="city2"></option>').val(_.values(myJson)["0"]["0"].states["0"].cities["1"].name).html(_.values(myJson)["0"]["0"].states["0"].cities["1"].name));
  }
  else {

    $("#city1").remove();
    $("#city2").remove();

  }
  if($("#state").val() == "State 2 USA"){

         $("#city").append($('<option id="city3"></option>').val(_.values(myJson)["0"]["0"].states["1"].cities["0"].name).html(_.values(myJson)["0"]["0"].states["1"].cities["0"].name));
          $("#city").append($('<option id="city4"></option>').val(_.values(myJson)["0"]["0"].states["1"].cities["1"].name).html(_.values(myJson)["0"]["0"].states["1"].cities["1"].name));

}
else {
  $("#city3").remove();
 $("#city4").remove();

}

/*
$("#state").append($('<option id="aus1"></option>').val(_.values(myJson)["0"]["1"].states["0"].name).html(_.values(myJson)["0"]["1"].states["0"].name));
 $("#state").append($('<option id="aus2"></option>').val(_.values(myJson)["0"]["1"].states["1"].name).html(_.values(myJson)["0"]["1"].states["1"].name));
 $("#city").append($('<option id="city5"></option>').val(_.values(myJson)["0"]["1"].states["0"].cities["0"].name).html(_.values(myJson)["0"]["1"].states["0"].cities["0"].name));
  $("#city").append($('<option id="city6"></option>').val(_.values(myJson)["0"]["1"].states["0"].cities["1"].name).html(_.values(myJson)["0"]["1"].states["0"].cities["1"].name));
  $("#city").append($('<option id="city7"></option>').val(_.values(myJson)["0"]["1"].states["1"].cities["0"].name).html(_.values(myJson)["0"]["1"].states["1"].cities["0"].name));
   $("#city").append($('<option id="city8"></option>').val(_.values(myJson)["0"]["1"].states["1"].cities["1"].name).html(_.values(myJson)["0"]["1"].states["1"].cities["1"].name));
   $("#aus1").remove();
   $("#aus2").remove();
   $("#city5").remove();
   $("#city6").remove();
   $("#city7").remove();
   $("#city8").remove();*/
}
console.log(_.values(myJson)["0"]["0"].name );
 /*  $("#country").append($('<option></option>').val(_.values(myJson)["0"]["0"].name).html(_.values(myJson)["0"]["0"].name));

$('#country').change(function () {
   alert($(this).val());
   //Code to select image based on selected car id
});*/
};

        function dyanmicyear() {
            var myDate = new Date();
            console.log(myDate);
            var year = myDate.getFullYear();
            for (var i = 1980; i < year + 1; i++) {
                var opt = $("<option>");
              opt.html(i);
                var elementy = $("#year");
                elementy.append(opt);
            }

        }


        var validateFirstName = function(eventData) {
            //  console.log(eventData);

            if (eventData.delegateTarget.value == "" || eventData.delegateTarget.value == null) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s1' style='color:red'>Please Fill the First name</span>");

                  //  console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return false;
                }
                  return false;

            } else {
                {
                    $("#s1").remove();

                  //  console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return true;

                }
            }

        };

        var validateLastName = function(eventData) {

            if (eventData.delegateTarget.value == "" || eventData.delegateTarget.value == null) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s2' style='color:red'>Please Fill the Last name</span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return false;
                }
                return false;

            } else {
                {
                    $("#s2").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return true;

                }
            }
        };

        var validatePhoneNo = function(eventData) {
            var pattern = /^\d{10}$/;
            if (!pattern.test(eventData.delegateTarget.value)) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s3' style='color:red'>*phone can only 10 digit number </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return false;
                }
                return false;

            } else {
                {
                    $("#s3").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return true;

                }
            }
        };

        var validateOfficeNo = function(eventData) {
            var pattern = /^\d{6,8}$/;
            if (!pattern.test(eventData.delegateTarget.value)) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s4' style='color:red'>*Office can min 6 digit & max 8 number </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return false;
                }
                return false;

            } else {
                {
                    $("#s4").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return true;

                }
            }
        };

        var validateEmail = function(eventData) {
            var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
            if (!pattern.test(eventData.delegateTarget.value)) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s5' style='color:red'>*please fill valid email </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return false;
                }
                return false;

            } else {
                {
                    $("#s5").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return true;

                }
            }
        };
var b;
        var validatePass = function(eventData) {
          b=eventData.delegateTarget.value;
            var pattern = /^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])){6,16}/;
            if (!pattern.test(eventData.delegateTarget.value)) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s6' style='color:red'>*Use 8 characters with min 1 lower 1 upper case & digit! </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return false;
                }
                return false;

            } else {
                {
                    $("#s6").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return true;

                }
            }
        };

        var validateConfirm_password = function(eventData) {
//var a=$("password").val();
            if (eventData.delegateTarget.value !=b) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s7' style='color:red'>*password is not matched </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    console.log(eventData.delegateTarget.value);
                    console.log(b);
                    return false;
                }
                return false;

            } else {
                {
                    $("#s7").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return true;

                }
            }
        };

    /*    function daycalculator() {
          //  var monthcal = document.getElementById("month").value;
        //    var yearcal = document.getElementById("year").value;
        var monthcal=month;
        console.log(month);
            if (monthcal == "jan" || monthcal == "march" || monthcal == "5" || monthcal == "7" ||
                monthcal == "8" || monthcal == "10" || monthcal == "12") {
                document.getElementById("31").style.visibility = "visible";
                document.getElementById("29").style.visibility = "visible";
                document.getElementById("30").style.visibility = "visible";
                console.log("true");
                return true;
            } else if (monthcal == "2") {
                year();
                if (yearcal % 400 == 0 || yearcal % 4 == 0) {
                    document.getElementById("30").style.visibility = "hidden";
                    document.getElementById("31").style.visibility = "hidden";
                    return true;
                    console.log("leap");
                } else {
                    document.getElementById("30").style.visibility = "hidden";
                    document.getElementById("31").style.visibility = "hidden";
                    document.getElementById("29").style.visibility = "hidden";
                }
                console.log("false");

            } else {
                document.getElementById("31").style.visibility = "hidden";
                document.getElementById("29").style.visibility = "visible";
                document.getElementById("30").style.visibility = "visible";
                console.log("else");
            }
        }*/
        var validateAbout_you = function(eventData) {

            if (eventData.delegateTarget.value == "" || eventData.delegateTarget.value == null) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s8' style='color:red'>Please Fill the About_you</span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return false;
                }
                return false;

            } else {
                {
                    $("#s8").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                    return true;

                }
            }
        };


            /*    var validateResidence1 = function(eventData) {
                  console.log(eventData.currentTarget.parentElement.nextElementSibling.children.residence2.checked);
console.log(eventData.delegateTarget.value);
console.log(eventData.currentTarget.parentElement.offsetParent.childNodes[1]);
                  //  if (eventData.delegateTarget.value == "off" )
                  if (eventData.delegateTarget.value == "off" || eventData.currentTarget.parentElement.nextElementSibling.children.residence2.checked == true ) {
                        if ($(eventData.currentTarget.parentElement.offsetParent.childNodes[1]).context.childElementCount == 0) {
                            $(eventData.currentTarget.parentElement.offsetParent.childNodes[1]).append(" <span id='s9' style='color:red'>Please Fill the About_you</span>");

                            console.log($(eventData.currentTarget.parentElement.offsetParent.childNodes[1]).context.childElementCount);
                            return false;
                        }
                        return false;

                    } else {

                        {
                            $("#s9").remove();

                          //  console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                            return true;

                        }
                    }
                };

*/
var male;
var female;
 var validateResidence1 = function(eventData) {
console.log("in gender");
console.log($("#residence1")["0"].checked);
male=$("#residence1")["0"].checked;
console.log(male);
//console.log(female);
if (male==false) {
  console.log(  $($($("#residence1")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling);
$($($($("#residence1")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling).append(" <span id='sGender' style='color:red'>Please Fill the About_you</span>");

//  console.log($(eventData.delegateTarget.parentElement.parentElement.previousSibling).context.childElementCount);
  return false;


} else {
{
 $("#sGender").remove();

//  console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
  return true;

}
}


 };


 var validateResidence2 = function(eventData) {
   console.log($("#residence2")["0"].checked);
   female=$("#residence2")["0"].checked;
   console.log(male);
   //console.log(female);
   if (female==false) {
     console.log(  $($($("#residence2")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling);
$($($($("#residence2")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling).append(" <span id='sGender' style='color:red'>Please Fill the About_you</span>");

   //  console.log($(eventData.delegateTarget.parentElement.parentElement.previousSibling).context.childElementCount);
     return false;


   } else {
   {
     $("#sGender").remove();

   //  console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
     return true;

   }
   }
 };


 function Dob() {
     if (validateMonth()==false || validateDay()==false || validateYear()==false) {
 console.log($("#bdname")["0"].childElementCount);
       if ($("#bdname")["0"].childElementCount == 0) {
           $("#bdname").append(" <span id='sdob' style='color:red'>*Please select Dob ! </span>");


           return false;
       }
       return false;

       } else {

           $("#sdob").remove();

             Agecal();
           return true;

       }
     };



     /*
     function Intrest() {
         var bike = document.getElementById('checkbox_sample18').checked;
         // alert(bike);
         var read = document.getElementById('checkbox_sample19').checked;
         var play = document.getElementById('checkbox_sample20').checked;
         if (bike || read || play) {
             document.getElementById("Interestname").innerHTML = "";
             return true;


         } else {
             document.getElementById("Interestname").innerHTML = ("*please select intrest");
             return false;

         }


     }
     */
     var validateIntrest=function(eventData) {
       if($("#checkbox_sample18")["0"].checked==false && $("#checkbox_sample19")["0"].checked==false && $("#checkbox_sample20")["0"].checked==false){
       if ( $($($($("#checkbox_sample18")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling)["0"].childElementCount == 0) {
     $($($($("#checkbox_sample18")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling).append(" <span id='sCheckbox' style='color:red'>Please Fill the About_you</span>");
     return false;
     }
     return false;
     }
     else {
    $("#sCheckbox").remove();
    return true;
     }

   };


function validateGender() {
  if($("#residence1")["0"].checked==false && $("#residence2")["0"].checked==false){
      if ( $($($($("#residence1")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling)["0"].childElementCount == 0) {
   $($($($("#residence1")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling).append(" <span id='sGender' style='color:red'>Please Fill the About_you</span>");
    return false;
  }
return false;
}
  else {
 $("#sGender").remove();
 return true;
  }

};
 var validateMonth = function(eventData) {
//console.log(eventData.delegateTarget.value);
var month=$("#month").val();
    if (month == "select" || month == "") {
      return false;
    }
    else{
      if (month == "jan" || month == "march" || month == "may" || month == "july" ||
          month == "aug" || month == "oct" || month == "dec") {


          $("#29").show();
            $("#30").show();
              $("#31").show();
          return true;
      }
      else if (month=="feb") {
        $("#29").hide();
          $("#30").hide();
            $("#31").hide();
        return true;

      }
      else {
        $("#29").show();
          $("#30").show();
            $("#31").hide();
        return true;
      }
    }
 };
var validateDay = function(eventData) {
  var day=$("#day").val();
  if(day=="select" || day==""){
    return false;
  }
  else {
    return true;
  }

};
 var validateYear = function(eventData) {
//console.log(eventData.delegateTarget.value);
var year=$("#year").val();
//console.log($("#month").val());
    if (year == "select" || year == "") {
      return false;
    }
    else{
      if($("#month").val()=="select" ){
        return false;
      }
      else   if($("#month").val()=="feb"){
        if (year%4==0||year%400==0) {
            $("#29").show();
              $("#30").hide();
                $("#31").hide();
            return true;
        }
        else {
          $("#29").hide();
            $("#30").hide();
              $("#31").hide();
          return true;
        }
      }
}
};

function Agecal() {
  console.log($("#month"));
    var by = $("#year").val();
    var bm =$("#month").context.nodeType-1;
    var date = new Date();
    var cy = date.getFullYear();
    //alert(cy);
    var cm = date.getMonth() + 1;
    //   alert(cm);
    var y = cy - by;
    var bmon = parseInt(bm) * 0.083;
    //   alert(bmon);
    var cmon = parseInt(cm) * 0.083;
    //     alert(cmon);
    var m = cmon - bmon;
    //   alert(m);
    var ag = y + m;
    //alert(ag);
  $("#age").val(ag);
    // var y = (cy + (cm / 12)) - (by + (bm / 12));
    //   alert(y);

}


var validateStep2=function(eventData) {

  $("#firstname").trigger("blur");
  $("#lastname").trigger("blur");
    $("#office").trigger("blur");
      $("#email").trigger("blur");
        $("#password").trigger("blur");
          $("#Confirm_password").trigger("blur");
            $("#About_you").trigger("blur");
              $("#phone").trigger("blur");
                $("#month").trigger("click");
                  $("#day").trigger("click");
                    $("#year").trigger("click");

                            validateGender();
                              validateIntrest(eventData);

  if(($("#firstname").trigger("blur")["0"].value)=="" || ($("#lastname").trigger("blur")["0"].value)=="" || ($("#phone").trigger("blur")["0"].value)=="" || ($("#office").trigger("blur")["0"].value)==""){
    console.log("andyaaa");
  //  console.log($("#nextStep").attr("disabled"));
      console.log($("#nextStep").prop('onclick'));
//document.getElementById("step2").disabled = true;
    // $("#nextStep").disabled=true;
    $("#step2").attr({
           "href" : "#"
       });
        console.log($("#nextStep").prop('onclick'));
  //   $("#nextStep").attr({"disabled"});
  }
  else {
    console.log("patel");
  }
//if(  ($("#firstname").trigger("blur")["0"].value)
//  var abc=rahul1;
//  console.log(abc);
//  $("#lastname").trigger("blur");
//  var abc1=rahul1;
  //console.log(abc1);

    //alert("vaibhav");


}


  //console.log(eventData);
  /*if (validateFirstName() && validateLastName() && validatePhoneNo() && validateOfficeNo() && validateEmail() && validatePass() &&
      validateConfirm_password() && Dob()) {
      return true;*/








  /*      document.getElementById("bdname").innerHTML = "";
        month();
        year();
        Agecal();
        return true;
    } else {
        //  document.getElementById("Agename").innerHTML = ("Please select birthdate first");
        document.getElementById('age').value = "Please select birthdate first";
        return false;

    }

}*/



        var handleBlurEvent = function(eventSource, eventData) {
            switch (eventSource) {
                case "firstname":
                      validateFirstName(eventData);
                    break;
                case "lastname":
                    validateLastName(eventData);
                    break;
                case "phone":
                     validatePhoneNo(eventData);
                    break;
                case "office":
                     validateOfficeNo(eventData);
                    break;
                case "email":
                    validateEmail(eventData);
                    break;
                case "password":
                    validatePass(eventData);
                    break;
                case "Confirm_password":
                    validateConfirm_password(eventData);
                    break;
                    case "About_you":
                        validateAbout_you(eventData);
                        break;
                default:

            }
        };

        var handleClickEvent = function(eventSource, eventData) {
          switch (eventSource) {
          //  return true;




            case "month":
                validateMonth(eventData);
                Dob();

                break;
                case   "checkbox_sample18":
                  validateIntrest(eventData);
                  break;
                  case   "checkbox_sample19":
                    validateIntrest(eventData);
                    break;
                    case   "checkbox_sample20":
                      validateIntrest(eventData);
                      break;
                case "day":
                    validateDay(eventData);
                    Dob();

                    break;
                    case "year":
                        validateYear(eventData);
                        Dob();



                        break;
              case "residence1":
                  validateResidence1(eventData);
                  break;
                  case "residence2":
                      validateResidence2(eventData);
                      break;
                      case "nextStep":
                          validateStep2(eventData);
                          break;

                      default:
                }

        };


        var handleChangeEvent = function(eventSource, eventData) {
          switch (eventSource) {
            case "country":
                validatecountry(eventData);
                break;
               case "state":
                    validatestate(eventData);
                    break;
              /*      case "city":
                        validatecity(eventData);
                        break;
                  */


            default:
      }

};


        var hadleEvent = function(eventType, eventSource, eventData) {
            switch (eventType) {
                case "blur":
                return handleBlurEvent(eventSource, eventData);
                    break;
                case "click":
                  return handleClickEvent(eventSource, eventData);
                    break;
                    case "change":
                      return handleChangeEvent(eventSource, eventData);
                        break;
                default:

            }

        };

        for (var i = 0; i < validationOnIDs.length; i++) {
            $("#" + validationOnIDs[i]).on("blur click change", function(event) {
                var eventType = event.type;
                var eventSource = event.delegateTarget.id;
              var rahul1 = hadleEvent(eventType, eventSource, event);
              console.log(rahul1);
          //    console.log("dfdfgd");


            });
        }


    });
}());
