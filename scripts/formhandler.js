var $ = window.jQuery;
(function(window) {
    'use strict';
    var App = window.App || {};


    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function() {
      //  console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

        });
    };
    FormHandler.prototype.CheckCredentialsUserName = function(fn) {
        this.$formElement.on('input', '[name="user"]', function(event) {
            var user1 = $('#username').val();
            var message = '';
            event.target.setCustomValidity('');
            if (!fn(user1)) {
                alert('here');
                message = 'length of username should be between 8 to 20 characters';
                event.target.setCustomValidity(message);
            }
        });
    };

    FormHandler.prototype.CheckCredentialsPassword = function(fn) {
        this.$formElement.on('input', '[name="pass1"]', function(event) {

            var message = '';

            event.target.setCustomValidity('');
            if (!fn()) {
                alert('here 1');
                message = 'password does not match';
                event.target.setCustomValidity(message);
            }
        });
    };

    /*  FormHandler.prototype.addCredentials1(fn) {};

      FormHandler.prototype.addCredentials2(fn) {};*/

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
