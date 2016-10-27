  var ferror=[];


// $(document).ready(function () {
//   var a=[]
//   $.getJSON("country.json",function (data) {
//     console.log(data);
//     console.log(_.pick(data,"name"));
//     var dd=_.object(data)
//     console.log(data.country);
//     console.log(data.country["0"].id);
//     console.log(data.country["0"].name);
//     console.log(dd);
//   })
// });
(function() {
  'use strict';

  $(document).ready(function (event) {
var cc=[];

    var validationOnIDs = [
      "firstname",
      "lastname",
      "phone",
      "office",
      "email",
      "password",
      "cpassword",
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
      "country1"
    ];

/*##########################################################################################
 *Blur Methods
###########################################################################################/*
/*validation First Name Blur------------------------------------------------------ */

    var validateFirstName = function (eventData) {
      //console.log(eventData);
      //console.log(eventData.type);
    var eventTag=eventData.delegateTarget;
    var length=eventTag.value.length;
        if(length==0) {
          if(eventData.currentTarget.parentElement.childElementCount==2){
              $(eventData.delegateTarget).after
              ('<span class="error-message" id="ediv1" style="display : table-row-group">Please Fill First Name</span>');
ferror.push("false");
            }}
          else {
              $("#ediv1").remove();
    ferror.push("true");
            }
        }


/*validation Last Name Blur-------------------------------------------------------- */
  /*Last Name Empty-------------------------------------------------------- */
      var validateLastName = function (eventData) {
      var eventTag=eventData.delegateTarget;
      var length=eventTag.value.length;
          if(length==0) {
            if(eventData.currentTarget.parentElement.childElementCount==2){
            $(eventData.delegateTarget).after
            ('<span class="error-message" id="ediv2" style="display : table-row-group">Please Fill Last Name</span>');
            //  return false;
ferror.push("false");
          }}
        else {
        $("#ediv2").remove();
      ferror.push("true");
        }
      }


/*validation Phone Blur ------------------------------------------------------------*/
  /*Phone Empty + Pattern--------------------------------------------------- */
    var validatePhone = function (eventData) {
    var eventTag=eventData.delegateTarget;
    var length=eventTag.value.length;

      if (length==0 || (!eventTag.value.match(/^([0-9]){10,10}$/)) ) {
          if(eventData.currentTarget.parentElement.childElementCount==2) {
              $(eventData.delegateTarget).after
                ('<span class="phone-error-span"  style="display : table-row-group">Please Fill Valid 10 Digit Phone Number</span>');
              return ferror= false;
          }
      }
      else {
            $(".phone-error-span").remove();

          }
      };

/*validation Office No Blur ------------------------------------------------------*/
    /*Office Empty + Pattern--------------------------------------------------- */
      var validateOffice = function (eventData) {
      var eventTag=eventData.delegateTarget;
      var length=eventTag.value.length;

        if (length==0 || (!eventTag.value.match(/^([0-9]){8,8}$/)) ) {
            if(eventData.currentTarget.parentElement.childElementCount==2) {
              $(eventData.delegateTarget).after
              ('<span class="office-error-span"  style="display : table-row-group">Please Fill Valid 8 Digit Office Number</span>');
              return ferror= false;
              }
          }
          else {
                  $(".office-error-span").remove();
                }
      };

/*validation Password Blur ------------------------------------------------------*/
    /*Password Pattern--------------------------------------------------- */
      var validatePass = function (eventData) {
      var eventTag=eventData.delegateTarget;
      var length=eventTag.value.length;

        if (length==0 || (!eventTag.value.match(/^([0-9]){4,4}$/)) ) {
          if(eventData.currentTarget.parentElement.childElementCount==2) {
              $(eventData.delegateTarget).after
              ('<span class="pass-error-span"  style="display : table-row-group">Please Fill Valid 4 Digit Password</span>');

            }
        }
          else {
                $(".pass-error-span").remove();

              }
    };

/*validation Confirm Password Blur ------------------------------------------------------*/
    /*Confirm Password Pattern + Password and Confirm Password Match------------------ */
      var validateConPass = function (eventData) {
      var eventTag=eventData.delegateTarget;
      var tagValue=eventTag.value;
      var length=tagValue.length;
      var pass=$("#password").val()

        if (length==0 || (!eventTag.value.match(/^([0-9]){4,4}$/)) ||  tagValue!==pass) {
          if(eventData.currentTarget.parentElement.childElementCount==2) {
              $(eventData.delegateTarget).after
              ('<span class="cpass-error-span"  style="display : table-row-group">Please Fill Valid Same 4 Digit Password</span>');

            }
        }
          else {
                $(".cpass-error-span").remove();
              }
    };

/*validation Password Blur ------------------------------------------------------*/
  /*Password Pattern--------------------------------------------------- */
    var validateEmail =function (eventData) {
    var eventTag=eventData.delegateTarget;
    var length=eventTag.value.length;

      if (length==0 || (!eventTag.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) ) {
        if(eventData.currentTarget.parentElement.childElementCount==2) {
          $(eventData.delegateTarget).after
          ('<span class="email-error-span"  style="display : table-row-group">Please Fill Valid Email  eg vaibhav.khot@gmail.com Special Symbols ._- only allowed</span>');

        }
    }
    else {
            $(".email-error-span").remove();

        }
    };





/*##########################################################################################*/




/*##########################################################################################*/
//change Methods
/*###########################################################################################*/
var changeCountry=function(eventData) {

  var a = $.getJSON( "country.json", function(data) {
     console.log(data);
     console.log(_.values(data));
     var dd=_.object(data)
        console.log(data.country);
        console.log(data.country["0"].id);
        console.log(data.country["0"].name);
        console.log(dd);
    console.log( "success" );
  });
console.log(_.values(a));
};

/*##########################################################################################*/
//Click Methods
/*###########################################################################################/*
/*Year Chnage Click Event----------------------------------------------------------------*/
  var changeYear =function(eventData){
      selectDate($("#day").attr("id"),$("#month").attr("id"),$("#year").attr("id"));
    };



/*Month Chnage Click Event----------------------------------------------------------------*/
    var changeMonth =function(eventData){
        selectDate($("#day").attr("id"),$("#month").attr("id"),$("#year").attr("id"));
      };







/*validation Gender Click------------------------------------------------------ */

  var clickblurResidence1= function (eventData) {
    return checkRadio(eventData);

  };
  var clickblurResidence2= function (eventData) {
    return checkRadio(eventData);
  };

function checkRadio(eventData) {
  if($('input[name="radio"]:checked').length==0)
    {
      if ($("#gender_ul li").size()==2) {
        var a=_.last($("#gender_ul"))                                                 //USE OF UNDERSCORE.JS
                $($(a)).append
                ("<li><span class='radio-error-span'  style='display : table-row-group'>Please Check one</span></li>");

}}
      else {
        $(".radio-error-span").remove();

      }
  };




  /*Day Chnage Click and Age Calculation-----------------------------------------------------*/
    var changeDay =function(eventData){

      var y=parseInt($("#year").val());
      var m=parseInt($("#month").val());
      var d=parseInt($("#day").val());

        if ($("#day").value!="select" &&
            $("#year").value!="select" &&
            $("#month").value!="select"){
                  var dob = new Date(y,m,d);
                  var today = new Date();
                  var diffDate = Math.abs(dob.getTime() - today.getTime());
                  var diff = parseFloat(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365.25)));
                  if(diff!="NaN"){
                    $("#age").val(diff.toPrecision(3)+" Years");
                  }
                }
                else {
                    $("#age").val("Years") ;
                }
          };


/*CheckBox Validation click---------------------------------*/
var clickCheck18 = function (eventData) {
   return checkBox(eventData);
};
var clickCheck19 = function (eventData) {

   return checkBox(eventData);
};
var clickCheck20 = function (eventData) {
    return checkBox(eventData);
};



function checkBox(eventData) {
    var chkedLength = $( "input[name='interest']:checked" ).length;
    if (chkedLength==0){
      if ($("#checkbox_ul li").size()==3) {
        var a=_.last($("#checkbox_ul"));
        var compiled = _.template("<%= name %>");                              // UNDERSCOREJS TEMPLATE USE
        $($(a)).append(compiled({name:
          '<li class="checkbox-error-span"><span  style="display : table-row-group">Please check atleast 1 Interest</span></li>'}));

        }
      } else {
      $(".checkbox-error-span").remove();

    }
};



/*final Validation- All At ONCE------------------------------------------------------------*/
var clickNextStep = function (eventData) {
eventData.preventDefault();

   for (var i = 0; i < validationOnIDs.length; i++) {
    var a = $("#" + validationOnIDs[i]).trigger("blur");

   }
   console.log(ferror);
};




/*########################################################################################*/


/*##########################################################################################
Other Methods
###########################################################################################/*

/* Year Generation ----------------------------------------- ------------------------*/
  function listYear(target, start) {
    if (!target) {
        return false;
        }
        else {
            var currentYear = (new Date).getFullYear();
            for (var i = currentYear; i>=start; i--){
                var opt = document.createElement('option');
                opt.value = i;
                opt.innerHTML = i;
                $(target).append(opt);
            }
        }
    };



listYear("#year",1976); //call to Year Generation Method





/*------------------------------------------------------------------------------
*Function For Date POP UP
* Month Start with 0 -1 -2 -....11
* Common Fuction For Month And Year change
* When You Select Year and Month Properly Then Days will Populated
*-------------------------------------------------------------------------------*/
function selectDate(d,m,y) {
  var dy=document.getElementById(d);
  var mth=document.getElementById(m);
  var yr=document.getElementById(y);
  dy.options.length=1;
    if (mth.value && yr.value) {
      var days=new Date(yr.value,mth.value,1,-1).getDate(); //var d = new Date(year, month, day, hours) Give Actual No Of Days
                                                            // the first day of the next month minus 1 hour
      for (var i=1; i<=days; i++) {                         // Create Days Options Dynamically
          dy.options[i] = new Option(i,i);                  //new Option([text, [value, [defaultSelected, [selected]]]]);
        }
      dy.selectedIndex = 0;
      $("#day").val('select').change();                      //Reset Days Option
    }
}

/*Blur Events and associated Methods ----------------------------------------- */
    var handleBlurEvent = function (eventSource, eventData) {
      switch (eventSource) {
        case "firstname":
        validateFirstName(eventData);//
        break;
        case "lastname":
          validateLastName(eventData);//
        break;
        case "phone" :
          validatePhone(eventData);//
        break;
        case "office" :
          validateOffice(eventData);//
        break;
        case "password" :
          validatePass(eventData);//
        break;
        case "cpassword" :
          validateConPass(eventData);//
        break;
        case "email" :
          validateEmail(eventData);//
        break;
        case "residence1" :
          clickblurResidence1(eventData);//
        break;
        case "residence2" :
          clickblurResidence2(eventData);//
        break;
        case "checkbox_sample18" :
          clickCheck18(eventData);//
        break;
        case "checkbox_sample19" :
          clickCheck19(eventData);//
        break;
        case "checkbox_sample20" :
          clickCheck20(eventData);//
        break;
        case "country1" :
          changeCountry(eventData);//
        break;
        default:
      }
    };


/* Click Events and associated Methods ----------------------------------------- */
  var handleClickEvent = function (eventSource, eventData) {
    switch (eventSource) {
      case "year" :
        changeYear(eventData);
      break;
      case "month" :
        changeMonth(eventData);
      break;
      case "day" :
        changeDay(eventData);
      break;
      case "checkbox_sample18" :
        clickCheck18(eventData);//
      break;
      case "checkbox_sample19" :
        clickCheck19(eventData);//
      break;
      case "checkbox_sample20" :
        clickCheck20(eventData);//
      break;
      case "nextStep" :
        clickNextStep(eventData);
      break;
      case "residence1" :
        clickblurResidence1(eventData);//
      break;
      case "residence2" :
        clickblurResidence2(eventData);//
      break;
      case "country1" :
        changeCountry(eventData);//
      break;
      default:

    }
  };

/* Change Events and associated Methods ----------------------------------------- */
var handleChangeEvent = function (eventSource, eventData) {
  switch (eventSource) {

    default:

  }
};




/*Check Event ----------------------------------------- ------------------------*/
    var hadleEvent = function (eventType, eventSource, eventData) {
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

/*Capure ID ----------------------------------------- ------------------------*/
    for (var i = 0; i < validationOnIDs.length; i++) {
      $("#" + validationOnIDs[i]).on("blur click", function (event) {
          var eventType = event.type;
          var eventSource = event.delegateTarget.id;
          hadleEvent(eventType, eventSource, event);
      });
    }
  });
}());
