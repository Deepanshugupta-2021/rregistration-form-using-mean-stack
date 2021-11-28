
const express = require("express");
const path = require("path");
const app = express();
const api = require('./server/routes/api');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'dist/Register')));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', api);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname,'dist/Register/index.html'));
})
app.listen(3100,()=>{
    console.log("server is listening at port 3100");
});
