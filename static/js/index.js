$(document).ready(function() {
    $("#btn1").click(function() {
        $("div > label").append(" <span style='color:red'>fill the all imp fields</span>.");
    });
    alert($(".name_fileds").length);
    $("[name=firstname]").blur(function() {
        //    alert("This input field has lost its focus.");
        $("[lebel>name=firstname]").append(" <span style='color:red'>fill the name</span>.");
    });
});
