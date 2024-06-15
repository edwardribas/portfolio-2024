import Image from "next/image"
import { MenuLink } from "./menu-link"
import { OptionalClassProps } from "@/types/utils.types"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { DiscordMenuLink } from "./discord-menu-link"

export const RightBar = ({ className }: OptionalClassProps) => {
  const t = useTranslations('Sidebar')

  return (
    <aside
      className={cn(
        "border-p-border sticky top-0 flex h-dvh flex-col items-center justify-center border-l px-5 py-[30px]",
        className
      )}
    >
      <nav className="flex flex-col gap-6">
        <MenuLink
          href="https://www.instagram.com/edwardb.as/"
          alt={t('instagram-alt')}
          tooltip="Instagram"
          tooltipDirection="left"
        >
          <Image
            src="/icons/brand-instagram.svg"
            className="size-6"
            width={24}
            height={24}
            alt="Logo Instagram"
          />
        </MenuLink>

        <MenuLink
          href="https://github.com/edwardribas/"
          alt={t('github-alt')}
          tooltipDirection="left"
          tooltip="Github"
        >
          <Image
            src="/icons/brand-github.svg"
            className="size-6"
            width={24}
            height={24}
            alt="Logo Github"
          />
        </MenuLink>

        <MenuLink
          href="https://www.instagram.com/edwardb.as/"
          alt={t('linkedin-alt')}
          tooltip="LinkedIn"
          tooltipDirection="left"
        >
          <Image
            src="/icons/brand-linkedin.svg"
            width={24}
            className="size-6"
            height={24}
            alt="Logo LinkedIn"
          />
        </MenuLink>

        <DiscordMenuLink
          alt={t('discord-alt')}
          toastTitle={t('discord-copied-title')}
          toastDescription={t('discord-copied-description')}
        />
      </nav>
    </aside>
  )
}

// translate this page
