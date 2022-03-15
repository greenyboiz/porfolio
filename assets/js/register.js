$().ready(function () {
    $("#register-form").validate({
        rules: {
            fname: {
                required: true,
                minlength: 2
            },
            lname: {
                required: true,
                minlength: 2
            },
            username: {
                required: true,
                minlength: 6
            },
            mail: {
                required: true,
                email: true
            },
            password: {
                required: true,
                validatePassword: true
            },
            re_password: {
                required: true,
                validatePassword: true,
                equalTo: "#exampleInputPassword1"
            }
        },
        messages: {
            fname: {
                required: "Please enter the firstname",
                minlength: "First name must be greater than 2 characters"
            },
            lname: {
                required: "Please enter the lastname",
                minlength: "Last name must be greater than 2 characters"
            },
            username: {
                required: "Please enter the username",
                minlength: "Username must be greater than 6 characters"
            },
            mail: {
                required: "Please enter the email",
                email: "Please enter <em>valid<em> email format "
            },
            password: {
                required: "Please enter password",
                minlength: "Password must be greater than 6 characters"
            },
            re_password: {
                required: "Please enter password",
                minlength: "Password must be greater than 6 characters",
                equalTo: "Please enter same password above"
            } 
        }
    })
});

$.validator.addMethod("validatePassword", function (value, element) {
    return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
}, "Password must have at least 8 characters length, one uppercase <br/>letter, one lowercase letter and number");

