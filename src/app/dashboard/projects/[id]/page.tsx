'use client'

import { getServiceSinglePod } from "@/services/apis/endpoints/services"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"

function PageSingleProject() {
  const { id } = useParams()

  console.log(id)
  const dataQuery = useQuery({
    queryKey: [`services/${id}`],
    queryFn: async () => await getServiceSinglePod(id)
  })

  const item = dataQuery?.data?.data
  console.log(item)

  if (!item) return
  return (
    <div>
      Project Single
    </div>
  )
}

export default PageSingleProject
