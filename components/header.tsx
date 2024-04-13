import Image from "next/image"

export const Header = () => {
  return (
    <header className="border-p-border mb-[110px] border-b pb-10 pt-[50px]">
      <div className="mx-auto flex w-full max-w-[860px] items-center justify-between">
        <div className="border-p-border flex items-center gap-2.5 rounded-[18px] border px-4 py-3">
          <Image
            src="/icons/solar-suitcase-line-duotone.svg"
            width={24}
            height={24}
            alt="Símbolo de maleta de trabalho"
          />

          <p className="text-p-foreground text-sm">Tecnologia Única</p>
        </div>

        <div className="flex items-center gap-5">
          <p className="text-p-muted-foreground text-sm">Horário local</p>
          <p className="text-p-foreground text-sm font-bold">10:49 AM</p>
        </div>
      </div>
    </header>
  )
}

// todo: translate this page
