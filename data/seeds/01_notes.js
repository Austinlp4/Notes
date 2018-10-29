
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, title: 'Take out the garbagio', content: 'Put it in the dumpster'},
        {id: 2, title: 'Play Red Dead Redemption 2', content: 'Take out the Pinkertons'},
        {id: 3, title: 'Keep playing Red dead', content: 'This game is way too big'}
      ]);
    });
};
