const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();

const cron = require("node-cron");

console.log(db);

const db = new sqlite3.Database("./users.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);

  console.log("connection successful");
});

app.use(express.json());

//routes
app.use(require("./Routes/getHackathons"));
app.use(require("./Routes/getDevelopers"));

app.listen(8080, () => {
  console.log(`Hackathon API listening at http://localhost:${8080}`);
});

//cron job
cron.schedule("*/5 * * * *", () => {
  console.log("running every 5 minutes");
});
