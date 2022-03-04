const mongoose = require("mongoose");

const flightPathSchema = new mongoose.Schema({
  flightPath: {
    startingPoint: String,
    endPoint: String,
  },
});
const timetableSchema = new mongoose.Schema({
  flightPath: [flightPathSchema],
  businessHours: {
    startHours: String,
    endHours: String,
  },
  reservationsLeft: Number,
  dayOfTheWeek: String,
});

const Timetable = mongoose.model("timetable", timetableSchema);
module.exports = Timetable;
