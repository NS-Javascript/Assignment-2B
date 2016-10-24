(function() {
    'use strict';

    $(document).ready(function(event) {

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
        var flag = 0;
        var flag1 = 0;

        var validateFirstName = function(eventData) {
            //  console.log(eventData);

            if (eventData.delegateTarget.value == "" || eventData.delegateTarget.value == null) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s1' style='color:red'>Please Fill the First name</span>");
                    //  flag = 1;
                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                }

            } else {
                {
                    $("#s1").remove();
                    //  flag = 0;
                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);

                }
            }

        };

        var validateLastName = function(eventData) {

            if (eventData.delegateTarget.value == "" || eventData.delegateTarget.value == null) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s2' style='color:red'>Please Fill the First name</span>");
                    //  flag1 = 1;
                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                }


            } else {
                {
                    $("#s2").remove();
                    flag1 = 0;
                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);

                }
            }
        };


        var handleBlurEvent = function(eventSource, eventData) {
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

        var handleClickEvent = function(eventSource, eventData) {

        };

        var hadleEvent = function(eventType, eventSource, eventData) {
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
            $("#" + validationOnIDs[i]).on("blur click", function(event) {
                var eventType = event.type;
                var eventSource = event.delegateTarget.id;
                hadleEvent(eventType, eventSource, event);
            });
        }
    });
}());
