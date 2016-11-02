$(document).ready(function () {
  var ccc=[];
  $.getJSON( "country.json", function(data) {
    $.each(data,function (index,value) {
      ccc[index]=value;
    })
  console.log("suceess");
  console.log(ccc);
  });
       
  })
