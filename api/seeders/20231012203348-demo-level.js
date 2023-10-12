module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Levels', [
      {
        description_level: 'basic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description_level: 'intermediate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description_level: 'advanced',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Levels', null, {})
  }
}
