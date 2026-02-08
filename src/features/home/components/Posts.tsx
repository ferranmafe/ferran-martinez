import { SectionHeader } from "@/components/SectionHeader";
import { BlogPost } from "@/components/BlogPost";
import { getBlogPosts } from "@/features/blog/utils/readPosts";
import { Spacer } from "@/components/Spacer";

export const Posts = () => {
  const allPosts = getBlogPosts();
  const latestPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="flex justify-center bg-[#f5f0e8]">
      <div className="py-20 w-full max-w-[1352px] px-4">
        <SectionHeader>Posts</SectionHeader>
        <Spacer top={8} />
        <div className="flex justify-between gap-4">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <BlogPost
                key={post.slug}
                title={post.title}
                date={post.date}
                cover={post.coverImage}
              />
            ))
          ) : (
            <p className="text-gray-600 text-lg">No posts available</p>
          )}
        </div>
        <div className="flex justify-center pt-8">
          <a
            href="/blog"
            className="bg-yellow-400 text-black text-lg font-bold px-6 py-3 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            View all posts →
          </a>
        </div>
      </div>
    </section>
  );
};
