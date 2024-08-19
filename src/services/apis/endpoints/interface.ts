export interface IApiResponse<T> {
  message: string
  status: boolean
  data: T
  cookies?: null | string
}
