/* Declare Express */
const express = require("express");

// And run it.
const app = express();

//Module that loads environment variables from a .env file into process.env.
require('dotenv').config({path: "./config/config.env"});

// NOT NECESSARY YET --> Create a static server for files like css, js and images TO USE IN public folder. 
app.use(express.static("public"));

// App port.
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port  ${PORT}! 🎉`));

