import Header from '@/components/layout/header';
import { PostCard } from '@/components/post-card';
import { getPosts } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="container mx-auto max-w-2xl px-0 sm:px-4 pb-8">
        <Separator className="my-2 sm:my-4 md:my-8" />
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
