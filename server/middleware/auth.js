import jwt from 'jsonwebtoken'

const config = process.env

const verifyToken = (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.status(403).send('A token is required for authentication')
    }
    try {
      const decoded = jwt.verify(token, config.TOKEN_KEY)
      req.user = decoded
      next()
    } catch (err) {
      return res.status(401).json({ status: 'No Authorization' })
    }
  } else {
    return res.status(401).json({ status: 'No Authorization, No Token' })
  }
}

export default verifyToken
