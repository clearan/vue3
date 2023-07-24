export interface loginFromType {
  username: string
  password: string
}

interface Token {
  token: string
}

export interface loginResponseDataType {
  code: number
  data: Token
}
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface User {
  checkUser: userInfo
}

export interface userResponseDataType {
  code: number
  data: User
}
