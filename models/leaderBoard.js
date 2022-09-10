import { Schema, model } from 'mongoose'

export const leaderBoardSchema = new Schema(
  {
    name: String,
    score: Number,
    totalTime: Number,
  },
  { versionKey: false, timestamps: true },
)

leaderBoardSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id
  },
})

export const LeaderBoard = model('LeaderBoardSchema', leaderBoardSchema)
