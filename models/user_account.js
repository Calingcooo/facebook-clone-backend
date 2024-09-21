"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserAccount.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      })
    }
  }
  UserAccount.init(
    {
      user_account_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      access_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      refresh_token: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: "UserAccount",
      tableName: "user_accounts",
      createdAt: "created_date",
      updatedAt: "modified_date",
      timestamps: true,
    }
  );
  return UserAccount;
};
