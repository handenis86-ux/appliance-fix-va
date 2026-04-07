"use client";

export default function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] z-50 sm:hidden">
      <a
        href="tel:+18382013789"
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-600 text-white text-[15px] font-semibold rounded-md hover:bg-green-700 transition-colors"
      >
        Call Now — (838) 201-3789
      </a>
    </div>
  );
}
