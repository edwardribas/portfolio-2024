import { useTranslations } from "next-intl"

export const About = () => {
  const t = useTranslations("Home")

  return (
    <section className="space-y-[18px] text-[15px]">
      <h1 className="text-p-foreground font-medium">
        {t('aboutTitle')}
      </h1>

      <div className="text-p-muted-foreground space-y-3">
        <p className="leading-6">
          {t('aboutTextParagraph1')}
        </p>

        <p className="leading-6">
          {t('aboutTextParagraph2')}

        </p>
      </div>
    </section>
  )
}
