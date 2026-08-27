const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // GET Route
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(`
            <html>
            <head>
                <title>Student Records</title>
            </head>

            <body>

                <h1>Student Record Management</h1>

                <form method="POST" action="/add">

                    <label>Student Name:</label>
                    <input type="text" name="name" required>
                    <br><br>

                    <label>Roll Number:</label>
                    <input type="text" name="roll" required>
                    <br><br>

                    <label>Course:</label>
                    <input type="text" name="course" required>
                    <br><br>

                    <label>Email:</label>
                    <input type="email" name="email" required>
                    <br><br>

                    <button type="submit">Add Student</button>

                </form>

                <br>

                <a href="/students">View Students</a>

            </body>
            </html>
        `);
  }

  // POST Route
  else if (req.method === "POST" && req.url === "/add") {
    let body = "";

    req.on("data", (data) => {
      body += data.toString();
    });

    req.on("end", () => {
      const data = new URLSearchParams(body);

      const student = {
        name: data.get("name"),
        roll: data.get("roll"),
        course: data.get("course"),
        email: data.get("email"),
      };

      try {
        let students = [];

        if (fs.existsSync("students.json")) {
          students = JSON.parse(fs.readFileSync("students.json", "utf8"));
        }

        students.push(student);

        fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
      } catch (error) {
        console.log("File operation error:", error);
      }

      res.writeHead(302, {
        Location: "/students",
      });

      res.end();
    });
  }

  // Students Route
  else if (req.method === "GET" && req.url === "/students") {
    try {
      const data = fs.readFileSync("students.json", "utf8");

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(`
                <html>
                <head>
                    <title>Students</title>
                </head>

                <body>

                    <h1>Student Records</h1>

                    <pre>${data}</pre>

                    <br>

                    <a href="/">Add Student</a>

                </body>
                </html>
            `);
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/html",
      });

      res.end("<h1>Error reading students file</h1>");
    }
  }

  // Invalid Route
  else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });

    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
