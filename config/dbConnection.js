import mongoose from 'mongoose'

export const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  maxPoolSize: 1000,
}

const DB = process.env.MONGO_STRING.replace(
  '<PASSWORD>',
  process.env.MONGO_PASSWORD,
)

export const connectMongoDB = () => {
  mongoose.connect(DB, mongodbOptions)
  const db = mongoose.connection

  db.on('error', console.error.bind(console, '[❌ database] Connection error'))
  db.once('open', async function () {
    console.log('[🔌 database] Connected')
    // try {
    //   await seedData()
    // } catch (error) {
    //   console.error('[🌱 seeding] Error', error)
    // }
  })
}
