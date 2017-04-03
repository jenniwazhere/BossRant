var $ = window.jQuery;
//Create "rants" database
const rantPosts = horizon('rants');

(function (window) {
  'use strict';
  var App = window.App || {};

  function PostHandler(selector) {
      if (!selector) {
          throw new Error('No selector provided');
      }

      this.$formElement = $(selector);
      if (this.$formElement.length === 0) {
          throw new Error('Could not find element with selector: ' + selector);
      }
  }

  PostHandler.prototype.addPostHandler = function() {
    console.log("Setting post handler");
    this.$formElement.on('submit', function(event) {
      var postBody = $('#rant-post').val();
      var timeStamp = Math.floor(Date.now() / 1000);
      rantPosts.store({
        type: "rant",
        time: timeStamp,
        text: postBody});
      console.log("Post has been stored");
    });
  }

App.PostHandler = PostHandler;
window.App = App;
})(window);
