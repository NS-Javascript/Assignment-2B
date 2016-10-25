$(document).ready(function() {
    $("#step2").click(function() {
        $("div > label").append(" <span style='color:red'>fill the all imp fields</span>.");
    });
    //alert($(".name_fileds").length);

});



/*

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

*/





















/*

(function() {
    'use strict';

    $(document).ready(function(event) {

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
            "nextStep"
        ];


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
      //  $("#password").type="password";
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




        var handleBlurEvent = function(eventSource, eventData) {
            switch (eventSource) {
                case "firstname":
                  return  validateFirstName(eventData);
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
                default:

            }
        };

        var handleClickEvent = function(eventSource, eventData) {
          return 0;

        };

        var hadleEvent = function(eventType, eventSource, eventData) {
            switch (eventType) {
                case "blur":
                return handleBlurEvent(eventSource, eventData);
                    break;
                case "click":
                  return handleClickEvent(eventSource, eventData);
                    break;
                default:

            }

        };

  /*      var Finalvalid = function() {

  };*//*
 $("#step2").click(function(){
        for (var i = 0; i < validationOnIDs.length; i++) {
            $("#" + validationOnIDs[i]).on("blur click", function(event) {
                var eventType = event.type;
                var eventSource = event.delegateTarget.id;
              var rahul = hadleEvent(eventType, eventSource, event);
              console.log("dfdfgd");
              console.log(rahul);
              return rahul;

            });
        }
});





    });
}());
*/
