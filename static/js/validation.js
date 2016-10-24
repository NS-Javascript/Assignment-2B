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

//var sp= $('<span />').attr({'className':'error-msg', 'id':'first_span' });
var sp1= $('<span />').attr({'className':'error-msg', 'id':'last_span' });

    var validateFirstName = function (eventData) {
      var sp= $('<span />').attr({'className':'error-msg', 'id':'first_span' });
      console.log(eventData);
      console.log(eventData.delegateTarget.parentElement.childElementCount);
        if($("#firstname").val()==""){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
          sp.html("hii");
          $("#firstname").after(sp);
          }
}
        else{
        $("#first_span").remove();
        return true;
      }
    };

    var validateLastName = function (eventData) {
      if($("#lastname").val()==""){
            sp1.text("plz enter last name");
            $(this).next("span").remove();
            $("#lastname").after(sp1);
            return false;
            }
      else{
      $("#last_span").html("");
      return true;
      }
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
        //console.log(eventSource);
        //console.log(eventType);
        hadleEvent(eventType, eventSource, event);
      });
    }
  });
}());
