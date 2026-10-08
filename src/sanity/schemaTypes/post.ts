import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Blog Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      description: 'The main heading of your blog article (e.g., Ultimate Guide to Heavy Duty Pallet Racks)',
      validation: (rule) => rule.required().min(10).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'The URL path for this article (e.g. heavy-duty-pallet-racks-guide)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'Summary shown on the blog listing cards and used as default SEO meta description.',
      validation: (rule) => rule.required().max(250),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (for SEO & Accessibility)',
          description: 'Describe the image for search engines (e.g., Heavy Duty Warehouse Storage Racks in Factory).',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'string',
      description: 'e.g., "5 min read"',
      initialValue: '5 min read',
    }),
    defineField({
      name: 'body',
      title: 'Article Content (Rich Text)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2 Heading', value: 'h2' },
            { title: 'H3 Heading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Image Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'Custom SEO Title (Optional)',
      type: 'string',
      description: 'Overrides the main title in Google search results (recommended: 50-60 characters).',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Custom SEO Meta Description (Optional)',
      type: 'text',
      rows: 2,
      description: 'Overrides the excerpt in Google search results (recommended: 140-160 characters).',
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords / Tags',
      type: 'string',
      description: 'Comma separated keywords (e.g., pallet racking, warehouse storage, industrial racks).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { author, date } = selection;
      const formattedDate = date ? new Date(date).toLocaleDateString() : '';
      return {
        ...selection,
        subtitle: author ? `By ${author} | ${formattedDate}` : formattedDate,
      };
    },
  },
});
