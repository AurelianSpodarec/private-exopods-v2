import { getResponseContent, RequestError } from '../../requests'
import config from './config_exopods'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function FetchClocklance<T> (
  endpoint: string,
  method: HttpMethod,
  data?: unknown,
  refreshToken?: string,
  bearerToken?: string
): Promise<T> {

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (refreshToken) {
    headers['Cookie'] = `refresh=${refreshToken}`
  }

  // if (bearerToken) {
    // headers['Authorization'] = `Bearer ${bearerToken}`
    headers['Authorization'] = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik4teUh1eHFOeEt3Rk1IRU5zdFh2VSJ9.eyJpc3MiOiJodHRwczovL2Flc3RoaXNpYS51ay5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTM0NTkzMTM4MDQ4Nzk1MzQ5NjciLCJhdWQiOlsiaHR0cHM6Ly9hcGkuZXhvcG9kcy5jb20vIiwiaHR0cHM6Ly9hZXN0aGlzaWEudWsuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcyNDAxMTExNCwiZXhwIjoxNzI0MDk3NTE0LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXpwIjoiNHllUlo3MUFhd3hEeGJ4VldmQmpnTFgzallSNTU0WWoifQ.I8zVv0prThpWWWKez9nReplkDMaLFsj3pYYU34SHhCk9OyOFCYnRnjA4Xitv8-YjZjyGwVX8vt54o2vO8_DvjOqNy2lurymRKVtRJA7kVk4jj21b9OO2csTs2tP99XRnbevQXSq4cPlOT8wwlP406Dxz2n_tTnwNYSq8nUhKxlMYrG5uK7yEaEbdQI73or4izvzfWTPKle_SMyo8FUWs0XJZ05DyXBcY_yYJiUmGOzWcYeJkBZ0AxbdnAJijv1AVkJYH1M-FCYTJUuIk0FB8kALgsoay_LRywnke6Y-oIZIeCTBWLhEAdtHZ9dSBEyavNFGRNVAwIbnxBC3PVDlh3g`
  // }

  const response = await fetch(`${`https://api.exopods.com`}/${endpoint}`, {
    method,
    headers,
    body: method === 'GET' ? undefined : JSON.stringify(data)
  })

  const content = await getResponseContent(response) as T
  const cookies = response.headers.get('Set-Cookie')

  if(!response) {
    throw new RequestError(response.statusText, response.status, content)
  }
  return {...content, cookies}
}

export default FetchClocklance
