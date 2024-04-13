import { Divider } from "@/components/divider"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Curriculum = () => {
  return (
    <section className="text-p-muted-foreground flex flex-col text-[15px]">
      <Divider variant="gradient" />

      <Button asChild className="-mt-8 self-center">
        <Link href="/documents/curriculum-ribas.pdf" target="_blank">
          <Image
            src="/icons/solar-cloud-download-line-duotone.svg"
            width={24}
            height={24}
            alt="Símbolo de download"
          />
          Baixar currículo
        </Link>
      </Button>
    </section>
  )
}

// todo: translate this page
