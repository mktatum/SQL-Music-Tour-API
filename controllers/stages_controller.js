const stages = require("express").Router();
const { Stage, Event, MusicSet } = require("../models");

stages.get("/", async (req, res) => {
  try {
    const allStages = await Stage.findAll();
    res.json(allStages);
  } catch (e) {
    res.send(e.message);
  }
});

stages.get("/:id", async (req, res) => {
  try {
    const specificStage = await Stage.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: MusicSet,
          as: "sets",
        },
        {
          model: Event,
          as: "events",
        },
      ],
    });
    res.json(specificStage);
  } catch (e) {
    res.send(e.message);
  }
});

stage.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.json(newStage);
  } catch (e) {
    res.send(e.message);
  }
});

stages.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw Error("No fields to update");
    }
    const [numUpdated] = await Stage.update(
      { name },
      { where: { id: req.params.id } }
    );
    res.send(`Updated ${numUpdated} stage(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

stages.delete("/:id", async (req, res) => {
  try {
    const deleted = await Stage.destroy({
      where: { id: req.params.id },
    });
    res.send(`Deleted ${deleted} stage(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = stages;
