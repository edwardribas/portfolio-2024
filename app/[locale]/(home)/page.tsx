import { PageAnimation } from "@/components/page-animation"
import { About } from "@/sections/home/about"
import { Curriculum } from "@/sections/home/curriculum"
import { Hero } from "@/sections/home/hero"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next/types"

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('home'),
    description: t('description')
  };
}

const Home = ({ params: { locale }}: { params: { locale: string }}) => {

  return (
    <PageAnimation className="space-y-[110px]">
      <Hero />
      <Curriculum locale={locale} />
      <About />
    </PageAnimation>
  )
}

export default Home
