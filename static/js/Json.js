$(document).ready(function () {
  var a = {
           Cars: [{
               "CarType": "BMW",
               "carID": "bmw123"
           }, {
               "CarType": "mercedes",
               "carID": "merc123"
           }, {
               "CarType": "volvo",
               "carID": "vol123r"
           }, {
               "CarType": "ford",
               "carID": "ford123"
           }]
       };
       $.each(a.Cars, function (key, value) {
           $("#dropDownDest").append($('<option></option>').val(value.carID).html(value.CarType));
       });

       $('#dropDownDest').change(function () {
           alert($(this).val());
           //Code to select image based on selected car id
       });
  })
