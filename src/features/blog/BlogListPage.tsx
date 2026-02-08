import { getBlogPosts, type Matterfront } from "./utils/readPosts";
import { BlogPost } from "@/components/BlogPost";

export const BlogListPage = () => {
  return (
    <div className="mt-12">
      <div className="text-4xl text-center font-bold">Here comes my blog!</div>
      <div className="mt-12" />
      <div className="flex justify-between">
        {getBlogPosts().map((post: Matterfront) => (
          <BlogPost
            title={post.title}
            date={post.date}
            cover="https://i.redd.it/a5kgw9jfbpgg1.png"
          />
        ))}
      </div>
    </div>
  );
};
