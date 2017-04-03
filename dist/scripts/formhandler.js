var $ = window.jQuery;
//Create "users" database
const users = horizon('users');

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

        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            var data = {};

            //Create array of data from Form entry
            console.log("yup");
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                //console.log(item.name + " = " + item.value);
            });
            event.preventDefault();
            console.log("Calling...");



              /*********************************
             *           LOGIN PAGE STUFF     *
             **********************************/
            //CHECK IF ON LOGIN PAGE
            if (window.location.pathname == '/signin.html') {
                var userLogin = users.find({
                    username: data['user']
                }).fetch().defaultIfEmpty().subscribe(
                    (msg) => {
                        if (msg == null) {
                            alert('USER NOT FOUND. PLEASE TRY AGAIN OR CLICK SIGN UP');
                            this.reset();
                        }
                        else{
                          alert('LOGIN SUCCESSFUL');
                          window.location.href = '/rants.html';
                        }
                        //INSERT ELSE STATEMENT TO CHECK PASSWORD AND REDIRECT
                        //IF SUCCESSFULLY LOGGED IN
                    }
                )
            }

             /************************************
             *         SIGN UP PAGE STUFF        *
             ************************************/
            if (window.location.pathname == '/signup.html') {
                //CHECK TO SEE IF USERNAME ALREADY EXISTS IN DATABASE
                var obj = users.find({
                    username: data['user']
                }).fetch().defaultIfEmpty().subscribe(
                    (msg) => {
                        if (msg == null) {
                            //Store user credentials in Horizon Database
                            users.store({
                                username: data['user'],
                                password: data['pass'],
                                first_name: data['first_name'],
                                last_name: data['last_name'],
                                email: data['emailAddress']
                            });
                            window.location.href = '/signin.html'
                        } else {
                            //USERNAME IS TAKEN -- FORM WILL RESET
                            alert('USER ALREADY EXISTS');
                            this.reset();

                        }
                    }
                );
            }

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

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
