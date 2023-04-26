import { TaskModel } from '../models/taskModel.js'
const addTask = async (userId, taskName, taskNumber) => {
  const user = await TaskModel.create({
    taskName,
    taskNumber,
    userId
  })

  return user
}

const getAllTasks = async (id) => {
  const allTasks = await TaskModel.find({ userId: id })
  return allTasks
}
const deleteTask = async (id) => {
  await TaskModel.findByIdAndDelete({ id })
}
const TaskService = {
  addTask,
  getAllTasks,
  deleteTask
}
export default TaskService
