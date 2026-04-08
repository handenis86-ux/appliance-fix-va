import { getArlington } from "@/lib/content";
import ArlingtonForm from "./ArlingtonForm";

export const dynamic = "force-dynamic";

export default async function ArlingtonAdminPage() {
  const arlington = await getArlington();
  return <ArlingtonForm initial={arlington} />;
}
