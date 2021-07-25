'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'users',
      [
        {
          uuid: 'c0f70b3b-b2b1-4772-a886-70ba3d9fe99b',
          name: 'Kayla',
          email: 'kayla@email.com',
          role: 'super-admin',
          createdAt: '2021-07-25 22:10:18.768+05:30',
          updatedAt: '2021-07-25 22:10:18.768+05:30'
        },
        {
          uuid: 'c0f70b3b-b2b1-4785-a886-70ba3d9fe99b',
          name: 'Larry',
          email: 'larry@email.com',
          role: 'admin',
          createdAt: '2021-07-25 22:10:18.768+05:30',
          updatedAt: '2021-07-25 22:10:18.768+05:30'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
