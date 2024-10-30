"use strict";
// Check the README.md file for instructions to the exercise
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "images", "veryhappydog.jpg");
//Read file
fs_1.default.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/view-image" && req.method === "GET") {
        fs_1.default.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page not found</h1>");
    }
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
