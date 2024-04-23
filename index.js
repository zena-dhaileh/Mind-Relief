require("dotenv").config();
const axios = require("axios");
const express = require("express");
const multer = require("multer");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");
const app = express();
const cors = require("cors");
const path = require("path");
const userRoute = require("./routes/userRoute");
const mindRoute = require("./routes/breathRoute");
const spaceRoute = require("./routes/spaceRoute");
const journalRoute = require("./routes/journalRoute");
const appoinmentSettingsRoute = require("./routes/appointmentSettingsRoute");
const doctorRoute = require("./routes/doctorRoute");
const appointmentRoute = require("./routes/appointmentRoute");
const moodtrackerRoute = require("./routes/moodtrackRoute");
const podcastRoute = require("./routes/podcastRoute");

app.use(cors());
app.use(express.json());

app.use("/public/pod", express.static(path.join(__dirname, "public", "pod")));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use("/api/v1/breath", mindRoute);
app.use("/api/v1/space", spaceRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/journal", journalRoute);
app.use("/api/v1/appointmentSettings", appoinmentSettingsRoute);
app.use("/api/v1/doctor", doctorRoute);
app.use("/api/v1/appointment", appointmentRoute);
app.use("/api/v1/moodtrack", moodtrackerRoute);
app.use("/api/v1/podcast", podcastRoute);
app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
