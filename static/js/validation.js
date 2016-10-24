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

/*validation First Name*/
var validateFirstName = function (eventData) {
//console.log(eventData);
var eventTag=eventData.delegateTarget;
var length=eventTag.value.length;
//console.log(length);
if (length==0) {
  $(eventData.delegateTarget).after('<span class="error-message" id="ediv1" style="display : table-row-group">plz valid</span>');
  return false;
  }else {
  $("#ediv1").remove();
  return true;
  }
}

/*validation Last Name*/
    var validateLastName = function (eventData) {
      var eventTag=eventData.delegateTarget;
      var length=eventTag.value.length;
      //console.log(length);
      if (length==0) {
        $(eventData.delegateTarget).after('<span class="error-message" id="ediv2" style="display : table-row-group">plz valid</span>');
        return false;
        }else {
        $("#ediv2").remove();
        return true;
        }
      }




    var handleBlurEvent = function (eventSource, eventData) {
      switch (eventSource) {
        case "firstname":
          validateFirstName(eventData);
          break;
        case "lastname":
          validateLastName(eventData);
          break;
        default:

      }
    };

    var handleClickEvent = function (eventSource, eventData) {

    };

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

    for (var i = 0; i < validationOnIDs.length; i++) {
      $("#" + validationOnIDs[i]).on("blur click", function (event) {
        var eventType = event.type;
        var eventSource = event.delegateTarget.id;
        hadleEvent(eventType, eventSource, event);
      });
    }
  });
}());
