'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/sanity/mockData';
import { urlForImage } from '@/sanity/image';
import { StaticImage } from '@/components/ui/StaticImage';
import { Calendar, Clock, ArrowRight, Search, Tag, User } from 'lucide-react';

interface BlogListClientProps {
  posts: BlogPost[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories
  const categoriesMap = new Map<string, string>();
  posts.forEach((post) => {
    post.categories?.forEach((cat) => {
      categoriesMap.set(cat.slug, cat.title);
    });
  });
  const allCategories = Array.from(categoriesMap.entries()).map(([slug, title]) => ({
    slug,
    title,
  }));

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      post.categories?.some((cat) => cat.slug === selectedCategory);
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-[var(--color-spano-dark)] text-white shadow-md'
                : 'bg-[var(--color-spano-light)]/60 text-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)]/15 border border-gray-200/80'
            }`}
          >
            All Articles ({posts.length})
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all duration-200 ${
                selectedCategory === cat.slug
                  ? 'bg-[var(--color-spano-dark)] text-white shadow-md'
                  : 'bg-[var(--color-spano-light)]/60 text-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)]/15 border border-gray-200/80'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search storage guides..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs font-body focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
          />
          <Search size={16} className="absolute left-3.5 top-3 text-gray-400" />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-gray-50 rounded-3xl border border-gray-200">
          <p className="text-gray-500 font-heading font-bold text-lg">No articles found</p>
          <p className="text-xs text-gray-400">Try adjusting your search query or selected category filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-2 text-xs font-bold text-[var(--color-spano-bright)] hover:underline font-heading"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const imageUrl =
              post.mainImage?.imageUrl ||
              (post.mainImage?.asset?.url
                ? post.mainImage.asset.url
                : urlForImage(post.mainImage)?.url()) ||
              '';

            const formattedDate = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })
              : '';

            return (
              <article
                key={post._id}
                className="group flex flex-col bg-white rounded-3xl border border-gray-200 hover:border-[var(--color-spano-bright)]/40 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
              >
                {/* Image Container */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative aspect-[16/10] overflow-hidden bg-[var(--color-spano-light)]/40 block"
                >
                  {imageUrl ? (
                    <StaticImage
                      src={imageUrl}
                      alt={post.mainImage?.alt || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 font-heading text-xs">
                      SPANO Storage Insight
                    </div>
                  )}

                  {/* Primary Category Tag */}
                  {post.categories?.[0] && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-spano-dark)]/90 text-white text-[10px] font-heading font-black uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-md">
                        {post.categories[0].title}
                      </span>
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-4 text-[11px] text-gray-400 font-heading mb-3">
                    {formattedDate && (
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-[var(--color-spano-bright)]" />
                        {formattedDate}
                      </span>
                    )}
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-[var(--color-spano-bright)]" />
                        {post.readTime}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--color-spano-dark)] group-hover:text-[var(--color-spano-mid)] transition-colors mb-3 leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[var(--color-spano-text)] text-xs sm:text-sm font-body leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Author & Read More Link */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-spano-bright)]/10 text-[var(--color-spano-bright)] flex items-center justify-center text-xs font-bold">
                        <User size={12} />
                      </div>
                      <span className="text-xs font-heading font-semibold text-gray-700 truncate max-w-[140px]">
                        {post.author?.name || 'SPANO Technical Team'}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[var(--color-spano-mid)] group-hover:text-[var(--color-spano-bright)] group-hover:translate-x-1 transition-all"
                    >
                      Read Guide
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
