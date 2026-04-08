import { getBlog } from "@/lib/content";
import BlogForm from "./BlogForm";

export const dynamic = "force-dynamic";

export default async function BlogAdminPage() {
  const blog = await getBlog();
  return <BlogForm initial={blog} />;
}
