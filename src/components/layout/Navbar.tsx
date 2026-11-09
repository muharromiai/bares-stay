
export default function Navbar() {
  return (
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
  );
}