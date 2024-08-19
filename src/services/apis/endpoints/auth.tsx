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

export async function fetchTest() {
  return await FetchExopods('user/profile', "GET")
}
