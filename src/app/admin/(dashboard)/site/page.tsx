import { getSite } from "@/lib/content";
import SiteForm from "./SiteForm";

export const dynamic = "force-dynamic";

export default async function SiteSettingsPage() {
  const site = await getSite();
  return <SiteForm initial={site} />;
}
