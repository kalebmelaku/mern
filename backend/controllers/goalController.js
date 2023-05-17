const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel')


//@desc Get Goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) =>{
    const goals = await Goal.find()
    res.json({goals})
})

//@desc Set Goals
//@route POST /api/goals
//@access private
const setGoal = asyncHandler(async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please provide a text')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.json({goal})
})

//@desc Update Goals
//@route PUT /api/goals/:id
//@access private
const updateGoal = asyncHandler(async (req, res) =>{
    const id = req.params.id
    const goal = await Goal.findById(id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
        const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {new: true})
    
    res.json(updatedGoal)
})

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access private
const deletegoal = asyncHandler(async (req, res) =>{
    const id = req.params.id
    const goal = await Goal.findByIdAndDelete(id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
    await goal.remove()
    res.status(200).json({id: id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deletegoal,
}