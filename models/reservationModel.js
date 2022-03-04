const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  flightPath: {
    startingPoint: String,
    endPoint: String,
  },
  dayOfTheWeek: {
    type: String,
    required: [
      true,
      "Please enter on which day of the week the flight will take place",
    ],
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);
module.exports = Reservation;
