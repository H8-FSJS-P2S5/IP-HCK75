'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plant.belongsTo(models.Type, {foreignKey: "type"})
    }
  }
  Plant.init({
    name:  {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"Name is required"
      },
      notEmpty:{
        msg:"Name is required"
      }
    }},
    type:  {
      type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
      notNull:{
        msg:"type is required"
      },
      notEmpty:{
        msg:"type is required"
      }
    }},
    watersNeeds:  {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"watersNeeds is required"
      },
      notEmpty:{
        msg:"watersNeeds is required"
      }
    }},
    lightNeeds:  {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"lightNeeds is required"
      },
      notEmpty:{
        msg:"lightNeeds is required"
      }
    }},
    temperatureRange: {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"temperatureRange is required"
      },
      notEmpty:{
        msg:"temperatureRange is required"
      }
    }},
    soilType:  {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{
        msg:"soilType is required"
      },
      notEmpty:{
        msg:"soilType is required"
      }
    }},
    imageUrl:  {
      type:DataTypes.TEXT,
    allowNull:false,
    validate:{
      notNull:{
        msg:"soilType is required"
      },
      notEmpty:{
        msg:"soilType is required"
      }
    }}
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};