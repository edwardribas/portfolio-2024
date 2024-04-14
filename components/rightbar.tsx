import Image from "next/image"
import { MenuLink } from "./menu-link"

export const RightBar = () => {
  return (
    <aside className="border-p-border sticky top-0 flex h-dvh flex-col items-center justify-center border-l px-5 py-[30px]">
      <nav className="flex flex-col gap-6">
        <MenuLink
          href="https://www.instagram.com/edwardb.as/"
          alt="Acessar meu perfil no Instagram"
          tooltip="Instagram"
          tooltipDirection="left"
        >
          <Image
            src="/icons/brand-instagram.svg"
            width={24}
            height={24}
            alt="Logo do Instagram"
          />
        </MenuLink>

        <MenuLink
          href="https://github.com/edwardribas/"
          alt="Acessar meu perfil no Github"
          tooltipDirection="left"
          tooltip="Github"
        >
          <Image
            src="/icons/brand-github.svg"
            width={24}
            height={24}
            alt="Logo do Github"
          />
        </MenuLink>

        <MenuLink
          href="https://www.instagram.com/edwardb.as/"
          alt="Acessar meu perfil no LinkedIn"
          tooltip="LinkedIn"
          tooltipDirection="left"
        >
          <Image
            src="/icons/brand-linkedin.svg"
            width={24}
            height={24}
            alt="Logo do LinkedIn"
          />
        </MenuLink>
      </nav>
    </aside>
  )
}

// translate this page
