// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
      {vin: 'efrge44g', make: 'Saturn', model: 'Wagon', mileage: 30000, title: 'mine', transmission: 'good'},
      {vin: '4gergersffs', make: 'Ford', model: 'Taurus', mileage: 444, title: 'yours', transmission: 'bad'},
      {vin: 'srgg44t3', make: 'VW', model: 'Bug', mileage: 1.5},
      {vin: 're5e5ye', make: 'Harley', model: 'Davidson', mileage: 67054},
    ])
  }