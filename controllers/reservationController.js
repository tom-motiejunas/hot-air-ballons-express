const Reservation = require("../models/reservationModel");
const AppError = require("../utils/appError");

const reservationController = {};

reservationController.addReservation = async (req, res, next) => {
  try {
    const doc = await Reservation.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (err) {
    next(err);
  }
};

reservationController.deleteReservation = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const doc = await Reservation.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(204).json({
      data: { doc },
    });
  } catch (err) {
    next(err);
  }
};

reservationController.updateReservation = async (req, res, next) => {
  try {
    const doc = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      data: {
        doc,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = reservationController;
