import { apiRequestBuilder } from '@/utils'
interface ICredential {
  username: string
  password: string
}
export const AuthService = {
  login: async (credential: ICredential) => {
    const call = apiRequestBuilder.setUrl('/api/v1/user-management/users/login')
    const { data } = await call.create({ data: credential })
    return data
  },

  logout: async () => {
    const call = apiRequestBuilder.setUrl('api/v1/user-management/users/logout')
    const { data } = await call.create()
    return data
  },

  saveToken(token: string) {
    return localStorage.setItem('accessToken', token)
  },

  removeToken() {
    localStorage.removeItem('accessToken')
  },

  getToken() {
    return localStorage.getItem('accessToken')
  }
}
