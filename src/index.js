const express = require("express");
const app = express();
const router = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(3000);

console.log("server on poot 3000");
