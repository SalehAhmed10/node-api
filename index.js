const express = require("express");
const app = express();
const importData = require('./data.json');

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

// // Home route
// app.get("/", (req, res) => {
//   res.send("Welcome to a basic express App");
// });

app.get("/" , (req, res) => {
    res.json(importData);
});




// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
