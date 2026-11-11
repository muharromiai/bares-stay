import { bookingWhatsApp } from "@/lib/whatsapp";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#243C32] px-6 py-12 text-[#F5F1E8] md:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-semibold tracking-[0.2em]">
            BARÈS
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">
            A peaceful tropical escape where comfort meets nature.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest">
            EXPLORE
          </h3>

          <div className="flex flex-col gap-3 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/rooms" className="hover:text-white">Rooms</Link>
            <Link href="/gallery" className="hover:text-white">Gallery</Link>
            <Link href="/location" className="hover:text-white">Location</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest">
            CONTACT
          </h3>

          <p className="text-sm leading-7 text-white/70">
            Have questions or want to book your stay?
          </p>

          <Link
            href={bookingWhatsApp()}
            className="mt-4 inline-block border border-[#C5AE8B] px-5 py-3 text-xs tracking-widest transition hover:bg-[#C5AE8B] hover:text-[#243C32]"
          >
            CONTACT US
          </Link>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 pt-6">
        <p className="text-xs text-white/50">
          © 2026 Barès Tropical Stay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}