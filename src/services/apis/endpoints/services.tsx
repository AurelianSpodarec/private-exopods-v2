// ============================================================
// API User
// ============================================================
import { IContainer } from "@/interfaces/container"
import FetchExopods from "../fetch/FetchExopods"
import { IApiResponse } from "./interface"

// User
// ============================================================

export async function getServiceSinglePod(id: string): Promise<IApiResponse<IContainer>> {
  return await FetchExopods(`kube/list-container/${id}`, "GET",)
}

export async function getServiceAllPod(): Promise<IApiResponse<IContainer[]>> {
  return await FetchExopods('kube/list-container', "GET")
}
