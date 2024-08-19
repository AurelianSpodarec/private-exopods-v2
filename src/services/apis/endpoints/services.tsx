// ============================================================
// API User
// ============================================================
import FetchExopods from "../fetch/FetchExopods"

// User
// ============================================================

export async function getServiceSinglePod(id:string) {
  return await FetchExopods(`kube/list-container/${id}`, "GET",)
}

export async function getServiceAllPod() {
  return await FetchExopods('kube/list-container', "GET")
}
