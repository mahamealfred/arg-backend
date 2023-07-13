const {v4} =require('uuid');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id:v4(),
      fullName: 'Mahame Alfred',
      email: 'mahame@admin.com',
      password:'$2a$10$6//9CmG4NV13fO/KGreC7uejlgaY3i16FuAMmAX7wyuPSi.y4lqYa',
      isActive:false,
      role:'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};