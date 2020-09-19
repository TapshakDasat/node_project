// const http = require("http");
// const fs = require("fs");
const express = require("express");
const app = express();
const logger = require("morgan");
const port = 33000;
const hostname = "127.0.0.1";

//configuring logger
app.use(logger("dev"));

/*========================= 
SETTING UP EXPRESS SERVER
===========================*/
const path = require("path");
// SETTING UP TING ENGINE
app.set("view engine", "ejs");
//setting up path to public or static files
app.use(express.static(path.join(__dirname, "public")));
//express body parser
app.use(express.urlencoded({extended: true}));

/*================================
Creating an EJS route
================================== */
app.get("/", (req, res) => {
    res.render("home",{
        tutorName: "Law",
        studentName: "Taps"
    });
});

/*===========================
CREATING A BASIC ROUTE
============================= */

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html")
// })


/*==========================
CREATING A BASIC HTTP SERVER
============================*/
// const server = http.createServer((req, res) => {
//     console.log("made a request :" + req.url)
//     if(req.url === "/home" || req.url === '/') {
//         res.writeHead(200, {
//             "Content-Type": "text/html"
//         });
//         fs.createReadStream(__dirname + "/index.html").pipe(res);
//     }else if(req.url === "/about"){
//         res.writeHead(200, {
//             "Content-Type": "text/html"
//         });
//         fs.createReadStream(__dirname + "/about.html").pipe(res);
//     }
//     res.writeHead(200, {"Content-Type": "text/html"});
//     const home = fs.createReadStream(__dirname + "/index.html", "utf8");
//     home.pipe(res)
// });

app.listen(33000, hostname,() => {
    console.log(`server is on at http://${hostname}:${port}`);
})