// * Libraries
import { StatusCodes } from 'http-status-codes'
import { createLeaderBoardScore, getLeadersScores } from '../services/index.js'

// * Services

export const CONTROLLER_LEADER_BOARD = {
  getAllLeadersList: async (req, res) => {
    const list = await getLeadersScores()
    return res.status(StatusCodes.OK).json(list)
  },

  createLeaderBoardScore: async (req, res) => {
    const bodyData = req.body
    const data = await createLeaderBoardScore(bodyData)
    return res.status(StatusCodes.CREATED).json(data)
  },
}
