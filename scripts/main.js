(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-user-login="form"]';

    var App = window.App;

    var FormHandler = App.FormHandler;
    var Validation = App.Validation;

    var formHandler = new FormHandler(FORM_SELECTOR);
      formHandler.addSubmitHandler();
    formHandler.CheckCredentialsUserName(Validation.isValidUsername);
    formHandler.CheckCredentialsPassword(Validation.isValidPass);

    //Formhandler.addCredentials1(Validation.isValidFirstName);
    //Formhandler.addCredentials2(Validation.isValidLastName);

})(window);
