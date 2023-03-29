import axios, { AxiosResponse } from 'axios'
import { handleError } from './errors'

export const rmApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
})

rmApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: any) => {
    throw handleError(err)
  }
)
