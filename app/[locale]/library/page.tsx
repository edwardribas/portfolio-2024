import { Divider } from "@/components/divider"
import { PageAnimation } from "@/components/page-animation"
import { Skeleton } from "@/components/ui/skeleton"
import { Introduction } from "@/sections/library/introduction"
import { Projects } from "@/sections/library/projects"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next/types"
import { Suspense } from "react"

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('library'),
    description: t('description')
  };
}

const Library = () => {
  return (
    <PageAnimation className="space-y-20">
      <Introduction />
      <Divider variant="gradient" />

      <Suspense fallback={(
        <div className="flex flex-wrap gap-6">
          <Skeleton className="h-[300px] min-w-64 flex-1 rounded-[40px]" />
          <Skeleton className="h-[300px] min-w-64 flex-1 rounded-[40px]" />
          <Skeleton className="h-[300px] min-w-64 flex-1 rounded-[40px]" />
          <Skeleton className="h-[300px] min-w-64 flex-1 rounded-[40px]" />
        </div>
      )}>
        <Projects />
      </Suspense>
    </PageAnimation>
  )
}

export default Library
