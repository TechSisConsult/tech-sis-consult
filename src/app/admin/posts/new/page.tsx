import AdminLayout from '@/components/admin/AdminLayout';
import PostEditor from '@/components/admin/PostEditor';

export const metadata = { title: 'New Post — TechSisConsult Admin' };

export default function NewPostPage() {
  return (
    <AdminLayout>
      <div className="p-8">
        <PostEditor mode="create" />
      </div>
    </AdminLayout>
  );
}
