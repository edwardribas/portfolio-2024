import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const Introduction = () => {
  return (
    <section className="space-y-5 text-center">
      <span className="bg-p-muted-border mx-auto grid size-[50px] place-items-center rounded-[22px]">
        <Image
          src="/icons/solar-hand-stars-line-duotone.svg"
          className="size-6"
          width={24}
          height={24}
          alt="Símbolo de três estrelas sobre uma mão"
        />
      </span>

      <h1 className="text-p-foreground text-2xl font-semibold leading-[normal]">
        Ferramentas e projetos
      </h1>

      <p className="text-p-muted-foreground text-[15px] leading-6">
        Atuo majoritariamente utilizando tecnologias como React, NextJS e
        TailwindCSS. Utilizo o Figma para realizar a prototipação de meus
        projetos. Torne a sua ideia realidade hoje mesmo!
      </p>

      <Button asChild aria-label="Enviar um e-mail para mim">
        <Link href="mailto:ribasdois@gmail.com">
          <Image
            src="/icons/solar-mailbox-line-duotone.svg"
            className="size-6"
            width={24}
            height={24}
            alt="Símbolo de caixa postal"
          />
          Fale comigo
        </Link>
      </Button>
    </section>
  )
}

// todo: translate this page
