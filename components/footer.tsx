import Link from "next/link"

const CREDITS_URL = "https://darkmate.framer.website/contact"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-p-border mt-[110px] flex flex-col items-center justify-center gap-1 border-t px-4 py-10">
      <p className="text-p-foreground text-center text-sm">
        &copy; {currentYear}. Eduardo Ribas
      </p>

      <Link
        href={CREDITS_URL}
        className="text-p-muted-foreground text-center text-sm underline"
      >
        Inspiração
      </Link>
    </footer>
  )
}

// todo: translate this page
