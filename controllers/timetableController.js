const Timetable = require("../models/timetableModel");
const AppError = require("../utils/appError");

const timetableController = {};

timetableController.getTimetable = async (req, res, next) => {
  try {
    const timetableFeatures = {
      query: await Timetable.find(),
      queryString: req.query,
    };

    const timetableDoc = await timetableFeatures.query;

    res.status(200).json({
      status: "success",
      data: {
        data: timetableDoc,
      },
    });
  } catch (err) {
    next(err);
  }
};

timetableController.getDayOfWeekTimetable = async (req, res, next) => {
  try {
    const timetableDoc = await Timetable.findOne({
      dayOfTheWeek: { $eq: req.params.dayOfTheWeek },
    });

    if (!timetableDoc) {
      return next(
        new AppError(
          404,
          "fail",
          "Couldnt find timetable from specified day of the week"
        )
      );
    }

    res.status(200).json({
      status: "success",
      data: timetableDoc,
    });
  } catch (err) {
    next(err);
  }
};

timetableController.updateDayOfWeekTimetable = async (req, res, next) => {
  try {
    const timetableDoc = await Timetable.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!timetableDoc) {
      return new AppError(404, "fail", "Couldnt find specified timetable");
    }
    res.status(200).json({
      status: "success",
      data: timetableDoc,
    });
  } catch (err) {}
};

module.exports = timetableController;
