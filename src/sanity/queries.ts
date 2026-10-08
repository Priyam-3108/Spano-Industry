import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    _id,
    title,
    "slug": slug.current
  },
  author->{
    name,
    role,
    image {
      asset->{
        _id,
        url
      }
    }
  }
}`;

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime,
  seoTitle,
  seoDescription,
  keywords,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    _id,
    title,
    "slug": slug.current
  },
  author->{
    name,
    role,
    bio,
    image {
      asset->{
        _id,
        url
      }
    }
  },
  body
}`;

export const POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}`;

export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description
}`;
