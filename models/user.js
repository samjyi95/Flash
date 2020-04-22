'use strict';
let bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      validate: {
      len: {
        args: [1, 255],
        msg: 'Oh you don\'t have a first name?'
        }
      }
    },
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Please give a valid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 32],
          msg: 'Password must be 6 - 32 characters'
        }
      }
    },
    bio: DataTypes.TEXT,
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    pic: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: pendingUser => {
        //Hash the password
        let hashedPassword = bcrypt.hashSync(pendingUser.password, 12)

        // Reassign the hashed password (overwrite the plain text password)
        pendingUser.password = hashedPassword
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};