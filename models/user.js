const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        first_Name:{
            type:DataTypes.INTEGER,
            allowNull: false,
            isAlphanumeric:true,
        },
        last_Name:{
            type:DataTypes.INTEGER,
            allowNull: false,
            isAlphanumeric:true,
        },
        email:{
            type:DataTypes.INTEGER,
            allowNull: false,
            isEmail:true,
        },
        password:{
            type:DataTypes.INTEGER,
            allowNull: false,
            isAlphanumeric:true,
        },
    },
    sequelize,
    {
        timestamps:true,
        freezeTableName:true,
        underscored:false,
        modelName:'user',
    }
)

module.exports = User;