"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event }) {
      // define association here
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });
    }
  }
  MeetGreet.init(
    {
      event_id: DataTypes.INTEGER,
      band_id: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "MeetGreet",
    }
  );
  return MeetGreet;
};
