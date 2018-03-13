/*
1.Control the behavior of todo-app. 
2.manipulate the data.
3.route the data.
*/
var bodyParser = require('body-parser');
var data = [
            { item: 'get milk and sugar' },
            { item: 'walk dog' },
            { item: 'kick some coding ass'}
           ];
var urlencodedParser = bodyParser.urlencoded({extended:false});


module.exports = function(app) {

    app.get('/todo',function(req,res) 
    {
       res.render('todo.ejs',{todos:data});
    });

    app.post('/todo',urlencodedParser, function (req, res) {
        data.push(req.body);
        console.log(req.body);
        res.json(data);
    });
    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g,'-')!==req.params.item;
        });
        res.json(data);
    });
};