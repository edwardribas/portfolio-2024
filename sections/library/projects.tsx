import { getProjects } from "@/actions/projects"
import { Divider } from "@/components/divider"
import { Project } from "@/components/project"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { use } from "react"

export const Projects = () => {
  const projects = use(getProjects())
  const t = useTranslations('Library')

  const highlightedProjects = projects.filter((project) => project.highlight)
  const otherProjects = projects.filter((project) => !project.highlight)

  return (
    <>
      {!!highlightedProjects.length && (
        <>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="bg-p-project-background grid size-16 place-items-center rounded-full">
                <Image
                  className="size-7"
                  src="/icons/solar-pin-circle-bold-duotone.svg"
                  width={24}
                  height={24}
                  alt={t('pin-icone-alt')}
                />
              </span>

              <h1 className="text-p-foreground text-lg">
                {t('highlight-title')}
              </h1>
            </div>

            <section className="flex flex-wrap gap-6">
              {highlightedProjects.map((project) => (
                <Project
                  key={project.id}
                  collapseAriaLabel={{
                    open: t('collapse-open'),
                    close: t('collapse-close'),
                    arrow: {
                      up: t('collapse-arrow-up'),
                      down: t('collapse-arrow-down')
                    }
                  }}
                  {...project}
                />
              ))}
            </section>
          </div>

          <Divider variant="gradient" />
        </>
      )}

      <section className="flex flex-wrap gap-6">
        {!otherProjects.length
          ? <p className="text-p-muted-foreground w-full text-center text-base">{t('no-projects')}</p>
          : otherProjects.map((project) => (
            <Project
              key={project.id}
              collapseAriaLabel={{
                open: t('collapse-open'),
                close: t('collapse-close'),
                arrow: {
                  up: t('collapse-arrow-up'),
                  down: t('collapse-arrow-down')
                }
              }}
              {...project}
            />
          ))
        }
      </section>
    </>
  )
}
