/* const router = require("express").Router(); */
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  console.log("Hola");
  res.send("Hello");
});

// To use in indexjs we have to export this file
module.exports = router;
