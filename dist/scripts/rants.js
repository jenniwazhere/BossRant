(function(window) {
    'use strict';
    var POST_BOX_SELECTOR = '[data-rant-post="form"]';
    var App = window.App || {};

    var PostHandler = App.PostHandler;

    var postHandler = new PostHandler(POST_BOX_SELECTOR);
    postHandler.addPostHandler();

    window.postHandler = postHandler;
})(window);
