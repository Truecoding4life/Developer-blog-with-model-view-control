const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

User.init(
    
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true,
    },
    last_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
      isAlphanumeric: true,
      allowNull: false,
      isAlphanumeric: true,
    },
  },

  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "user",
  }
);

module.exports = User;
