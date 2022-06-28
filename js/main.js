$('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: false,
            },
            message: {
                required: true,
            },
        },
        messages: {
            user_name: {
                required: "Please let me know your name.",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please put your email address",
            },
            message: {
                required: "Write your message here",
                minlength: "Your message must consist of at least 2 characters"
            },
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
                type: "POST",
              //  data: $(form).serialize(),
                url: "https://script.google.com/macros/s/AKfycbzmiRN0hYr4hpX21H6cYrRaQ-zRBC-Pui3r11RojcRJDCKk9eHcCz8zpIXbieVQ5quU/exec",
                success: function () {
                    $('#contact-form #success').fadeIn();
                },
                error: function () {
                    $('#contact-form #error').fadeIn();
                }
            });
        }
    });
