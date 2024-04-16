import { ProfilePicture } from "./profile-picture"
import { MenuLink } from "./menu-link"
import { Button } from "./ui/button"
import Image from "next/image"
import { OptionalClassProps } from "@/types/utils.types"
import { cn } from "@/lib/utils"

export const LeftBar = ({ className }: OptionalClassProps) => {
  return (
    <aside
      className={cn(
        "border-p-border sticky top-0 flex h-dvh flex-col items-center justify-between border-r px-5 py-[30px]",
        className
      )}
    >
      <ProfilePicture size={60} className="border-[5px]" />
      <nav className="flex flex-col gap-6">
        <MenuLink href="/" tooltip="Início" alt="Acessar página inicial">
          <Image
            className="size-6"
            src="/icons/solar-round-user-duotone.svg"
            width={24}
            height={24}
            alt="Simbolo de um usuário"
          />
        </MenuLink>

        <MenuLink
          href="/library"
          tooltip="Biblioteca"
          alt="Acessar a biblioteca de projetos"
        >
          <Image
            src="/icons/solar-folder-duotone.svg"
            width={24}
            height={24}
            className="size-6"
            alt="Simbolo de uma pasta de computador"
          />
        </MenuLink>
      </nav>

      <Button
        className={
          "hover:bg-p-border border-p-border grid size-[60px] place-items-center rounded-[26px] bg-transparent p-[5px] transition-colors duration-300 ease-in-out"
        }
      >
        <Image
          src="/icons/solar-globe-duotone.svg"
          width={24}
          height={24}
          className="size-6"
          alt="Simbolo de um globo"
        />
      </Button>
    </aside>
  )
}

// todo: translate this page
