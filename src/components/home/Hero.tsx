interface HeroProps {
  eyebrow: string;
  description: string;
}

export default function Hero({
  eyebrow,
  description,
}: HeroProps) {
  return (
    <section
      className="relative flex min-h-[600px] items-center bg-cover bg-center px-6 md:min-h-[800px] md:px-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl pt-20">
        <p className="mb-6 text-xs tracking-[0.35em] text-[#E0CCAA]">
          {eyebrow}
        </p>

        <h1 className="max-w-3xl text-5xl font-light leading-tight text-white md:text-7xl">
          Escape to
          <br />
          <span className="italic">the beauty</span> of nature.
        </h1>

        <p className="mt-8 max-w-lg text-sm leading-7 text-white/80 md:text-base">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#rooms"
            className="bg-[#F5F1E8] px-8 py-4 text-xs font-medium tracking-widest text-[#243C32] transition hover:bg-[#C5AE8B]"
          >
            EXPLORE OUR ROOMS
          </a>

          <a
            href="#about"
            className="border border-white/70 px-8 py-4 text-xs tracking-widest text-white transition hover:bg-white hover:text-[#243C32]"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-8 right-8 z-10 hidden text-right text-xs tracking-widest text-white/80 md:block">
        <p>BARÈS — TROPICAL STAY</p>
        <p className="mt-2">A PLACE TO SLOW DOWN</p>
      </div>
    </section>
  );
}
