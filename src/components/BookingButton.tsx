"use client";
import { useState, ReactNode } from "react";
import BookingModal from "./BookingModal";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function BookingButton({ children, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
