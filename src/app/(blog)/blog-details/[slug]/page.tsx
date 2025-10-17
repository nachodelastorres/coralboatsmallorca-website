import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsMain from '@/pages/blog-details/blog-details';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found – Coral Boats Mallorca',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  // Use metaTitle and metaDescription if available (literal strings for SEO)
  // Otherwise fallback to translation keys
  const seoTitle = blog.metaTitle || `${blog.title} – Coral Boats Mallorca`;
  const seoDescription = blog.metaDescription || blog.description || 'Discover tips, guides, and inspiration for your boat trips in Mallorca.';

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: blog.keyword,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: blog.publishedDate,
      images: [
        {
          url: blog.image.src,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [blog.image.src],
    },
  };
}

export default function BlogDetailsPage({ params }: Props) {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with slug: {params.slug}
    </div>
  );
}


// import { fetchAPI } from '@/lib/datocms';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';

// // Fetch el post por slug
// async function getPostBySlug(slug: string) {
//   const query = `
//     query PostBySlug($slug: String) {
//       blogPost(filter: {slug: {eq: $slug}}) {
//         id
//         title
//         content {
//           value
//         }
//         featuredImage {
//           url
//         }
//         publishedDate
//         seoTitle
//         seoDescription
//       }
//     }
//   `;

//   const data = await fetchAPI(query, { slug });

//   return data.blogPost;
// }

// // Render de la página
// export default async function BlogPostPage({ params }: { params: { slug: string } }) {
//   const post = await getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

//       {post.featuredImage?.url && (
//         <Image
//           src={post.featuredImage.url}
//           alt={post.title}
//           width={800}
//           height={450}
//           className="rounded-lg mb-6"
//         />
//       )}

//       <div className="prose max-w-none">
//         {post.content?.value.document?.children.map((node: any, index: number) => (
//           <p key={index}>{node.children[0].value}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export async function generateStaticParams() {
//   const query = `
//     {
//       allBlogPosts {
//         slug
//       }
//     }
//   `;

//   const data = await fetchAPI(query);

//   return data.allBlogPosts.map((post: any) => ({
//     slug: post.slug,
//   }));
// }


