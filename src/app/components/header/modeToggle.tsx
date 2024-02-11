"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect } from "react"

interface ModeToggleProps {
  mobile?: boolean;
}
export function ModeToggle( { mobile = false } : ModeToggleProps) {
  const { setTheme } = useTheme()

  return (
    <div className={` ${mobile ? 'md:hidden contents' : 'md:contents hidden'}`}>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none border-border" asChild>
          <Button className=" h-8 w-8" variant="outline" size="icon">
            <SunIcon className="h-4 w-4 rotate-0 scale-100 text- transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-primary dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border border-border bg-card" align="end">
          <DropdownMenuItem className="hover:cursor-pointer hover:" onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
