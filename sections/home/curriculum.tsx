import { Divider } from "@/components/divider"
import { Button } from "@/components/ui/button"
import { CurriculumProps } from "@/types/sections/home/curriculum.types"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export const Curriculum = ({ locale }: CurriculumProps) => {
  const t = useTranslations("Home")
  const curriculumDownloadLink = locale === 'pt'
    ? "/documents/curriculum-ribas.pdf"
    : "/documents/curriculum-ribas-english.pdf"

  return (
    <section className="text-p-muted-foreground flex flex-col text-[15px]">
      <Divider variant="gradient" />

      <Button asChild className="-mt-8 self-center">
        <Link
          prefetch={false}
          href={curriculumDownloadLink}
          target="_blank"
        >
          <Image
            src="/icons/solar-cloud-download-line-duotone.svg"
            width={24}
            height={24}
            alt={t('download-icon-alt')}
            className="size-6"
          />
          {t('download')}
        </Link>
      </Button>
    </section>
  )
}

// todo:
