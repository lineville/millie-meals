const Sequelize = require('sequelize')
const pkg = require('../../package.json')
const pwd = require('../../secrets')

const databaseName = pkg.name // + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(databaseName, 'lineville', 'Bazel2()', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
