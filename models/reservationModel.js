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
  flightDate: {
    type: Date,
    required: [true, "Please enter the day the flight will take place"],
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);
module.exports = Reservation;
