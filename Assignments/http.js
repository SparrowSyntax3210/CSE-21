const http = require("http");
const fs = require("fs");

const data = "New changes";

fs.appendFile("student.txt", data, (err) => {
    if(err){
        console.log(err);
    }

    console.log("Changes added");

    fs.readFile("student.txt", "utf8", (err, fileData) => {
        if (err) throw err;

        console.log("Updated file:");
        console.log(fileData);

        const server = http.createServer((req, res) => {
            res.writeHead(200, {
                "Content-Type": "text/plain"
            });

            res.end(fileData);
        });

        server.listen(8000, () => {
            console.log("Server is running");
        });
    });
});