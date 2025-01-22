import Image from "next/image";

interface CategoryCardProps {
  src: string;
  alt: string;
  title: string;
  color: string;
}

export default function CategoryCard({ src, alt, title, color }: CategoryCardProps) {
  return (
    <div
      className="group flex size-auto cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border px-2 py-3 transition-colors hover:border-black"
      style={{ backgroundColor: color }}
    >
      <Image src={src} alt={alt} width={32} height={32} className="transition-transform group-hover:scale-110" />
      <span className="text-xs text-gray-800">{title}</span>
    </div>
  );
}
