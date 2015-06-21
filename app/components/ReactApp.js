/** @jsx React.DOM */

var React = require('react/addons');

var ReactApp = React.createClass({

      componentDidMount: function () {



      },
      render: function () {
        return (
          <div>
            <h1>Main page</h1>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;