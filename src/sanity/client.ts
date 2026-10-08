import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, isSanityConfigured } from './env';
import { POSTS_QUERY, POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from './queries';
import { BlogPost, MOCK_POSTS } from './mockData';

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // false during development for instant updates
    })
  : null;

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (client) {
    try {
      const posts = await client.fetch(POSTS_QUERY);
      if (Array.isArray(posts) && posts.length > 0) {
        return posts;
      }
    } catch (error) {
      console.warn('Sanity fetch failed, falling back to mock posts:', error);
    }
  }
  return MOCK_POSTS;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (client) {
    try {
      const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });
      if (post) {
        return post;
      }
    } catch (error) {
      console.warn(`Sanity fetch for slug "${slug}" failed, falling back to mock posts:`, error);
    }
  }
  return MOCK_POSTS.find((p) => p.slug === slug) || null;
}

export async function getBlogPostSlugs(): Promise<string[]> {
  if (client) {
    try {
      const slugsData: { slug: string }[] = await client.fetch(POST_SLUGS_QUERY);
      if (Array.isArray(slugsData) && slugsData.length > 0) {
        return slugsData.map((item) => item.slug);
      }
    } catch (error) {
      console.warn('Sanity slug fetch failed, falling back to mock slugs:', error);
    }
  }
  return MOCK_POSTS.map((p) => p.slug);
}
