var express = require('express');
var host = "127.0.0.1";
var port = "1331";

var app = express();

app.use(app.routes);
app.use(express.static(__dirname+"/static"));

app.get("*",function(request,response){
    response.render("static/index.html");
});


app.listen(port,host,function(){
    console.log("Listening on "+host+":"+port);
});

