const music_sets = require("express").Router();
const { Band, Event, MusicSet } = require("../models");

music_sets.get("/", async (req, res) => {
  try {
    const allMusicSets = await MusicSet.findAll();
    res.json(allMusicSets);
  } catch (e) {
    res.send(e.message);
  }
});

music_sets.get("/:id", async (req, res) => {
  try {
    const specificMusicSet = await MusicSet.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Band,
          as: "band",
        },
        {
          model: Stage,
          as: "stage",
        },
        {
          model: Event,
          as: "event",
        },
      ],
    });
    res.json(specificMusicSet);
  } catch (e) {
    res.send(e.message);
  }
});

music_set.post("/", async (req, res) => {
  try {
    const newMusicSet = await MusicSet.create(req.body);
    res.json(newMusicSet);
  } catch (e) {
    res.send(e.message);
  }
});

music_set.put("/:id", async (req, res) => {
  try {
    const { event_id, stage_id, band_id, start_time, end_time } = req.body;
    if (!event_id && !stage_id && !band_id && !start_time && !end_time) {
      throw Error("No fields to update");
    }
    const [numUpdated] = await MusicSet.update(
      { event_id, stage_id, band_id, start_time, end_time },
      { where: { id: req.params.id } }
    );
    res.send(`Updated ${numUpdated} music set(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

music_set.delete("/:id", async (req, res) => {
  try {
    const deleted = await MusicSet.destroy({
      where: { id: req.params.id },
    });
    res.send(`Deleted ${deleted} music set(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = music_set;
