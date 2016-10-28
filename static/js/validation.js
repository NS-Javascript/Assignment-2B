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

        $("#password").attr({
               "type" : "password"
           });
           $("#Confirm_password").attr({
                  "type" : "password"
              });
              $("#age").attr({
                     "disabled":true
                 });

 var validatecountry = function(eventData) {
        if(eventData.currentTarget.value=="Select Country")
        {
              if(eventData.currentTarget.parentElement.firstElementChild.childElementCount==0){
              $(eventData.currentTarget.parentElement.firstElementChild).append(" <span id='sCountry' style='color:red'>*Please Select Your Country</span>");
              return false;
        }
        return false;
        }
        else {
              $("#sCountry").remove();
              $("#usa1").remove();
              $("#usa2").remove();
              $("#city1").remove();
              $("#city2").remove();
              $("#city3").remove();
              $("#city4").remove();
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
};

var validatestate = function(eventData) {
if(eventData.currentTarget.value=="Select State")
  {
if(eventData.currentTarget.parentElement.firstElementChild.childElementCount==0){
         $(eventData.currentTarget.parentElement.firstElementChild).append(" <span id='sState' style='color:red'>*Please Select your State</span>");
          return false;
}
          return false;
  }
else {
          $("#sState").remove();
          $("#city1").remove();
          $("#city2").remove();
          $("#city3").remove();
          $("#city4").remove();
if($("#state").val() == "State 1 USA"){
          $("#city1").remove();
          $("#city2").remove();
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
if($("#state").val() == "State 1 Australia"){
  $("#city5").remove();
  $("#city6").remove();
  $("#city").append($('<option id="city5"></option>').val(_.values(myJson)["0"]["1"].states["0"].cities["0"].name).html(_.values(myJson)["0"]["1"].states["0"].cities["0"].name));
   $("#city").append($('<option id="city6"></option>').val(_.values(myJson)["0"]["1"].states["0"].cities["1"].name).html(_.values(myJson)["0"]["1"].states["0"].cities["1"].name));
}
else {

  $("#city5").remove();
  $("#city6").remove();

}
if($("#state").val() == "State 2 Australia"){

  $("#city").append($('<option id="city7"></option>').val(_.values(myJson)["0"]["1"].states["1"].cities["0"].name).html(_.values(myJson)["0"]["1"].states["1"].cities["0"].name));
   $("#city").append($('<option id="city8"></option>').val(_.values(myJson)["0"]["1"].states["1"].cities["1"].name).html(_.values(myJson)["0"]["1"].states["1"].cities["1"].name));

}
else {
$("#city7").remove();
$("#city8").remove();

}

}

};
/*************************************Function of creating City **************************************/
var validatecity = function(eventData) {
console.log(eventData.currentTarget.value);
if(eventData.currentTarget.value=="Select City")
  {
        if(eventData.currentTarget.parentElement.firstElementChild.childElementCount==0){
                $(eventData.currentTarget.parentElement.firstElementChild).append(" <span id='sCity' style='color:red'>*Please Select your City</span>");
                return false;
        }
                return false;
  }
        else {
                $("#sCity").remove();
}
};

/*************************************Function of creating Dynamic Year**************************************/
        function dyanmicyear()
         {
              var myDate = new Date();
              var year = myDate.getFullYear();
              for (var i = 1980; i < year + 1; i++) {
                    var opt = $("<option>");
                    opt.html(i);
                    var elementy = $("#year");
                    elementy.append(opt);
            }
        }

/*************************************Function of validating compulsury field**************************************/
        var validateCompulsery = function(eventData,msg) {

            if (eventData.delegateTarget.value == "" || eventData.delegateTarget.value == null) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='sCompulsury' style='color:red'>*"+msg+" is Compulsury</span>");

                }

            } else
                {
                    $("#sCompulsury").remove();

                }
        };


/*************************************Function of validating pattern field**************************************/
        var validatePattern = function(eventData,pattern,msg)
        {
              if (!pattern.test(eventData.delegateTarget.value))
              {
                    if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0)
                    {
                            $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='spattern' style='color:red'>"+msg+"</span>");
                    }
            }
            else
                {
                    $("#spattern").remove();
                }
        };

/*************************************Function of validating Confirm password**************************************/
        var validateConfirm_password = function(eventData)
        {
            if (eventData.delegateTarget.value !=$("#password").val()) {
            if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s7' style='color:red'>*password is not matched </span>");
                }
            }
            else
                {
                    $("#s7").remove();
                }
        };

/*************************************Function of validating Birthday**************************************/
 function Dob() {
            if (validateMonth()==false || validateDay()==false || validateYear()==false) {
            if ($("#bdname")["0"].childElementCount == 0) {
                        $("#bdname").append(" <span id='sdob' style='color:red'>*Please select Dob ! </span>");
                        return false;
              }
                        return false;
       } else
       {
                        $("#sdob").remove();
                        Agecal();
                        return true;
       }
     };

