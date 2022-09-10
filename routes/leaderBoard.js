// * Libraries
import { Router } from 'express'

// * Controllers
import { CONTROLLER_LEADER_BOARD } from '../controllers/index.js'

const router = Router()

//? @route  GET  /api/leader-board
//? @desc   Get all leader board
//? @access Public
router.get('/leader-board', CONTROLLER_LEADER_BOARD.getAllLeadersList)

//? @route  POST  /api/leader-board
//? @desc   Create new leader-board
//? @access Public
router.post('/leader-board', CONTROLLER_LEADER_BOARD.createLeaderBoardScore)

export default router
