const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const errorController = require("./controllers/errorController");
const mongoose = require("mongoose");

const reservationRouter = require("./routes/reservationRoutes");
const timetableRouter = require("./routes/timetableRoutes");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());

const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: "Too Many Request from this IP, please try again in an hour",
});
app.use("/api", limiter);
app.use(
  express.json({
    limit: "15kb",
  })
);

app.get("/", (req, res) => {
  res.send("data");
});

app.use("/api/reservations", reservationRouter);
app.use("/api/timetable", timetableRouter);

app.use(errorController.notFound);
app.use(errorController.internalServerError);

const database = "mongodb://127.0.0.1:27017/hot-air-ballons-db";

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB succesfully connected");
  });

app.listen(app.get("port"), () => {
  console.log(`App is listening on ${app.get("port")}`);
});
