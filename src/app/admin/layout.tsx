import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Appliance Fix VA",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

// Admin routes should never be statically cached / indexed.
export const dynamic = "force-dynamic";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
