'use client'

import { useQuery } from "@tanstack/react-query"

import { getServiceAllPod } from "@/services/apis/endpoints/services"
import CardProject from "./_components/CardProject"
import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"
import { Button } from "@/components/atoms/button"

function PageProjects() {

  const dataQuery = useQuery({
    queryKey: [`services`],
    queryFn: async () => await getServiceAllPod()
  })

  console.log(dataQuery.data)
  if (!dataQuery.data) return <></>
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-4xl font-bold">
            Page Servers
          </h1>
          <div className="flex items-center align-center justify-between">
            <div>
              <input placeholder="Search Project" />
            </div>
            <div className="flex items-center align-center">
              <div>
                Block/Grid
              </div>
              <Button>Create Server</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-4 gap-6">
            {dataQuery.data.data.map((project) => {
              return <CardProject key={project.uuid} item={project} />
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}

export default PageProjects
