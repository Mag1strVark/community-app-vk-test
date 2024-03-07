import axios, { AxiosError, AxiosResponse } from 'axios'
import config from '../../config.ts'
import { IHTTPErrorResponse, IHTTPSuccessResponse } from './http.types.ts'
import eventBus from '../eventBus'

const http = axios.create({
  baseURL: config.API_URL,
  withCredentials: true,
})

export const handleHttpResponse = <T extends any>(
  response: AxiosResponse<T>
): IHTTPSuccessResponse<T> => {
  return { status: 'success', body: response.data }
}

export const handleHttpError = (error: AxiosError): IHTTPErrorResponse => {
  if (error?.response?.status === 404) {
    eventBus.emit('http.error', {
      message: 'Запрашиваемый ресурс не найден',
      code: error?.response?.status,
    })
  }

  const message = 'Произошла непредвиденная ошибка'
  eventBus.emit('http.error', { message, code: error?.response?.status })

  return {
    status: 'error',
    message: error?.message,
    code: error?.response?.status,
  }
}

export default http
