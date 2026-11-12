import { bookingWhatsApp } from "@/lib/whatsapp";
import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-[#243C32] px-6 py-12 text-[#F5F1E8] md:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-1">
        <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium tracking-[0.3em] text-[#C5AE8B]">
                YOUR TROPICAL ESCAPE AWAITS
            </p>

            <h2 className="mt-5 font-serif text-3xl md:text-5xl">
                Ready for a slower escape?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
                Make your next stay memorable. Get in touch with us and start
                planning your tropical getaway.
            </p>

            <Link
                href={bookingWhatsApp()}
                className="mt-8 inline-block border border-[#C5AE8B] px-6 py-3 text-xs tracking-widest transition hover:bg-[#C5AE8B] hover:text-[#243C32]"
            >
                BOOK YOUR STAY
            </Link>
        </div>
      </div>
    </section>
  );
}