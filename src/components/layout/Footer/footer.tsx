import { Separator } from "@/components/ui/separator";
import { LucideMail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 bg-recyeco-secondary text-neutral-50">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 px-4 py-8 lg:flex-row lg:justify-between lg:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <div className="h-6 w-24 bg-[url('/assets/icons/ic_recyeco-light.svg')] bg-cover bg-center" />
          </Link>
          <Separator className="w-2/3 bg-neutral-500" />
          <span className="text-xs">Aksi Hijau Bersama</span>
        </div>
        <div className="flex flex-col gap-1 text-center lg:text-start">
          <h1 className="text-sm font-bold lg:text-base">Contact</h1>
          <div className="flex flex-col gap-2">
            <Link
              href="mailto:proxopt@gmail.com"
              className="flex items-center gap-2 text-sm text-neutral-300 hover:underline lg:text-base"
            >
              <LucideMail size={16} />
              proxopt@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-recyeco-primary">
        <div className="mx-auto flex max-w-screen-xl items-center justify-center py-3">
          <span className="text-center text-xs lg:text-sm">&copy; 2024 Recyeco. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
