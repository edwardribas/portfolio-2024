'use client'

import { DiscordMenuLinkProps } from "@/types/components/discord-menu-link.types"
import { MenuLink } from "./menu-link"
import Image from "next/image"
import { toast } from "sonner"

export const DiscordMenuLink = ({ alt, toastTitle, toastDescription }: DiscordMenuLinkProps) => {
    const copyDiscordUsername = () => {
        navigator.clipboard.writeText("@eribas_")
            .then(() => {
                toast.message(toastTitle, {
                    description: toastDescription,
                    duration: 2500,
                })
            })
    }

    return (
        <MenuLink
            alt={alt}
            onClick={copyDiscordUsername}
            tooltip="Discord"
            tooltipDirection="left"
        >
            <Image
                src="/icons/brand-discord.svg"
                width={24}
                className="size-6"
                height={24}
                alt="Logo Discord"
            />
        </MenuLink>
    )
}