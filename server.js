const express = require("express");
const app = express();

app.use(express.json());

//routes
app.use(require("./Routes/getHackathons"));
app.use(require("./Routes/getDevelopers"));

app.listen(8080, () => {
  console.log(`Hackathon API listening at http://localhost:${8080}`);
});
