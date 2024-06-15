import Image from "next/image"
import { LocalTime } from "./local-time"
import { useTranslations } from "next-intl"

export const Header = () => {
  const t = useTranslations('Header')

  return (
    <header className="border-p-border mb-[110px] border-b pb-10 pt-[50px] ">
      <div className="mx-auto flex w-full max-w-[980px] items-center justify-between px-[60px]">
        <div aria-labelledby="company" className="border-p-border flex items-center gap-2.5 rounded-[18px] border px-4 py-3">
          <Image
            src="/icons/solar-suitcase-line-duotone.svg"
            width={24}
            height={24}
            className="size-6"
            alt={t('suitcase-icon-alt')}
          />

          <p id="company" aria-label={t('current-company-alt')} className="text-p-foreground text-sm leading-[normal]">
            Tecnologia Única
          </p>
        </div>

        <div className="flex items-center gap-5">
          <p className="text-p-muted-foreground text-sm">
            {t('time-label')}
          </p>
          
          <LocalTime />
        </div>
      </div>
    </header>
  )
}
