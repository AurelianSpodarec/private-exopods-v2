// ============================================================
// API User
// ============================================================
import FetchExopods from "../fetch/FetchExopods"

// User
// ============================================================

// export async function getUserprofile (bearerToekn: string) {
//   return await FetchClocklance('users/profile', 'GET', undefined, undefined, bearerToekn)
// }

export async function getUserProfile() {
  return await FetchExopods('user/profile', "GET")
}
