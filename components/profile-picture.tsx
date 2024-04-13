import { cn } from "@/lib/utils"
import type { ProfilePictureProps } from "@/types/components/profile-picture.types"
import Image from "next/image"

export const ProfilePicture = ({
  className,
  size = 140,
}: ProfilePictureProps) => {
  return (
    <Image
      src="/images/profile.png"
      alt="Foto de Eduardo Ribas"
      width={size}
      height={size}
      className={cn(
        `size-[${size}px] border-p-muted-border rounded-full border-8`,
        className
      )}
    />
  )
}
