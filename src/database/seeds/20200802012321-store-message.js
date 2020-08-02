module.exports = {
  up: async (queryInterface) => {
    const data = [];

    for (let i = 1; i < 989; i += 1) {
      data.push({
        store: i,
        message: 'Chegou novo álcool em gel hidratante confira no corredor 6',
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    return queryInterface.bulkInsert('messages', data);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('messages', null, {}),
};
