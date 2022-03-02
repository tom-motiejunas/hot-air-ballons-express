const express = require("express");
const router = express.Router();

const timetableController = require("../controllers/timetableController");

router.get(
  "/getDayOfWeekTimetable/:dayOfTheWeek",
  timetableController.getDayOfWeekTimetable
);
router.get("/getTimetable", timetableController.getTimetable);

module.exports = router;
