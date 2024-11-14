const events = require("express").Router();
const { Band, MeetGreet, Event, MusicSet } = require("../models");

events.get("/", async (req, res) => {
  try {
    const allEvents = await Event.findAll();
    res.json(allEvents);
  } catch (e) {
    res.send(e.message);
  }
});

events.get("/:id", async (req, res) => {
  try {
    const specificEvent = await Event.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: MeetGreet,
          as: "meetGreets",
        },
        {
          model: MusicSet,
          as: "sets",
        },
      ],
    });
    res.json(specificEvent);
  } catch (e) {
    res.send(e.message);
  }
});

events.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.json(newEvent);
  } catch (e) {
    res.send(e.message);
  }
});

events.put("/:id", async (req, res) => {
  try {
    const { name, start_time, end_time } = req.body;
    if (!name && !start_time && !end_time) {
      throw Error("No fields to update");
    }
    const [numUpdated] = await Band.update(
      { name, start_time, end_time },
      { where: { id: req.params.id } }
    );
    res.send(`Updated ${numUpdated} event(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

events.delete("/:id", async (req, res) => {
  try {
    const deleted = await Event.destroy({
      where: { id: req.params.id },
    });
    res.send(`Deleted ${deleted} event(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = events;
