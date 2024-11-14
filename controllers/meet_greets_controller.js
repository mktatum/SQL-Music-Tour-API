const meetGreets = require("express").Router();
const { Band, MeetGreet, Event, MusicSet } = require("../models");

meetGreets.get("/", async (req, res) => {
  try {
    const allMeetGreets = await MeetGreet.findAll();
    res.json(allMeetGreets);
  } catch (e) {
    res.send(e.message);
  }
});

meetGreets.get("/:id", async (req, res) => {
  try {
    const specificMeetGreet = await MeetGreet.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Band,
          as: "band",
        },
        {
          model: Event,
          as: "event",
        },
      ],
    });
    res.json(specificMeetGreet);
  } catch (e) {
    res.send(e.message);
  }
});

meetGreets.post("/", async (req, res) => {
  try {
    const newMeetGreet = await MeetGreet.create(req.body);
    res.json(newMeetGreet);
  } catch (e) {
    res.send(e.message);
  }
});

meetGreets.put("/:id", async (req, res) => {
  try {
    const { event_id, band_id, start_time, end_time } = req.body;
    if (!event_id && !band_id && !start_time && !end_time) {
      throw Error("No fields to update");
    }
    const [numUpdated] = await MeetGreet.update(
      { event_id, band_id, start_time, end_time },
      { where: { id: req.params.id } }
    );
    res.send(`Updated ${numUpdated} meet greet(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

meetGreets.delete("/:id", async (req, res) => {
  try {
    const deleted = await MeetGreet.destroy({
      where: { id: req.params.id },
    });
    res.send(`Deleted ${deleted} meet greet(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = meetGreets;
