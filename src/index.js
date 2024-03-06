require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { add } = require("./arithmetica");
const app = express();
app.use(cors());
// const port = 3000;

// if (!process.env.PORT) {
//   throw new Error("please specify port number");
// }

const port = process.env.PORT;

app.get("/", (req, res) => {
  // sends html
  res.send("Arithmetic Service - last updated 3/4/2022");
});

app.get("/add/:n/:m", (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let sum = add(n, m);

  res.json(sum);

  // res.json(Number(req.params.n) + Number(req.params.m));
});

app.get("/subtract/:n/:m", (req, res) => {
  res.json(Number(req.params.n) - Number(req.params.m));
});

app.get("/multiply/:n/:m", (req, res) => {
  res.json(Number(req.params.n) * Number(req.params.m));
});

app.get("/divide/:n/:m", (req, res) => {
  res.json(Number(req.params.n) / Number(req.params.m));
});

app.listen(port);
