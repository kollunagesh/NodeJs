var express = require('express'),
    app = express();

app.get('/', function(req, resp){
  resp.send('Hola mundo');
})

app.get('/manolo', function(req, resp){
  resp.send('Hola manolo');
})

app.get('/:number', function(req, resp){
  var number = parseInt( req.params.number, 10 );
  var result = number + 2;
  resp.send(number + ' + 2 = ' + result	);
})
app.listen(8080, function(){
  console.log('A la escucha en el puerto 8080');
});
