"use client";


import type { GalleryImage } from "@/data/gallery";
import { galleryImages } from "@/data/gallery";
import { useEffect, useState } from "react";

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

    const selectedIndex = galleryImages.findIndex(
      (image) => image.id === selectedImage?.id
    );

    function showNextImage() {
      const nextIndex = (selectedIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
    }

    function showPreviousImage() {
      const previousIndex =
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[previousIndex]);
    }
    
    useEffect(() => {
      function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
          setSelectedImage(null);
        }

        if (event.key === "ArrowRight") {
          setSelectedImage((currentImage) => {
            if (!currentImage) return null;
            const currentIndex = galleryImages.findIndex(
              (image) => image.id === currentImage.id
            );
            const nextIndex = (currentIndex + 1) % galleryImages.length;
            return galleryImages[nextIndex];
          });
        }

        if (event.key === "ArrowLeft") {
          setSelectedImage((currentImage) => {
            if (!currentImage) return null;
            const currentIndex = galleryImages.findIndex(
              (image) => image.id === currentImage.id
            );
            const previousIndex =
              (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            return galleryImages[previousIndex];
          });
        }
      }

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

  return (
    <section className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-[#9A8463]">
            OUR GALLERY
          </p>

          <h2 className="mt-4 text-3xl font-light text-[#243C32] md:text-5xl">
            Moments at Barès.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group overflow-hidden text-left"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 text-3xl text-white"
              aria-label="Close gallery"
            >
              &times;
            </button>

            <button
              onClick={showPreviousImage}
              className="absolute left-4 text-3xl text-white"
              aria-label="Previous image"
            >
              &#10094;
            </button>

            <button
              onClick={showNextImage}
              className="absolute right-4 text-3xl text-white"
              aria-label="Next image"
            >
              &#10095;
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full object-contain"
            />

          </div>
        )}

      </div>
    </section>
  );
}
