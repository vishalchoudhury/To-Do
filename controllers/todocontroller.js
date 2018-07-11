const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:test123@ds133601.mlab.com:33601/todo');

let todoSchema = new mongoose.Schema({
	item: String
});

let Todo = mongoose.model('Todo', todoSchema);

/*let itemOne = Todo({item: 'Gym'}).save(function(err){
	if(err) throw err;
	console.log('Item saved');
});
*/
//var data = [{item: 'get milk'},{ item: 'get into coding'},{ item: 'sleep'}];

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
	
	app.get('/todo', function(req,res){
		
		Todo.find({}, function(err){
			throw err;
			res.render('todo', {todos: data});
		});
		
	});
	
	app.post('/todo', urlencodedParser, function(req,res){
		let newTodo = Todo(req.body).save(function(err,data){
			if(err) throw err;
			res.json(data);
		})
		/*data.push(req.body);
		res.json(data);*/
	});
	
	app.delete('/todo/:item', function(req,res){
		
		Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
			if(err) throw err;
			res.json(data);
		});
		/*data = data.filter(function(todo){
		    return todo.item.replace(/ /g,'-') != request.params.item;
		});
		res.json(data);*/
	});
};