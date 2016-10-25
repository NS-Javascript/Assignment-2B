(function() {
  'use strict';

  $(document).ready(function (event) {

    var validationOnIDs = [
      "firstname",
      "lastname",
      "phone",
      "office",
      "email",
      "password",
      "password",
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


/*validation First Name Blur------------------------------------------------------ */
var validateFirstName = function (eventData) {
    var eventTag=eventData.delegateTarget;
    var length=eventTag.value.length;
        if(length==0) {
          if(eventData.currentTarget.parentElement.childElementCount==2)
              $(eventData.delegateTarget).after
              ('<span class="error-message" id="ediv1" style="display : table-row-group">Please Fill First Name</span>');
              return false;
                      }
          else {
              $("#ediv1").remove();
              return true;
            }
        }


/*validation Last Name Blur-------------------------------------------------------- */
  /*Last Name Empty-------------------------------------------------------- */
      var validateLastName = function (eventData) {
      var eventTag=eventData.delegateTarget;
      var length=eventTag.value.length;
          if(length==0) {
            if(eventData.currentTarget.parentElement.childElementCount==2)
            $(eventData.delegateTarget).after
            ('<span class="error-message" id="ediv2" style="display : table-row-group">Please Fill Last Name</span>');
              return false;
            }
        else {
        $("#ediv2").remove();
        return true;
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
              return false;
          }
      }
      else {
            $(".phone-error-span").remove();
            return true;
          }
      }

      /*validation Office No Blur ------------------------------------------------------*/
        /*Office Empty + Pattern--------------------------------------------------- */
          var validateOffice = function (eventData) {
          var eventTag=eventData.delegateTarget;
          var length=eventTag.value.length;

            if (length==0 || (!eventTag.value.match(/^([0-9]){8,8}$/)) ) {
                if(eventData.currentTarget.parentElement.childElementCount==2) {
                    $(eventData.delegateTarget).after
                      ('<span class="office-error-span"  style="display : table-row-group">Please Fill Valid 8 Digit Office Number</span>');
                    return false;
                }
            }
            else {
                  $(".office-error-span").remove();
                  return true;
                }
            }




/*Blur Events and associated Methods ----------------------------------------- */
    var handleBlurEvent = function (eventSource, eventData) {
      switch (eventSource) {
        case "firstname":
          validateFirstName(eventData);
        break;
        case "lastname":
          validateLastName(eventData);
        break;
        case "phone" :
          validatePhone(eventData);
        break;
        case "office" :
          validateOffice(eventData);
        break;
        default:

      }
    };


/*Click Events and associated Methods ----------------------------------------- */
    var handleClickEvent = function (eventSource, eventData) {

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
