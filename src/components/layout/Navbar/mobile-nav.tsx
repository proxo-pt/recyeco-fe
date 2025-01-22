"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <div className="flex items-center gap-3">
          <Search size={16} strokeWidth={2} aria-hidden="true" />
          <div className="rounded-lg border border-black p-2">
            <Menu className="size-4" />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="py-2">
            <Link href="/">
              <div className="mx-auto h-6 w-24 bg-[url('/assets/icons/ic_recyeco-dark.svg')] bg-cover bg-center md:h-8 md:w-28" />
            </Link>
          </SheetTitle>
          <SheetDescription asChild>
            <div className="space-y-4">
              <div className="relative mx-auto w-80">
                <Input className="peer border-black ps-9" placeholder="Cari di Recyeco..." type="search" />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  <Search size={16} strokeWidth={2} aria-hidden="true" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Button asChild variant="outline" className="rounded-xl border-2">
                  <Link href="/sign-up">Daftar</Link>
                </Button>
                <Button asChild className="rounded-xl">
                  <Link href="/sign-in">Masuk</Link>
                </Button>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
