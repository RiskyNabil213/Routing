'use client';
import { useState } from 'react';
import { blogPosts } from '../../data/blog';
import Link from 'next/link';

const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-soft-brown">Blog</h1>
      <div className="mb-6 flex gap-2">
        {categories.map(category => (
          <button
            key={category}
            className={`px-3 py-1 rounded ${selectedCategory === category ? 'bg-soft-brown text-amber-400' : 'bg-gray-200 '}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.slug} className="mb-6">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-soft-brown hover:underline">
              {post.title}
            </Link>
            <div className="text-sm text-gray-400">{post.date} • {post.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}