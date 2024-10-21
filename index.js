const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/api", (req, res) => res.send("API on Vercel"));

module.exports = app;
