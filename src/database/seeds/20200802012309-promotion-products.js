module.exports = {
  up: async (queryInterface) => {
    const data = [];

    for (let i = 1; i < 989; i += 1) {
      data.push({
        store: i,
        product: 'Cerveja Hoegaarden',
        price: 7.99,
        promotional_price: 4.99,
        created_at: new Date(),
        updated_at: new Date(),

      });
      data.push({
        store: i,
        product: 'Picanha Montana',
        price: 61.99,
        promotional_price: 49.99,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    return queryInterface.bulkInsert('promotions', data);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('promotions', null, {}),
};
