'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    picPost: DataTypes.STRING,
    caption: DataTypes.TEXT,
    userID: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    models.post.belongsTo(models.user)
    models.post.belongsToMany(models.tag, {
      through: 'tag_post',
      onDelete: 'CASCADE'
    })
  };
  return post;
};