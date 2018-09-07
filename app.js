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


app.listen(55, function () {
	console.log("Server started");
});
