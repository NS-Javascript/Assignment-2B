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


    var validateFirstName = function (eventData) {
      if($("#firstname").val()==""){
    alert("empty");
    return false;
    }
        else
        alert("not empty");
        return true;
    };

    var validateLastName = function (eventData) {

    };


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
        console.log(eventSource);
        console.log(eventType);
        hadleEvent(eventType, eventSource, event);
      });
    }
  });
}());
