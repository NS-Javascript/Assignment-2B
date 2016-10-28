(function() {
  'use strict';
  $(document).ready(function (event) {
years_drop();

//json data
var text1 ={
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
};

//validation flags
var flag=["0","0","0","0","0","0","0","0","0","0","0","0"];

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
      "country",
      "state",
      "city",
      "nextStep"
    ];

//error msg
function erromsg(eventData){
  var sp= $('<span />').attr({'class':'error-msg'});
  sp.html("plz enter "+$("#"+eventData.target.getAttribute('id')).prev().html());
$("#"+eventData.target.getAttribute('id')).after(sp);
}

//remove error msg
function removemsg(eventData)
{$("#"+eventData.target.getAttribute('id')+"+span").remove();}

//fisrt name
    var validateFirstName = function (eventData) {
        if($("#firstname").val()==""){
              if(eventData.delegateTarget.parentElement.childElementCount==2){
                   erromsg(eventData);
                    flag[0]=0;
          }
          return false;
        }
        else{
              removemsg(eventData);
                    flag[0]=1;
      }
    };

// last name
    var validateLastName = function (eventData) {
        if($("#lastname").val()==""){
             if(eventData.delegateTarget.parentElement.childElementCount==2)
                {      erromsg(eventData);
                        flag[1]=0; }
        }
        else{
              removemsg(eventData);
                               flag[1]=1;}
    };

//phone
    var validatePhone=function(eventData){
      var pat1 = /^\d{10,10}$/;
        if(!pat1.test($("#phone").val())){
            //  if(eventData.delegateTarget.parentElement.childElementCount==2)
      if($("#phone+span").length==0)
                { erromsg(eventData);
                    flag[2]=0;}
        }
        else{
              removemsg(eventData);
                    flag[2]=1;}
    };

//office
var validateOffice=function(eventData){
  var pat1 = /\d/;
    if(!pat1.test($("#office").val())){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
               erromsg(eventData);
                flag[3]=0;}
    }
    else{
          removemsg(eventData);
          flag[3]=1;}
};

//email
var validateEmail=function(eventData){
  var pat1 = /\w*\.?\w+@[a-zA-Z]+\.[a-z]{2,4}/;
    if(!pat1.test($("#email").val())){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
         erromsg(eventData);
                flag[4]=0;}
    }
    else{
          removemsg(eventData);
          flag[4]=1;}
};

//password
var validatePassword = function (eventData) {
  var pat1 = /^\w{8,12}$/;
    if(!pat1.test($("#password").val())){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                 erromsg(eventData);
                flag[5]=0;
      }
    }
    else{
          removemsg(eventData);
          flag[5]=1;
  }
};

//Confirmpassword
var validateConfirmpassword=function (eventData){
  var b = $("#password").val();
  if($("#confirmpassword").val()!=b){
        if(eventData.delegateTarget.parentElement.childElementCount==2){
              sp.html("password not matched");
              $("#confirmpassword").after(sp);
              flag[6]=0;
    }}
  else if ($("#confirmpassword").val()=="") {
      if(eventData.delegateTarget.parentElement.childElementCount==2){
             erromsg(eventData);
            flag[6]=0;
    }
  }
  else{
        removemsg(eventData);
        flag[6]=1;
}
};

//Month
var validateMonth=function (eventData){
  var sp= $('<span />').attr({'class':'error-msg', 'id':'month_span' });
    if($("#month").val()=="select"){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                sp.html("select month");
                $("#year").after(sp);
      }
    }
    else{
          $("#month_span").remove();
          day_drop();
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
$("#day").val("select").change();
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
        var m = parseInt($("#month").val());
        var y = $("#year").val();
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
    if (y == "select" || d == "select" || m == "select"){
if($(".dob_fileds  span").length==3)
    {
                sp.html("plz select date of birth");
                $(".dob_fileds>label").after(sp);
                flag[7]=0;
      }
    }
    else{
          $("#birth_span").remove();
          flag[7]=1;
        }
      }

//gender
var validateGender = function (eventData) {
  var a=$("#residence1");
  var b=$("#residence2");
  var sp= $('<span />').attr({'class':'error-msg', 'id':'radio_span' });
  if(!a["0"].checked && !b["0"].checked){
if($(".gender_fileds span").length==0)
    {
        sp.html("select gender ");
        $(".gender_fileds>label").after(sp);
        flag[8]=0;
      }
    }
  else{
      $("#radio_span").remove();
      flag[8]=1;
          }
        };

//Interest
var validateInterest=function (){
    var sp= $('<span />').attr({'class':'error-msg', 'id':'check_span' });
    var a=$("#checkbox_sample18");
    var b=$("#checkbox_sample19");
    var c=$("#checkbox_sample20");
    if(!a["0"].checked && !b["0"].checked && !c["0"].checked){
if($(".interest_fileds span").length==0){
      sp.html("select Interest");
      $(".interest_fileds>label").after(sp);
      flag[9]=0;
         }
      }
    else {
      $("#check_span").remove();
      flag[9]=1;
          }
        };

