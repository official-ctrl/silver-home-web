import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] w-full items-center justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(45,79,56,0.45) 0%, rgba(45,79,56,0.7) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-[#e8f0ea]">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#e8f0ea] md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
