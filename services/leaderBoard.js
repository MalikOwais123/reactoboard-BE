import { LeaderBoard } from '../models/index.js'

export const getLeadersScores = async (query = {}) => {
  // * get top 5 scores from the database based on the score and total time fields,
  // * and if there is a tie, sort by total time,
  // * in the end sort them in descending order
  const data = await LeaderBoard.find(query).sort({
    score: -1,
    totalTime: 1,
    name: 1,
    createdAt: -1,
  })
  // .limit(5) // * uncomment this line to limit the results to 5
  return data
}

export const createLeaderBoardScore = async (data) => {
  const newScore = await LeaderBoard.create(data)
  return newScore
}
