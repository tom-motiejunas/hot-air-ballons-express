const mongoose = require("mongoose");

const flightPathSchema = new mongoose.Schema({
  flightPath: {
    startingPoint: String,
    endPoint: String,
  },
});
const daySchema = new mongoose.Schema({
  flightPath: [flightPathSchema],
  businessHours: {
    startHours: String,
    endHours: String,
  },
  dayOfWeek: String,
});
const timetableSchema = new mongoose.Schema({
  timetableDates: [daySchema],
});

const Timetable = mongoose.model("timetable", timetableSchema);
module.exports = Timetable;
