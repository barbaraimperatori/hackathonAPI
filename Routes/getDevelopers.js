const express = require("express");

const router = express.Router();

const bestDevelopers = require("../db.json");

router.get("/hackathons/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let response = bestDevelopers.find((item) => item.id == id);
  res.status(200).json(response);
});

module.exports = router;
