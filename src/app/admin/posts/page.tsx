import { createClient } from '@/lib/supabase/server';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';
import { formatDate } from '@/lib/insights';
import {
  FaPlus,
  FaPenToSquare,
  FaTrash,
  FaEye,
  FaStar,
  FaCircleCheck,
  FaCircleXmark,
} from 'react-icons/fa6';

const CATEGORY_COLORS: Record<string, string> = {
  'Web Design': 'bg-blue-100 text-blue-700',
  'Business Tips': 'bg-emerald-100 text-emerald-700',
  SEO: 'bg-purple-100 text-purple-700',
  Ecommerce: 'bg-orange-100 text-orange-700',
  Automation: 'bg-yellow-100 text-yellow-700',
};

export default async function AdminPostsPage() {
  const supabase = await createClient();

  const { data: posts } = await supabase
    .from('posts')
    .select(
      'id, title, slug, category, featured, published, published_at, created_at, read_time',
    )
    .order('created_at', { ascending: false });

  const totalPosts = posts?.length ?? 0;
  const publishedPosts = posts?.filter((p) => p.published).length ?? 0;
  const draftPosts = totalPosts - publishedPosts;
  const featuredPosts = posts?.filter((p) => p.featured).length ?? 0;

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-[#021823]">
              Blog Posts
            </h1>
            <p className="text-gray-500 text-sm mt-0.5">
              Manage your Insights articles
            </p>
          </div>
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#d4a843]/20"
          >
            <FaPlus className="w-3.5 h-3.5" />
            New Post
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: 'Total Posts',
              value: totalPosts,
              color: 'text-[#021823]',
            },
            {
              label: 'Published',
              value: publishedPosts,
              color: 'text-emerald-600',
            },
            { label: 'Drafts', value: draftPosts, color: 'text-orange-500' },
            {
              label: 'Featured',
              value: featuredPosts,
              color: 'text-[#d4a843]',
            },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
            >
              <p className={`text-3xl font-extrabold ${s.color}`}>{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Posts table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {!posts || posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                <FaPlus className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm font-semibold">
                No posts yet
              </p>
              <Link
                href="/admin/posts/new"
                className="text-[#d4a843] font-bold text-sm hover:underline"
              >
                Create your first post →
              </Link>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {[
                    'Title',
                    'Category',
                    'Status',
                    'Featured',
                    'Date',
                    'Actions',
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left text-[11px] font-bold uppercase tracking-widest text-gray-400 px-5 py-4 first:rounded-tl-2xl last:rounded-tr-2xl"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    {/* Title */}
                    <td className="px-5 py-4 max-w-[280px]">
                      <p className="text-[#021823] font-semibold text-sm leading-snug line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-gray-400 text-[11px] mt-0.5">
                        {post.read_time} min read
                      </p>
                    </td>

                    {/* Category */}
                    <td className="px-5 py-4">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                          CATEGORY_COLORS[post.category] ??
                          'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {post.category}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      {post.published ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-bold">
                          <FaCircleCheck className="w-3.5 h-3.5" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-orange-500 text-xs font-bold">
                          <FaCircleXmark className="w-3.5 h-3.5" />
                          Draft
                        </span>
                      )}
                    </td>

                    {/* Featured */}
                    <td className="px-5 py-4">
                      {post.featured ? (
                        <FaStar className="w-4 h-4 text-[#d4a843]" />
                      ) : (
                        <span className="text-gray-200">—</span>
                      )}
                    </td>

                    {/* Date */}
                    <td className="px-5 py-4">
                      <p className="text-gray-500 text-xs">
                        {post.published_at
                          ? formatDate(post.published_at)
                          : formatDate(post.created_at)}
                      </p>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {post.published && (
                          <Link
                            href={`/insights/${post.slug}`}
                            target="_blank"
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-[#021823] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200"
                            title="View live"
                          >
                            <FaEye className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-[#d4a843] text-gray-500 hover:text-[#021823] flex items-center justify-center transition-all duration-200"
                          title="Edit post"
                        >
                          <FaPenToSquare className="w-3.5 h-3.5" />
                        </Link>
                        <DeleteButton postId={post.id} postTitle={post.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

/* ── Inline delete button (client component) ── */
function DeleteButton({
  postId,
  postTitle,
}: {
  postId: string;
  postTitle: string;
}) {
  return (
    <form
      action={async () => {
        'use server';
        const { createClient } = await import('@/lib/supabase/server');
        const supabase = await createClient();
        await supabase.from('posts').delete().eq('id', postId);
      }}
    >
      <button
        type="submit"
        onClick={(e) => {
          if (!confirm(`Delete "${postTitle}"? This cannot be undone.`)) {
            e.preventDefault();
          }
        }}
        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-500 text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200"
        title="Delete post"
      >
        <FaTrash className="w-3 h-3" />
      </button>
    </form>
  );
}
