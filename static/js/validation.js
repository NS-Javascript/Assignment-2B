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


        var validateFirstName = function(eventData) {
            //  console.log(eventData);

            if (eventData.delegateTarget.value == "" || eventData.delegateTarget.value == null) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s1' style='color:red'>Please Fill the First name</span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                }

            } else {
                {
                    $("#s1").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);

                }
            }

        };

        var validateLastName = function(eventData) {

            if (eventData.delegateTarget.value == "" || eventData.delegateTarget.value == null) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s2' style='color:red'>Please Fill the Last name</span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                }


            } else {
                {
                    $("#s2").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);

                }
            }
        };

        var validatePhoneNo = function(eventData) {
            var pattern = /^\d{10}$/;
            if (!pattern.test(eventData.delegateTarget.value)) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s3' style='color:red'>*phone can only 10 digit number </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                }


            } else {
                {
                    $("#s3").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);

                }
            }
        };

        var validateOfficeNo = function(eventData) {
            var pattern = /^\d{6,8}$/;
            if (!pattern.test(eventData.delegateTarget.value)) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s4' style='color:red'>*Office can min 6 digit & max 8 number </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                }


            } else {
                {
                    $("#s4").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);

                }
            }
        };

        var validateEmail = function(eventData) {
            var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
            if (!pattern.test(eventData.delegateTarget.value)) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s5' style='color:red'>*please fill valid email </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                }


            } else {
                {
                    $("#s5").remove();

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);

                }
            }
        };

        var validatePass = function(eventData) {
            var pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,16}/;
            if (!pattern.test(eventData.delegateTarget.value)) {
                if ($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount == 0) {
                    $(eventData.delegateTarget.previousSibling.previousElementSibling).append(" <span id='s6' style='color:red'>*Use 8 characters with min 1 lower 1 upper case & digit! </span>");

                    console.log($(eventData.delegateTarget.previousSibling.previousElementSibling).context.childElementCount);
                }


            } else {
                {
                    $("#s6").remove();

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
                case "phone":
                    validatePhoneNo(eventData);
                    break;
                case "office":
                    validateOfficeNo(eventData);
                    break;
                case "email":
                    validateEmail(eventData);
                    break;
                case "password":
                    validatePass(eventData);
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
