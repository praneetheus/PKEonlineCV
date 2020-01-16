const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname+ '/public'));

// Home page
app.get('/', function(req, res){
    // res.end('hello world');
    res.render('pages/index')
});



// start server
app.listen(process.env.PORT || 5000, function(){
	console.log('server started on port 5000');
})