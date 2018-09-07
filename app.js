var express = require("express"); 
var app = express();  

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){

	res.render("index");
});

app.get("/task", function(req, res){

	res.render("task");
})


var port = process.env.PORT || 8080

app.listen(port, function () {
	console.log("Server started");
});
