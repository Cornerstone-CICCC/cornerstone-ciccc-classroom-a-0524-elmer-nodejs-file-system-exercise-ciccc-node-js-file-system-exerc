// Check the README.md file for instructions to the exercise

import http from "http";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "images", "veryhappydog.jpg");

//Read file
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


const server = http.createServer((req, res) => {
    if (req.url==="/view-image" && req.method === "GET") {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page not found</h1>");
    }
});

const PORT = 3001;


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});