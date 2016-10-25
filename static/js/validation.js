(function() {
  'use strict';

  $(document).ready(function (event) {


years_drop();

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
      "aboutyou",
      "gender",
      "nextStep"
    ];

//fisrt name
    var validateFirstName = function (eventData) {
      var sp= $('<span />').attr({'class':'error-msg', 'id':'first_span' });
      //console.log(eventData);
      //console.log(eventData.delegateTarget.parentElement.childElementCount);
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
      var sp= $('<span />').attr({'class':'error-msg', 'id':'last_span' });
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
      var sp= $('<span />').attr({'class':'error-msg', 'id':'phone_span' });
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
  var sp= $('<span />').attr({'class':'error-msg', 'id':'office_span' });
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
  var sp= $('<span />').attr({'class':'error-msg', 'id':'email_span' });
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
  var sp= $('<span />').attr({'class':'error-msg', 'id':'password_span' });
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
  var sp= $('<span />').attr({'class':'error-msg', 'id':'Confirmpassword_span' });
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

//Month
var validateMonth=function (eventData){
  var sp= $('<span />').attr({'class':'error-msg', 'id':'month_span' });
    if($("#month").val()=="select"){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                sp.html("select month");
                $("#year").after(sp);
                return false;
      }
    }
    else{
          $("#month_span").remove();
          day_drop();
                return true;
  }
};

//drop-down year
function year_change(){
  var a = $("#year").val();
   var b=$("#month").val();
  if((a%400)===0&&b=="2"){
    pop(30);
  }
  else if(b=="2"){
    pop(29);
  }
}

//day_pop
function pop(a) {
  var i;
var select2 = $("#day");
if(select2["0"].length>1){
for(i = select2["0"].length - 1 ; i >= 0 ; i--)
{
  select2["0"].remove(i);
}
}
  for (i = 1; i < a; i++) {
      var opt = $('<option/>');
      opt.html(i);
      opt.val(i);
      select2.append(opt);
  }
}

//day_drop
function day_drop() {
    var a;
    var mon = $("#month").val();
      // var b = document.getElementById("year").value;
    if (mon == "2") {
        a = 29;
        pop(a);
    }
     else if (mon == "4" || mon == "6" || mon == "9" || mon == "11") {
        a = 31;
        pop(a);
    } else {
        a = 32;
        pop(a);
    }
}

//yeras on load
    function years_drop() {
        var a = new Date();
        var i;
          var select2 = $("#year");
        for (i = 1985; i <= a.getFullYear(); i++) {
              var opt = $('<option/>');
              opt.html(i);
              opt.val(i);
              select2.append(opt);
          }

    }

// age
    function age() {
        var m = parseInt(document.getElementById("month").value);
        console.log(m);
        var y = $("#year").val();
        console.log(y);
        var today = new Date();
        var age;
        var totalmonths = (parseInt((today.getFullYear()) - y) * 12);
        var d = (totalmonths + m);
        age = d * 0.083;
        document.getElementById("age").value = age.toFixed(2);
        }

// date of birth
function dob(eventData) {
  var sp= $('<span />').attr({'class':'error-msg', 'id':'birth_span' });
  var d =$("#day").val();
  var m =$("#month").val();
  var y =$("#year").val();
    if (d == "select"&&y == "volvo"&&m == "select"){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                sp.html("plz select date of birth");
                $("#year").after(sp);
                return false;
      }
    }
    else{
          $("#birth_span").remove();
                return true;
        }
      }

//gender
var validateGender = function (eventData) {
var a=$("#residence1");
var b=$("#residence2");
var sp= $('<span />').attr({'class':'error-msg', 'id':'radio_span' });
//console.log(b["0"].checked);
if(!a["0"].checked && !b["0"].checked){
  //f(eventData.delegateTarget.parentElement.childElementCount==2){
        sp.html("select gender ");
        $("#residence1").before(sp);
        return false;
}
else{
      $("#radio_span").remove();
            return true;
    }
};

//Interest
var validateInterest=function (){
  var sp= $('<span />').attr({'class':'error-msg', 'id':'check_span' });
  var a=$("#checkbox_sample18");
  var b=$("#checkbox_sample19");
  var c=$("#checkbox_sample20");
  console.log(a["0"].checked);
  if(!a["0"].checked && !b["0"].checked && !c["0"].checked){
    sp.html("select Interest");
    $("#checkbox_sample18").before(sp);
    return false;
  }
  else {
    $("#check_span").remove();
          return true;
  }
};

//aboutyou
var validateAboutyou = function (eventData) {
  var sp= $('<span />').attr({'class':'error-msg', 'id':'about_span' });
    if($("#aboutyou").val()==""){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                sp.html("enter about you");
                $("#aboutyou").after(sp);
                return false;
      }
    }
    else{
          $("#about_span").remove();
                return true;
  }
};

    var handleBlurEvent = function (eventSource, eventData) {
      switch (eventSource) {
        case "firstname":
          validateFirstName(eventData);
          validateGender(eventData);
          validateInterest(eventData);
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
        case "month":
          validateMonth(eventData);
          age();
          break;
        case "day":
          age();
          break;
        case "year":
          dob(eventData);
          year_change();
          age();
          break;
        case  "aboutyou":
          validateAboutyou(eventData);
          break;
        default:
      }
    };

    var handleClickEvent = function (eventSource, eventData) {
      switch (eventSource)
      {
      // case "residence1":
      //   validateGender(eventData);
      //   break;
      }
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
