const transactions = require("../routes/transactions");

module.exports = (app) => {
  app.use("/transactions", transactions);
};
