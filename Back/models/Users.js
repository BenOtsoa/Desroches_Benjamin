const Users = (sequelize, DataTypes) => {
  var Users = sequelize.define(
    "Users",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: {
            args: [6, 128],
            msg: "Email address must be between 6 and 128 characters in length"
          },
          isEmail: {
            msg: "Email address must be valid"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      name: {
        type: DataTypes.STRING,
        notEmpty: true,
        validate: {
          len: {
            args: 3,
            msg: "Name must be atleast 3 characters in length"
          }
        }
      },

      lastname: {
        type: DataTypes.STRING,
        notEmpty: true,
        validate: {
          len: {
            args: 3,
            msg: "Name must be atleast 3 characters in length"
          }
        }
      },

      active: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }
    },
    {
      tableName: "users"
    }
  );

  return Users;
};

module.exports = Users;
