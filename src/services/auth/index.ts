import BaseHttpService from '../base-http.service'

interface ICredential {
  username: string
  password: string
}
class AuthService extends BaseHttpService {
  async onLogin(credential: ICredential) {
    const response = await this.login(credential)
    if (response?.data) {
      return response.data
    }
  }

  async logout() {
    const endpoint = `api/v1/user-management/users/logout`
    const response = await this.post(endpoint)
    if (response?.data) {
      return response.data
    }
  }
}

export default new AuthService()
