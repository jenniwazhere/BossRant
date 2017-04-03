(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {

        isValidUsername: function(user1) {
            if (user1.length > 8) {
                return false;
            }
            return true;
        },
        isValidPass: function() {
            var p1 = document.getElementById('password1');
            var p2 = document.getElementById('password2');
            if (p1.value == p2.value) {
                alert('here also');
                return true;
            }
            return false;
        }




    };


    App.Validation = Validation;
    window.App = App;
})(window);
