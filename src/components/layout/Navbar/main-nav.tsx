import Link from "next/link";
import MobileNav from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function MainNav() {
  return (
    <header aria-label="navbar" className="sticky top-0 z-50 w-full bg-neutral-100">
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <div className="h-6 w-20 bg-[url('/assets/icons/ic_recyeco-dark.svg')] bg-cover bg-center md:h-8 md:w-28" />
          </Link>

          <div className="relative hidden w-1/2 lg:block">
            <Input className="peer border-black ps-9" placeholder="Cari di Recyeco..." type="search" />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
              <Search size={16} strokeWidth={2} aria-hidden="true" />
            </div>
          </div>
          <nav className="hidden gap-3 lg:flex lg:items-center">
            <Button size="sm" variant="outline" className="border-black" asChild>
              <Link href="/signup">Daftar</Link>
            </Button>
            <Button size="sm" variant="default" asChild>
              <Link href="/signin">Masuk</Link>
            </Button>
          </nav>
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
