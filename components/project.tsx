import Link from "next/link"
import Card from "./card"
import { Button } from "./ui/button"
import { Eye, Github } from "lucide-react"

type ProjectProps = {
  title: string
  description: string
  demoUrl?: string
  repositoryUrl?: string
}

const Project = ({ description, title, demoUrl, repositoryUrl, }: ProjectProps) => {
  return (
    <Card>
      <div>
        {demoUrl
          ? (
            <Link href={demoUrl} className="text-foreground underline underline-offset-2">
              {title}
            </Link>
          )
          : (
            <h3 className="text-foreground">
              {title}
            </h3>
          )
        }

        <p className="text-muted-foreground leading-[150%]">
          {description}
        </p>
      </div>

      {(demoUrl || repositoryUrl) && (
        <div>
          <Button variant="outline" asChild>
            <Link href={demoUrl ?? '/'} target="_blank">
              <Eye /> Demo
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href={repositoryUrl ?? '/'} target="_blank">
              <Github /> Github
            </Link>
          </Button>
        </div>
      )}
    </Card>
  )
}

export default Project