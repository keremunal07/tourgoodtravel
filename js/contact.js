$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "The name is required",
                    minlength: "Your name must consist of at least 2 characters"
                },
                subject: {
                    required: "The subject is required",
                    minlength: "Your subject must consist of at least 4 characters"
                },
                number: {
                    required: "Only numbers are required",
                    minlength: "Your number must consist of at least 5 characters"
                },
                email: {
                    required: "The email is required"
                },
                message: {
                    required: "The text field is required",
                    minlength: "Your message must consist of at least 5 characters"
                }
            },

        })
    })
        
 })(jQuery)
})