const express = require("express");
const router = express.Router();

// CRUD
router.get("/Get", (req, res) => {
  console.log("ShowTransaction");
  res.send("ShowTransaction");
});

router.post("/AddTransaction", (req, res) => {
  console.log("Add Transaction");
  res.send("Add Transaction");
});

router.put("/EditTrasaction", (req, res) => {
  console.log("EditTrasaction");
  res.send("Edit Trasaction");
});

router.delete("/DeleteTrasaction", (req, res) => {
  console.log("DeleteTrasaction");
  res.send("Delet eTrasaction");
});

// To use in indexjs we have to export this file
module.exports = router;