/*************************************Function of validating Intrest**************************************/
   var validateIntrest=function(eventData) {
       if($("#checkbox_sample18")["0"].checked==false && $("#checkbox_sample19")["0"].checked==false &&
          $("#checkbox_sample20")["0"].checked==false)
          {
              if ( $($($($("#checkbox_sample18")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling)["0"].childElementCount == 0)
              {
                    $($($($("#checkbox_sample18")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling).append(" <span id='sCheckbox' style='color:red'>*Please Share your Intrest</span>");
                    return false;
              }
              return false;
          }
          else {
                  $("#sCheckbox").remove();
                  return true;
              }
   };


/*************************************Function of validating Gender**************************************/
function validateGender() {
  if($("#residence1")["0"].checked==false && $("#residence2")["0"].checked==false)
  {
        if ( $($($($("#residence1")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling)["0"].childElementCount == 0)
        {
            $($($($("#residence1")["0"].parentElement)["0"].parentElement)["0"].previousElementSibling).append(" <span id='sGender' style='color:red'>*Please choose your Gender </span>");
        }
}
  else {
            $("#sGender").remove();
        }
};


/*************************************Function of validating month ******************************************/
 var validateMonth = function(eventData) {
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

 /*************************************Function of validating day  **************************************/
var validateDay = function(eventData) {
  var day=$("#day").val();
  if(day=="select" || day==""){
    return false;
  }
  else {
    return true;
  }

};
/*************************************Function of VALIDATING Year  **************************************/
 var validateYear = function(eventData)
 {
        var year=$("#year").val();
        if (year == "select" || year == "")
         {
                return false;
          }
          else{
                    if($("#month").val()=="select" )
                    {
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

/*************************************Function of calculating ageYear  **************************************/
function Agecal() {
    var bdayYear = $("#year").val();
    var bdayMonth =$("#month").context.nodeType-1;
    var Todate = new Date();
    var currentYear = Todate.getFullYear();
    var currentMonth = Todate.getMonth() + 1;
    var ageYear = currentYear - bdayYear;
    var bdaymon = parseInt(bdayMonth) * 0.083;
    var currentmon = parseInt(currentMonth) * 0.083;
    var ageMonth = currentmon - bdaymon;
    var age = ageYear + ageMonth;
  $("#age").val(age);
}

/*************************************FINAL ON SUBMIT VALIADATION**************************************/
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

  if(($("#firstname").trigger("blur")["0"].value)=="" || ($("#lastname").trigger("blur")["0"].value)=="" ||
  ($("#phone").trigger("blur")["0"].value)=="" || ($("#office").trigger("blur")["0"].value)=="" || ($("#email").trigger("blur")["0"].value)=="" ||
 ($("#password").trigger("blur")["0"].value)=="" || ($("#Confirm_password").trigger("blur")["0"].value)=="" ||
 ($("#About_you").trigger("blur")["0"].value)=="" || !validateGender() || !validateIntrest(eventData) || !Dob())

  {
        $("#step2").attr({  "href" : "#"  });
  }
  else
   {
    $("#step2").attr({   "href" : "partners_preference_form.html"     });
  }
}


        var handleBlurEvent = function(eventSource, eventData) {
            switch (eventSource) {
                case "firstname":
                      validateCompulsery(eventData,"firstname");
                    break;
                case "lastname":
                      validateCompulsery(eventData,"lastname");
                    break;
                case "phone":
                     validatePattern(eventData,/^\d{10}$/,"*phone can only 10 digit number !");
                    break;
                case "office":
                       validatePattern(eventData,  /^\d{6,8}$/,"*Office can min 6 digit & max 8 number");
                    break;
                case "email":
                     validatePattern(eventData,/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,"  *please fill valid email  !");
                    break;
                case "password":
                     validatePattern(eventData,/^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])){3,16}/,"*Use min 3 characters with 1 lower 1 upper case & digit");
                    break;
                case "Confirm_password":
                    validateConfirm_password(eventData,"Confirm_password");
                    break;
                    case "About_you":
                        validateCompulsery(eventData,"About_you");
                        break;

                default:
            }
        };

        var handleClickEvent = function(eventSource, eventData) {
          switch (eventSource) {
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
                validateGender();
                break;
            case "residence2":
                validateGender();
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
             case "city":
                validatecity(eventData);
                break;
            default:
      }
};


        var hadleEvent = function(eventType, eventSource, eventData) {
            switch (eventType) {
                case "blur":
                    handleBlurEvent(eventSource, eventData);
                    break;
                case "click":
                    handleClickEvent(eventSource, eventData);
                    break;
                case "change":
                    handleChangeEvent(eventSource, eventData);
                    break;
                default:

            }
        };

        for (var i = 0; i < validationOnIDs.length; i++) {
            $("#" + validationOnIDs[i]).on("blur click change", function(event) {
                var eventType = event.type;
                var eventSource = event.delegateTarget.id;
               hadleEvent(eventType, eventSource, event);
            });
        }
    });
}());
