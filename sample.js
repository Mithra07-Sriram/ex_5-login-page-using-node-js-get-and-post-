const http = require("http");
const url = require("url");
const qs = require("querystring");

function onRequest(request, response) {
    var path = url.parse(request.url).pathname;
    console.log("Request for " + path + " received");
    var query = url.parse(request.url).query;
    var name = qs.parse(query)["username"];
    var email = qs.parse(query)["email"];
    var rollno = qs.parse(query)["password"];
    response.write("Hello " + name + ", your email id is " + email + ". Success");
    response.end();
}

http.createServer(onRequest).listen(3333);
console.log("Server has started");
