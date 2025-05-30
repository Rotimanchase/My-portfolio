"use client"

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const links = [
  { name: "Home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
]

const MobileNav = () => {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary text-foreground">
        {/* Accessibility Title */}
        <SheetHeader>
          <SheetTitle>
            <VisuallyHidden>Mobile Navigation</VisuallyHidden>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Rotimi<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link href={link.path} key={index} className={`${ link.path === pathName && "text-accent border-b-2 border-accent"}
             text-xl capitalize hover:text-accent transition-all`} >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
