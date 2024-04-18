import { ProfilePicture } from "@/components/profile-picture"
import { useTranslations } from "next-intl"

export const Hero = () => {
  const t = useTranslations("Home")

  return (
    <section className="w-full space-y-8">
      <ProfilePicture className="mx-auto" />

      <div className="text-p-muted-foreground mx-auto w-full max-w-[580px] space-y-3.5 text-center text-[15px] leading-6">
        <div className="space-y-2.5">
          <p className="leading-normal">
            {/* Oi! Eu me chamo */}
            {t("title")}
          </p>
          <h1 className="text-p-foreground text-[28px] font-semibold leading-[normal]">
            Eduardo Ribas
          </h1>
        </div>

        <p className="leading-6">
          {t('description')}
        </p>
      </div>
    </section>
  )
}
