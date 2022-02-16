const express = require("express");

const router = express.Router();

const bestDevelopers = require("../hackathon.json");

router.get("/hackathons/:id", (req, res) => {
  let { id } = req.params;
  let response = bestDevelopers.find((item) => item.id == id);
  console.log(response.bestDevelopers);
  res.status(200).json(response.bestDevelopers);
});

module.exports = router;
