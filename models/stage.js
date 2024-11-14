'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, StageEvent, MusicSet }) {
      Stage.belongsToMany(Event, {
        as: "events",
        through: StageEvent
      })
      Stage.hasMany(MusicSet, {
        foreignKey: "stage_id",
        as: "sets"
      })
    }
  }
  Stage.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};