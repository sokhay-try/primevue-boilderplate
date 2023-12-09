import { ApiRequestBuilder } from 'axios-client-api'

const apiRequestBuilder = new ApiRequestBuilder({
  baseURL: import.meta.env.VITE_APP_BACKEND_ADDR
})

apiRequestBuilder.axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  config.headers['Authorization'] = token ? `Bearer ${token}` : ''
  return config
})

export { apiRequestBuilder }
