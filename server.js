// DEPENDENCIES
const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

// DATABASE
const { sequelize } = require("./models");
// const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
const testSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// CONTROLLERS
const bandsController = require("./controllers/bands_controller");
app.use("/bands", bandsController);

const eventsController = require("./controllers/events_controller");
app.use("/events", eventsController);

// LISTEN
app.listen(process.env.PORT, async () => {
  await testSequelize();
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
