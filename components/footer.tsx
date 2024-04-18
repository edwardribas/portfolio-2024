import { useTranslations } from "next-intl"
import Link from "next/link"

const CREDITS_URL = "https://darkmate.framer.website/contact"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('Footer')

  return (
    <footer className="border-p-border mt-[110px] flex flex-col items-center justify-center gap-1 border-t px-4 py-10">
      <p className="text-p-foreground text-center text-sm">
        &copy; {currentYear}. Eduardo Ribas
      </p>

      <Link
        href={CREDITS_URL}
        className="text-p-muted-foreground text-center text-sm underline"
      >
        {t('inspiration')}
      </Link>
    </footer>
  )
}
