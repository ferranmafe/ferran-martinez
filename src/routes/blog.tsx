import { createFileRoute } from "@tanstack/react-router";
import { BlogListPage } from "@/features/blog";

export const Route = createFileRoute("/blog")({
  component: BlogListPage,
});
