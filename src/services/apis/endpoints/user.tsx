// ============================================================
// API User
// ============================================================
import { IUser } from "@/interfaces/user";
import { IApiResponse } from "./interface";
import FetchExopods from "../fetch/FetchExopods"

// User
// ============================================================

export async function getUserProfile(): Promise<IApiResponse<IUser>> {
  return await FetchExopods('user/profile', "GET")
}
