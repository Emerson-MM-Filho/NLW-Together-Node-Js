import { Request, Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization
  
  if(!authToken) {
    return response.status(401).end()
  }

  const [,token] = authToken.split(' ')

  try{
    const { sub } = verify(token, 'cfad0e07049c7c31d4c7bb2cdc8a0963') as IPayload
    
    request.user_id = sub

    return next()
  } catch {
    return response.status(401).end()
  }
}