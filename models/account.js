/**
 * Created by Lookis (lookisliu@gmail.com) on 10/22/14.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  });

  return Account;
};