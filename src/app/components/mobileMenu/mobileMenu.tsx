import { appRoutes } from "@/app/constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../header/modeToggle";

export default function MobileMenu () {

  const path = usePathname();

  return (
    <div className="md:hidden contents">

      <Sheet>
        <SheetTrigger className="font-xl text-primary h-full flex items-center">
          <LunchDiningIcon fontSize="medium" />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between  pt-16 pb-8">
          <div className="flex flex-col gap-8">
            {
            Object.entries(appRoutes).map(([key, value]) => (
              <SheetClose className="text-left" key={key} asChild>
  
              <Link className={`${path === value ? 'text-primary' : 'text-zinc-500'} w-fit text-3xl font-inter-tight font-semibold`} href={value} >
                {key}
              </Link>
              </SheetClose>
            ))
            }
          </div>
          <div className="flex flex-col gap-8">
            <ModeToggle mobile />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}