import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginFormType, loginResponseDataType } from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
    }
  },
  actions: {
    // 用户登录
    async userLogin(data: loginFormType) {
      console.log(data)

      const res: loginResponseDataType = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token as string
        SET_TOKEN(this.token)
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {
    shit() {
      return 2
    },
  },
})
export default useUserStore
