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
      "confirmpassword",
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

//fisrt name
    var validateFirstName = function (eventData) {
      var sp= $('<span />').attr({'className':'error-msg', 'id':'first_span' });
      console.log(eventData);
      console.log(eventData.delegateTarget.parentElement.childElementCount);
        if($("#firstname").val()==""){
              if(eventData.delegateTarget.parentElement.childElementCount==2){
                    sp.html("enter first name");
                    $("#firstname").after(sp);
                    return false;
          }
        }
        else{
              $("#first_span").remove();
                    return true;
      }
    };

// last name
    var validateLastName = function (eventData) {
      var sp= $('<span />').attr({'className':'error-msg', 'id':'last_span' });
        if($("#lastname").val()==""){
              if(eventData.delegateTarget.parentElement.childElementCount==2){
                    sp.html("enter last name");
                    $("#lastname").after(sp);
                    return false;
          }
        }
        else{
              $("#last_span").remove();
                    return true;
      }
    };

//phone
    var validatePhone=function(eventData){
      var sp= $('<span />').attr({'className':'error-msg', 'id':'phone_span' });
      var pat1 = /^\d{10,10}$/;
      var b = $("#phone").val();
        if(!pat1.test(b)){
              if(eventData.delegateTarget.parentElement.childElementCount==2){
                    sp.html("enter 10 digit phone number");
                    $("#phone").after(sp);
                    return false;
          }
        }
        else{
              $("#phone_span").remove();
                    return true;
      }
    };

//office
var validateOffice=function(eventData){
  var sp= $('<span />').attr({'className':'error-msg', 'id':'office_span' });
  var pat1 = /\d/;
  var b = $("#office").val();
    if(!pat1.test(b)){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                sp.html("only numbers allowed");
                $("#office").after(sp);
                return false;
      }
    }
    else{
          $("#office_span").remove();
                return true;
  }
};

//email
var validateEmail=function(eventData){
  var sp= $('<span />').attr({'className':'error-msg', 'id':'email_span' });
  var pat1 = /\w*\.?\w+@[a-zA-Z]+\.[a-z]{2,4}/;
  var b = $("#email").val();
    if(!pat1.test(b)){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                sp.html("enter valid email id");
                $("#email").after(sp);
                return false;
      }
    }
    else{
          $("#email_span").remove();
                return true;
  }
};

//password
var validatePassword = function (eventData) {
  var pat1 = /^\w{8,12}$/;
  var sp= $('<span />').attr({'className':'error-msg', 'id':'password_span' });
  var b = $("#password").val();
    if(!pat1.test(b)){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                sp.html("enter 8 characters password");
                $("#password").after(sp);
                return false;
      }
    }
    else{
          $("#password_span").remove();
                return true;
  }
};

//Confirmpassword
var validateConfirmpassword=function (eventData){
  var b = $("#password").val();
  var sp= $('<span />').attr({'className':'error-msg', 'id':'Confirmpassword_span' });
  if($("#confirmpassword").val()!=b){
        if(eventData.delegateTarget.parentElement.childElementCount==2){
              sp.html("password not matched");
              $("#confirmpassword").after(sp);
              return false;
    }
  }
  else{
        $("#Confirmpassword_span").remove();
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
        case "phone":
          validatePhone(eventData);
          break;
        case "office":
          validateOffice(eventData);
          break;
        case "email":
          validateEmail(eventData);
          break;
        case "password":
          validatePassword(eventData);
          break;
        case "confirmpassword":
          validateConfirmpassword(eventData);
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
