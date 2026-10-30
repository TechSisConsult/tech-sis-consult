'use client';

import { useTransition } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { deletePost } from '@/app/admin/posts/action';

type Props = {
  postId: string;
  postTitle: string;
};

export default function DeletePostButton({ postId, postTitle }: Props) {
  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm(`Delete "${postTitle}"? This cannot be undone.`)) return;

    startTransition(async () => {
      await deletePost(postId);
    });
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={pending}
      title="Delete post"
      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-500 text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200 disabled:opacity-50"
    >
      <FaTrash className="w-3 h-3" />
    </button>
  );
}
