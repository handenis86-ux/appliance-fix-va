import { notFound } from "next/navigation";
import { getService, SERVICE_SLUGS } from "@/lib/content";
import ServiceForm from "./ServiceForm";

export const dynamic = "force-dynamic";

export default async function ServiceEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(SERVICE_SLUGS as readonly string[]).includes(slug)) {
    notFound();
  }
  const service = await getService(slug);
  return <ServiceForm slug={slug} initial={service} />;
}
