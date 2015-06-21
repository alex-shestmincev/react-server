    /** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = require('./components/ReactApp');
var CommentForm = require('./components/CommentForm');

var mountNode = document.getElementById("react-main-mount");
if(mountNode){
  React.render(new ReactApp({}), mountNode);
}


var commentNode = document.getElementById("react-comment-mount");
if (commentNode) {
  React.render(new CommentForm({}), commentNode);
}