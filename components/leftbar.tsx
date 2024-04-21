import { ProfilePicture } from "./profile-picture"
import { MenuLink } from "./menu-link"
import Image from "next/image"
import { OptionalClassProps } from "@/types/utils.types"
import { cn } from "@/lib/utils"
import { LanguageSwitch } from "./language-switch"
import { useTranslations } from "next-intl"

export const LeftBar = ({ className }: OptionalClassProps) => {
  const t = useTranslations('Sidebar')

  return (
    <aside
      className={cn(
        "border-p-border sticky top-0 flex h-dvh flex-col items-center justify-between border-r px-5 py-[30px]",
        className
      )}
    >
      <ProfilePicture size={60} className="border-[5px]" />
      <nav className="flex flex-col gap-6">
        <MenuLink href="/" tooltip={t('home')} alt={t('home-alt')}>
          <Image
            className="size-6"
            src="/icons/solar-round-user-duotone.svg"
            width={24}
            height={24}
            alt={t('home-icon-alt')}
          />
        </MenuLink>

        <MenuLink
          href="/library"
          tooltip={t('library')}
          alt={t('library-alt')}
        >
          <Image
            src="/icons/solar-folder-duotone.svg"
            width={24}
            height={24}
            className="size-6"
            alt={t('library-icon-alt')}
          />
        </MenuLink>
      </nav>

      <LanguageSwitch
        translations={{
          globeAlt: t('global-icon-alt'),
          languageSwitchButtonAlt: t('locale-alt'),
          switchToEnglishAlt: t('switch-to-en'),
          switchToPortugueseAlt: t('switch-to-pt')
        }}
      />
    </aside>
  )
}
