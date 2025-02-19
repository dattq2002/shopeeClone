import { User } from './user.type'
import { ResponseAPI } from './util.type'

export type AuthResponse = ResponseAPI<{
  access_token: string
  expires: string
  user: User
}>
