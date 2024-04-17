import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

// @desc Update workout log completed
// @route PATCH /api/workouts/log/completed/:id
// @access Private

export const updateCompleteWorkoutLog = asyncHandler(async (req, res) => {
	const logId = +req.params.id
	try {
		const workoutLog = await prisma.workoutLog.update({
			where: {
				id: logId
			},
			data: {
				isCompleted: true
			}
		})
		res.json(workoutLog)
	} catch (e) {
		res.status(404)
		throw new Error('workout log time not found')
	}
})
