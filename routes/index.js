import { Router } from 'express'
import leaderBoardRoutes from './leaderBoard.js'

const router = Router()

router.use('/', leaderBoardRoutes)

export default router
