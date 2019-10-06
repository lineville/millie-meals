'use strict'

const db = require('../server/db')
const {User, Product, Size, ProductSize} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const users = await Promise.all([
    User.create({email: 'lineville@gmail.com', password: 'Bazel2()'})
  ])
  const products = await Promise.all([
    Product.create({
      name: 'Healthy Dog Food',
      price: 100,
      picture: '/pictures/millie.jpg'
    })
  ])
  const sizes = await Promise.all([
    Size.create({
      size: 7
    }),
    Size.create({
      size: 8
    }),
    Size.create({
      size: 9
    }),
    Size.create({
      size: 10
    }),
    Size.create({
      size: 11
    }),
    Size.create({
      size: 12
    })
  ])
  const inventoryWithSize = await Promise.all([
    ProductSize.create({
      inventory: 0,
      size: 7,
      productId: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${sizes.length} sizes`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
