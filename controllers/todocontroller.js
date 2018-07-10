const bodyParser = require('body-parser');

let data = [{item: 'get milk'},{ item: 'get into coding'},{ item: 'sleep'}];

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
	
	app.get('/todo', function(req,res){
		//console.log(req.query);
		res.render('todo', {todos: data});
		
	});
	
	app.post('/todo', urlencodedParser, function(req,res){
		
	});
	
	app.post('/todo',urlencodedParser, function(req,res) {
		console.log(req.body);
		res.render('todo', {data: req.body});
		
	});
	
	app.delete('/todo', function(req,res){
		
	});
};