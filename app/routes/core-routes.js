var React = require('react/addons'),
ReactApp = React.createFactory(require('../components/ReactApp')),
CommentForm = React.createFactory(require('../components/CommentForm'));

module.exports = function(app) {

	app.get('/', function(req, res){
		var reactHtml = React.renderToString(ReactApp({}));
	  res.render('index.ejs', {reactOutput: reactHtml});
	});

  app.get('/comment', function(req, res){
    var reactHtml = React.renderToString(CommentForm({}));
    res.render('comment.ejs', {reactOutput: reactHtml});
  });

};