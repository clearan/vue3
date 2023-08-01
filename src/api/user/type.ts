export interface loginFormType {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

export interface loginResponseDataType {
  code: number
  data: dataType
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
