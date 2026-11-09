
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      {/* NAVBAR */}
      <nav className="absolute top-0 z-20 w-full px-6 py-6 md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="text-2xl font-semibold tracking-[0.2em] text-white"
          >
            BARÈS
          </a>

          <div className="hidden items-center gap-10 text-sm text-white md:flex">
            <a href="/" className="transition hover:text-[#C5AE8B]">
              Home
            </a>
            <a href="/rooms" className="transition hover:text-[#C5AE8B]">
              Rooms
            </a>
            <a href="/gallery" className="transition hover:text-[#C5AE8B]">
              Gallery
            </a>
            <a href="/location" className="transition hover:text-[#C5AE8B]">
              Location
            </a>
          </div>

          <a
            href="#booking"
            className="hidden border border-white px-5 py-3 text-xs tracking-widest text-white transition hover:bg-white hover:text-[#243C32] md:block"
          >
            BOOK YOUR STAY
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[700px] items-center bg-cover bg-center px-6 md:min-h-[800px] md:px-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl pt-20">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#E0CCAA]">
            YOUR PRIVATE TROPICAL ESCAPE
          </p>

          <h1 className="max-w-3xl text-5xl font-light leading-tight text-white md:text-7xl">
            Escape to
            <br />
            <span className="italic">the beauty</span> of nature.
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-7 text-white/80 md:text-base">
            Experience a peaceful tropical retreat where modern comfort
            meets the beauty of nature.
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

        {/* BOTTOM LABEL */}
        <div className="absolute bottom-8 right-8 z-10 hidden text-right text-xs tracking-widest text-white/80 md:block">
          <p>BARÈS — TROPICAL STAY</p>
          <p className="mt-2">A PLACE TO SLOW DOWN</p>
        </div>
      </section>

      {/* TEMPORARY SPACER */}
      <section className="px-6 py-20 text-center md:px-16">
        <p className="text-xs tracking-[0.3em] text-[#9A8463]">
          WELCOME TO BARÈS
        </p>
        <h2 className="mt-5 text-3xl font-light text-[#243C32] md:text-5xl">
          A slower way to experience life.
        </h2>
      </section>
    </main>
  );
}
