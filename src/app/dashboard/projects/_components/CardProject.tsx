import Link from "next/link"
import { IContainer } from "@/interfaces/container"

function GitHubTag({ name, url }: { name: string, url: string }) {
  return (
    <Link href={url}>
      <svg aria-label="github" height="16" viewBox="0 0 14 14" width="16" style={{ flexShrink: 0 }}><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="var(--geist-foreground)" fill-rule="nonzero"></path></svg>
      {name}
    </Link>
  )
}

function CardProject({ item }: { item: IContainer }) {
  return (
    <div className="p-6 border rounded-lg shadow hover:bg-gray-100 bg-gray-800 border-gray-700 hover:bg-gray-700">

      <div className="flex items-center align-center space-x-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><mask id="mask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><circle cx="24" cy="24" r="24" fill="#000" /></mask><g mask=""><circle cx="24" cy="24" r="23.2" fill="#000" stroke="#000" stroke-width="1.6" /><path d="M39.8687 42.0055L18.4378 14.4H14.3999V33.592H17.6302V18.5023L37.333 43.9587C38.222 43.3637 39.069 42.7108 39.8687 42.0055Z" fill="url(#gradient0)" /><rect x="30.6667" y="14.4" width="3.2" height="19.2" fill="url(#gradient1)" /></g><defs><linearGradient id="gradient0" x1="29.0666" y1="31.0667" x2="38.5332" y2="42.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></linearGradient><linearGradient id="gradient1" x1="32.2667" y1="14.4" x2="32.2132" y2="28.5001" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></linearGradient></defs></svg>
        </div>
        <div className="flex flex-col">
          <Link href={`/dashboard/projects/${item.container._id}`} className="font-bold">
            {item.container.container_name}
          </Link>
          <Link href="https://exopods.com/services">
            {item.container.subdomain}
          </Link>
          <GitHubTag name="UserRepository/repo-name" url="https://github.com/Aesthisia/exopods-v2-ui/blob/main/src/views/pages/Home/HomeIndex.tsx" />
        </div>
      </div>
      {/* <{item.container.image} */}

      {/* {item.revisions[0].last_updated} */}
      {/* {item.revisions[0].port} */}

      {item.status}
    </div>
  )
}

export default CardProject
