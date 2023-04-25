import UserService from '../services/userService.js'
import { UserModel } from '../models/userModel.js'
export const registerController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!(email && password)) {
      res.status(400).send('All input is required')
    }

    const oldUser = await UserModel.findOne({ email })

    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login')
    }

    let user = await UserService.registerUser(email, password)

    return res.status(200).json({
      status: 'Success',
      data: user,
      message: 'User Register Successfully',
    })
  } catch (e) {
    return res
      .status(400)
      .json({ status: 'Failure', message: 'Failed To Register:( Try Again' })
  }
}

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body

    // Validate user input
    if (!(email && password)) {
      res.status(400).send('All input is required')
    }
    let register = await UserService.loginUser(email, password);
    return res.status(200).json({
      _id:register._id,
      email:register.email,
      token:register.token,
    })
  } catch (e) {
    return res
      .status(400)
      .json({ status: 'Failure', message: 'Login unSuccessfull' })
  }
}

export const allUserController = async (req, res) => {
  try {
    let allUsers
    allUsers = await UserService.getAllUsers()
    return res.status(200).json({
      status: 'Success',
      data: allUsers,
      message: 'List of all users',
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}


export const getGoals=(req,res)=>{
  res.status(200).json({"message":"success"});
}
