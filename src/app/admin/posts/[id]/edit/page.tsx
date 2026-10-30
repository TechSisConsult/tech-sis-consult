import AdminLayout from '@/components/admin/AdminLayout';
import PostEditor from '@/components/admin/PostEditor';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

export const metadata = { title: 'Edit Post — TechSisConsult Admin' };

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !post) notFound();

  return (
    <AdminLayout>
      <div className="p-8">
        <PostEditor mode="edit" post={post} />
      </div>
    </AdminLayout>
  );
}
