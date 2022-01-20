// Require EXPRESS and run it.
const express = require("express");
const app = express();

// Export database
require("./config/db.config");

//Require that "dontenv" loads environment variables from the .env file into process.env.
require("dotenv").config({ path: "./config/config.env" });

//Routes ()
require("./config/routes.config")(app);

// App port.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port  ${PORT}! 🎉`
  )
);
