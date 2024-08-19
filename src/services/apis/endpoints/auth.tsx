// ============================================================
// API Auth
// ============================================================

import FetchExopods from '../fetch/FetchExopods'

export interface IAuthLogin {
  email: string
  password: string
}

// Login
// ===========================================

// export async function authLogin (data: IAuthLogin) {
//   return await FetchExopods('login', 'POST', data)
// }

// export async function authRegister (data: IAuthLogin) {
//   return await FetchExopods('register', 'POST', data)
// }

// export async function authLogout () {
//   return await FetchExopods('logout', 'POST')
// }


export async function fetchTest() {
  return await FetchExopods('user/profile', "GET")
}