//aboutyou
var validateAboutyou = function (eventData) {
    if($("#aboutyou").val()==""){
          if(eventData.delegateTarget.parentElement.childElementCount==2){
                 erromsg(eventData);
                flag[10]=0;
      }
    }
    else{
          removemsg(eventData);
          flag[10]=1;
  }
};

//dropdowns state
var co;
function state(){
  var b=$("#country").val();
  if(b=="USA")
  { co=0;}
  if(b=="Australia")
  { co=1;}
  popstate(co);
}

//populate state
function popstate(c){
  $("#state").val("select").change();
var select2 = $("#state");
  if(select2["0"].length>1){
  for(i = select2["0"].length - 1 ; i >= 0 ; i--)
  { select2["0"].remove(i);}
      }
  for(var i=0;i<text1.country[c].states.length;i++)
  {
    var opt = $('<option/>');
    opt.html(text1.country[c].states[i].name);
    opt.val(text1.country[c].states[i].name);
    select2.append(opt);
  }
}

//City
function city(){
  var st;
  var b=$("#state").val();
if(b=="State 1 USA")
  { st=0;}
  if(b=="State 2 USA")
  { st=1;}
  if(b=="State 1 Australia")
  { st=0;}
  if(b=="State 2 Australia")
  { st=1;}
  popcity(st,co);
}

//populate city
function popcity(s,c){
  $("#city").val("select").change();
  var select2 = $("#city");
     if(select2["0"].length>1){
          for(i = select2["0"].length - 1 ; i >= 0 ; i--)
                   { select2["0"].remove(i); }
              }
      for(var i=0;i<text1.country[c].states[s].cities.length;i++)
         {
          var opt = $('<option/>');
           opt.html(text1.country[c].states[s].cities[i].name);
            opt.val(text1.country[c].states[s].cities[i].name);
             select2.append(opt);
         }
     }

//drop-down validation
var validatecountry = function (eventData) {
  var sp= $('<span />').attr({'class':'error-msg', 'id':'country_span' });
    if($("#country").val()=="Select Country"||$("#state").val()=="Select Country"||$("#city").val()=="Select"){
        if($("#ct span").length==1)
            {    sp.html("select country state and city");
                $(".city_fileds").after(sp);
                            flag[11]=0;
                      }
    }
    else{
          $("#country_span").remove();
                          flag[11]=1;
                    }
};

//final
function final(eventData) {
      $("a").removeAttr("href");
      $("#firstname").trigger("blur");
      $("#lastname").trigger("blur");
      $("#phone").trigger("blur");
      $("#office").trigger("blur");
      $("#email").trigger("blur");
      $("#password").trigger("blur");
      $("#confirmpassword").trigger("blur");
      $("#year").trigger("blur");
      $("#aboutyou").trigger("blur");
      var k=1;
  for(var i=0;i<12;i++)
  {
    k=k*flag[i];
  }
 if(k==1){
   $("a").prop("href", "partners_preference_form.html");
}
  }


    var handleBlurEvent =function (eventSource, eventData) {
      switch (eventSource) {
        case "firstname":
         validateFirstName(eventData);
        //  validateGender(eventData);
        //  validateInterest(eventData);
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
          dob(eventData);
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
        case  "country":
          state();
          break;
        case  "state":
          city();
          break;
        case  "city":
          validatecountry();
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
      case "residence1":
       validateGender(eventData);
       break;
      case "residence2":
        validateGender(eventData);
        break;
      case "year":
        dob(eventData);
        break;
      case "checkbox_sample18":
        validateInterest(eventData);
        break;
      case "checkbox_sample19":
        validateInterest(eventData);
        break;
      case "checkbox_sample20":
        validateInterest(eventData);
        break;
      case "nextStep":
        validateGender(eventData);
        validateInterest(eventData);
        validatecountry();
        dob(eventData);
        final(eventData);
        break;
      }
    };

    var hadleEvent = function (eventType, eventSource, eventData) {
      switch (eventType) {
        case "blur":
        return handleBlurEvent(eventSource, eventData);
          break;
        case "click":
        handleClickEvent(eventSource, eventData);
          break;
        default:
      }
    };

    for (var i = 0; i < validationOnIDs.length; i++) {
      $("#" + validationOnIDs[i]).on("blur click chnage", function (event) {
        var eventType = event.type;
        var eventSource = event.delegateTarget.id;
        //console.log(eventSource);
        //console.log(eventType);
        hadleEvent(eventType, eventSource, event);

      });
    }
  });
}());
