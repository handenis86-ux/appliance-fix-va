import { getHome } from "@/lib/content";
import HomeForm from "./HomeForm";

export const dynamic = "force-dynamic";

export default async function HomePageAdmin() {
  const home = await getHome();
  return <HomeForm initial={home} />;
}
