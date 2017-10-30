var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var app = express(); // make express app
var server = require('http').createServer(app); // inject app into the server
// set up the view engine
app.set("views", path.resolve(__dirname, "views")); // path to views
app.set("view engine", "ejs"); // specify our view engine
app.use(express.static(__dirname + '/assets'));
// manage our entries
var entries = [];
app.locals.entries = entries; // now entries can be accessed in .ejs files
// set up the logger
app.use(logger("dev")); // app.use() establishes middleware functions
app.use(bodyParser.urlencoded({ extended: false }));
// GETS
app.get("/", function (request, response) {
    response.sendFile(__dirname+"/assets/index.html");
});
app.get("/about", function (request, response) {
    response.sendFile(__dirname+"/assets/index.html");
});
app.get("/convert", function (request, response) {
    response.sendFile(__dirname+"/assets/student.html");
});
app.get("/contact", function (request, response) {
    response.sendFile(__dirname+"/assets/contact.html");
});
app.get("/new-entry", function (request, response) {
    response.render("new-entry");
});
app.get("/guestbook", function (request, response) {
    response.render("index");
});

// POSTS
app.post("/new-entry", function (request, response) {
    if (!request.body.title || !request.body.body) {
    response.status(400).send("Entries must have a title and a body.");
    return;
    }
    entries.push({ // store it
    title: request.body.title,
    content: request.body.body,
    published: new Date()
    });
    response.redirect("/guestbook"); // where to go next? Let's go to the home page :)
    });
app.post("/contact", function (request, response) {
    var api_key = 'key-7a67a5b246eb731bbab887eb39df2622';
    var domain = 'sandbox1a0e654efdc34b69a9a372dbb11900f2.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
     
    var data = {
      from: 'Mail Gun <postmaster@sandbox1a0e654efdc34b69a9a372dbb11900f2.mailgun.org>',
      to: 's530667@nwmissouri.edu',
      subject: request.body.title,
      text: request.body.message
    };
     
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      if(!error)
        response.send("Mail sent!");
      else
        response.send("Mail not sent!");
    });
});
// 404
app.use(function (request, response) {
    response.status(404).render("404");
    });
// Listen for an application request on port 8081
server.listen(8081, function () {
 console.log('Guestbook app listening on http://127.0.0.1:8081/');
});
