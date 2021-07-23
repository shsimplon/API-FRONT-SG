"use strict";
const { Model } = require("sequelize");

const recette = require('./recette')


module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      this.hasMany(models.recette, { foreignKey: "userId", as: "recettes",});

    }
  }
  user.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
    //     validate:{
    //       isEmail: {
    //         args: true,
    //         msg: 'The email you entered is invalid or is already in our system.'
    //     },
    //     max: {
    //         args: 254,
    //         msg: 'The email you entered is invalid or longer than 254 characters.'
    //     }  
    // }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
     
    },
    
    {
      sequelize,
      modelName: "user",
    }
    
  );
  return user;
};
