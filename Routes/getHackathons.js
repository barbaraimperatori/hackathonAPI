const express = require("express");

const router = express.Router();

const hackathonList = require("../hackathon.json");

router.get("/hackathons", (req, res) => {
  res.json(hackathonList);
});

module.exports = router;
