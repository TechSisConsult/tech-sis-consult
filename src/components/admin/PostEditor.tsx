'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { createClient } from '@/lib/supabase/client';
import { generateSlug } from '@/lib/insights-utils';
import type { Post } from '@/lib/insights-utils';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaLink,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaRotateLeft,
  FaRotateRight,
  FaImage,
} from 'react-icons/fa6';

const CATEGORIES = [
  'Web Design',
  'Business Tips',
  'SEO',
  'Ecommerce',
  'Automation',
];

type Props = {
  post?: Post;
  mode: 'create' | 'edit';
};

/* ── Toolbar button ── */
function ToolbarBtn({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        onClick();
      }}
      title={title}
      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all duration-150 ${
        active
          ? 'bg-[#021823] text-[#d4a843]'
          : 'text-gray-500 hover:bg-gray-100 hover:text-[#021823]'
      }`}
    >
      {children}
    </button>
  );
}

export default function PostEditor({ post, mode }: Props) {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState(post?.title ?? '');
  const [slug, setSlug] = useState(post?.slug ?? '');
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '');
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? '');
  const [category, setCategory] = useState(post?.category ?? CATEGORIES[0]);
  const [tags, setTags] = useState(post?.tags?.join(', ') ?? '');
  const [readTime, setReadTime] = useState(post?.read_time ?? 5);
  const [featured, setFeatured] = useState(post?.featured ?? false);
  const [published, setPublished] = useState(post?.published ?? false);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  /* ── Tiptap editor ── */
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Image.configure({ HTMLAttributes: { class: 'rounded-xl max-w-full' } }),
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({
        placeholder: 'Start writing your article here…',
      }),
    ],
    content: post?.content ?? '',
    editorProps: {
      attributes: {
        class:
          'prose prose-lg max-w-none min-h-[400px] focus:outline-none px-6 py-4',
      },
    },
  });

  /* Auto-generate slug from title */
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (mode === 'create') {
      setSlug(generateSlug(val));
    }
  };

  /* Cover image upload to Supabase Storage */
  const handleImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploading(true);
      const ext = file.name.split('.').pop();
      const filename = `covers/${Date.now()}.${ext}`;

      const { data, error } = await supabase.storage
        .from('post-images')
        .upload(filename, file, { upsert: true });

      if (!error && data) {
        const { data: urlData } = supabase.storage
          .from('post-images')
          .getPublicUrl(data.path);
        setCoverImage(urlData.publicUrl);
      }
      setUploading(false);
    },
    [supabase],
  );

  /* Inline image inside editor */
  const addInlineImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !editor) return;

      const ext = file.name.split('.').pop();
      const filename = `content/${Date.now()}.${ext}`;

      const { data, error } = await supabase.storage
        .from('post-images')
        .upload(filename, file, { upsert: true });

      if (!error && data) {
        const { data: urlData } = supabase.storage
          .from('post-images')
          .getPublicUrl(data.path);
        editor.chain().focus().setImage({ src: urlData.publicUrl }).run();
      }
    },
    [editor, supabase],
  );

  /* Add a link */
  const addLink = () => {
    const url = prompt('Enter URL:');
    if (!url) return;
    editor?.chain().focus().setLink({ href: url }).run();
  };

  /* Save */
  const handleSave = async (publishNow?: boolean) => {
    if (!title || !excerpt || !editor?.getHTML()) {
      alert('Please fill in title, excerpt, and content.');
      return;
    }

    setSaving(true);
    setSaveMsg('');

    const content = editor.getHTML();
    const isPublished = publishNow !== undefined ? publishNow : published;
    const tagArray = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      title,
      slug,
      excerpt,
      content,
      cover_image: coverImage,
      category,
      tags: tagArray,
      read_time: readTime,
      featured,
      published: isPublished,
      published_at: isPublished ? new Date().toISOString() : null,
    };

    let error;

    if (mode === 'create') {
      ({ error } = await supabase.from('posts').insert(payload));
    } else {
      ({ error } = await supabase
        .from('posts')
        .update(payload)
        .eq('id', post!.id));
    }

    setSaving(false);

    if (error) {
      setSaveMsg('❌ Error saving post: ' + error.message);
      return;
    }

    setSaveMsg('✅ Saved successfully!');
    setTimeout(() => {
      router.push('/admin/posts');
      router.refresh();
    }, 800);
  };

  const inputClass =
    'w-full bg-white border border-gray-200 text-[#021823] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/15 transition-all';
  const labelClass =
    'block text-[#021823] text-xs font-bold uppercase tracking-widest mb-2';

  return (
    <div className="flex flex-col gap-6">
      {/* ── Top action bar ── */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#021823]">
            {mode === 'create' ? 'New Post' : 'Edit Post'}
          </h1>
          {saveMsg && (
            <p
              className={`text-sm mt-1 font-semibold ${
                saveMsg.startsWith('✅') ? 'text-emerald-600' : 'text-red-500'
              }`}
            >
              {saveMsg}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl border-2 border-[#021823] text-[#021823] font-bold text-sm hover:bg-[#021823] hover:text-white transition-all duration-200 disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save Draft'}
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-[#d4a843] hover:bg-[#bf9630] text-[#021823] font-bold text-sm transition-all duration-200 hover:shadow-lg disabled:opacity-50"
          >
            {saving ? 'Publishing…' : 'Publish'}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
        {/* ── Main editor area ── */}
        <div className="flex flex-col gap-5">
          {/* Title */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <textarea
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Post title…"
              rows={2}
              className="w-full text-3xl font-extrabold text-[#021823] placeholder-gray-300 resize-none focus:outline-none border-0 p-0"
            />
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
              <span className="text-gray-400 text-xs font-semibold">Slug:</span>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="flex-1 text-xs text-gray-500 font-mono focus:outline-none focus:text-[#021823] border-0 p-0 bg-transparent"
              />
            </div>
          </div>

          {/* Tiptap editor */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Toolbar */}
            {editor && (
              <div className="flex flex-wrap items-center gap-1 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                {/* Text style */}
                <ToolbarBtn
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  active={editor.isActive('bold')}
                  title="Bold"
                >
                  <FaBold />
                </ToolbarBtn>
                <ToolbarBtn
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  active={editor.isActive('italic')}
                  title="Italic"
                >
                  <FaItalic />
                </ToolbarBtn>
                <ToolbarBtn
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  active={editor.isActive('underline')}
                  title="Underline"
                >
                  <FaUnderline />
                </ToolbarBtn>
                <ToolbarBtn
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                  active={editor.isActive('strike')}
                  title="Strikethrough"
                >
                  <FaStrikethrough />
                </ToolbarBtn>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Headings */}
                {[1, 2, 3].map((level) => (
                  <ToolbarBtn
                    key={level}
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        .toggleHeading({ level: level as 1 | 2 | 3 })
                        .run()
                    }
                    active={editor.isActive('heading', { level })}
                    title={`Heading ${level}`}
                  >
                    <span className="text-[11px] font-black">H{level}</span>
                  </ToolbarBtn>
                ))}

                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Lists */}
                <ToolbarBtn
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  active={editor.isActive('bulletList')}
                  title="Bullet list"
                >
                  <FaListUl />
                </ToolbarBtn>
                <ToolbarBtn
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                  active={editor.isActive('orderedList')}
                  title="Numbered list"
                >
                  <FaListOl />
                </ToolbarBtn>
                <ToolbarBtn
                  onClick={() =>
                    editor.chain().focus().toggleBlockquote().run()
                  }
                  active={editor.isActive('blockquote')}
                  title="Quote"
                >
                  <FaQuoteLeft />
                </ToolbarBtn>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Alignment */}
                <ToolbarBtn
                  onClick={() =>
                    editor.chain().focus().setTextAlign('left').run()
                  }
                  active={editor.isActive({ textAlign: 'left' })}
                  title="Align left"
                >
                  <FaAlignLeft />
                </ToolbarBtn>
                <ToolbarBtn
                  onClick={() =>
                    editor.chain().focus().setTextAlign('center').run()
                  }
                  active={editor.isActive({ textAlign: 'center' })}
                  title="Align center"
                >
                  <FaAlignCenter />
                </ToolbarBtn>
                <ToolbarBtn
                  onClick={() =>
                    editor.chain().focus().setTextAlign('right').run()
                  }
                  active={editor.isActive({ textAlign: 'right' })}
                  title="Align right"
                >
                  <FaAlignRight />
                </ToolbarBtn>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Link + Image */}
                <ToolbarBtn
                  onClick={addLink}
                  active={editor.isActive('link')}
                  title="Add link"
                >
                  <FaLink />
                </ToolbarBtn>

                <label
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm text-gray-500 hover:bg-gray-100 hover:text-[#021823] cursor-pointer transition-all"
                  title="Insert image"
                >
                  <FaImage />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={addInlineImage}
                  />
                </label>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Undo / Redo */}
                <ToolbarBtn
                  onClick={() => editor.chain().focus().undo().run()}
                  title="Undo"
                >
                  <FaRotateLeft />
                </ToolbarBtn>
                <ToolbarBtn
                  onClick={() => editor.chain().focus().redo().run()}
                  title="Redo"
                >
                  <FaRotateRight />
                </ToolbarBtn>
              </div>
            )}

            {/* Editor content area */}
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* ── Right sidebar ── */}
        <div className="flex flex-col gap-5">
          {/* Cover image */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className={labelClass}>Cover Image</p>
            {coverImage ? (
              <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setCoverImage('')}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center aspect-video border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[#d4a843] hover:bg-[#d4a843]/4 transition-all">
                <span className="text-gray-400 text-sm font-semibold">
                  {uploading ? 'Uploading…' : 'Click to upload'}
                </span>
                <span className="text-gray-300 text-xs mt-1">
                  PNG, JPG, WebP
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
              </label>
            )}
            <input
              type="text"
              placeholder="Or paste an image URL…"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className={`${inputClass} mt-3`}
            />
          </div>

          {/* Post settings */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
            <p className={labelClass}>Post Settings</p>

            {/* Category */}
            <div>
              <label className="text-gray-500 text-xs font-semibold mb-1.5 block">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass}
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Read time */}
            <div>
              <label className="text-gray-500 text-xs font-semibold mb-1.5 block">
                Read Time (minutes)
              </label>
              <input
                type="number"
                min={1}
                max={60}
                value={readTime}
                onChange={(e) => setReadTime(Number(e.target.value))}
                className={inputClass}
              />
            </div>

            {/* Tags */}
            <div>
              <label className="text-gray-500 text-xs font-semibold mb-1.5 block">
                Tags{' '}
                <span className="text-gray-400 font-normal">
                  (comma-separated)
                </span>
              </label>
              <input
                type="text"
                placeholder="SEO, Business, Nigeria"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Toggles */}
            <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
              {[
                { label: 'Featured post', value: featured, set: setFeatured },
                { label: 'Published', value: published, set: setPublished },
              ].map((toggle) => (
                <label
                  key={toggle.label}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span className="text-gray-700 text-sm font-semibold">
                    {toggle.label}
                  </span>
                  <div
                    onClick={() => toggle.set((v) => !v)}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                      toggle.value ? 'bg-[#d4a843]' : 'bg-gray-200'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                        toggle.value ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <label className={labelClass}>Excerpt</label>
            <textarea
              rows={4}
              placeholder="A short description shown in post listings and SEO…"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
