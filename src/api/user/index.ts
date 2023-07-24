import request from '@/utils/request'
import type {
  loginFromType,
  loginResponseDataType,
  userResponseDataType,
} from './type'

enum API {
  LOGIN_URL = '/user/login',
  USER_INFO_URL = '/user/info',
}

// 这里泛型的理解：在声明post函数那里，已经定义了它的泛型，如data是D，代表说调用post的时候传的data由调用时决定，
// 比如现在data传的时一个接口：loginFromType
export const reqLogin = (data: loginFromType) =>
  request.post<any, loginResponseDataType>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<any, userResponseDataType>(API.USER_INFO_URL)
