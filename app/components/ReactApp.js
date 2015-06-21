/** @jsx React.DOM */

var $ = require('jquery');
var React = require('react/addons');

var ReactApp = React.createClass({

  getInitialState: function() {

    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {

    $.get(this.props.source, function(result) {
       var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>.
      </div>
    )
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;