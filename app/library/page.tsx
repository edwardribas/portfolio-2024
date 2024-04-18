import { Divider } from "@/components/divider"
import { PageAnimation } from "@/components/page-animation"
import { Introduction } from "@/sections/library/introduction"
import { Projects } from "@/sections/library/projects"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next/types"

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
      <Projects />
    </PageAnimation>
  )
}

export default Library
