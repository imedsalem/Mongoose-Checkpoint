const express = require("express");
const connectDB = require("./connectDB/connectDB");
const app = express();

connectDB();
app.use(express.json());

app.use("/persons", require("./routes/PersonRoutes"));

const port = 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`Example app listening on port ${port}!`)
);
