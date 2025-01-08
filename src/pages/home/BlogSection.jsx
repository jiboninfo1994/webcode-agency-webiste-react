import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import { excerpt } from '../../lib/common';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: '/images/blogs/blog1.png',
      category: 'Technology',
      title: 'How AI is Shaping the Future of Web Development',
      description:
        'Mastering web design involves a deep understanding of visual hierarchy, color theory, and typography. Effective web design prioritizes user experience by creating intuitive navigation and responsive layouts. This guide covers essential principles such as balance, contrast, and consistency, ensuring designers can create visually appealing websites that engage and retain users.',
      authorImage: '/images/authors/author1.png',
      authorName: 'John Doe',
      authorRole: 'Tech Blogger'
    },
    {
      id: 2,
      image: '/images/blogs/blog2.png',
      category: 'Design',
      title: '10 Tips for Creating Stunning UI/UX Designs',
      description:
        'JavaScript is a fundamental language for web development, enabling dynamic content and interactive features. This guide offers essential tips for beginners, including mastering variables, loops, functions, and DOM manipulation. By focusing on these core concepts, along with error handling and best coding practices, beginners can build a strong foundation for creating modern web applications.',
      authorImage: '/images/authors/author2.png',
      authorName: 'Jane Smith',
      authorRole: 'UX Designer'
    },
    {
      id: 3,
      image: '/images/blogs/blog3.png',
      category: 'Development',
      title: 'Understanding JavaScript Closures in Depth',
      description:
        "Staying competitive in search engine rankings requires a strategic approach to SEO. This guide explores 2024's top strategies, such as optimizing content for search intent, enhancing website speed, and using structured data. By focusing on mobile-first indexing, quality backlinks, and user engagement metrics, businesses can improve visibility and drive consistent organic traffic to their sites.",
      authorImage: '/images/authors/author3.png',
      authorName: 'Mark Johnson',
      authorRole: 'Frontend Developer'
    },
    {
      id: 4,
      image: '/images/blogs/blog4.png',
      category: 'Business',
      title: 'Why Digital Transformation is Essential for Success',
      description:
        'The e-commerce landscape is evolving rapidly with trends like augmented reality shopping, voice commerce, and AI-powered recommendations. This blog discusses how businesses can leverage these technologies along with personalized experiences and fast shipping to stay competitive. Embracing omnichannel strategies and automation will further shape the future of online shopping experiences.',
      authorImage: '/images/authors/author4.png',
      authorName: 'Emily Carter',
      authorRole: 'Business Analyst'
    }
  ];

  return (
    <section>
      <div className="section-container py-20">
        <SectionTitle
          subtitle="From Our Blog"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Bibendum amet at molestie mattis."
        />
        {blogs && blogs.length && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-20">
            {blogs?.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              >
                {blog?.image && (
                  <img
                    src={blog?.image}
                    alt={blog?.title}
                    className="w-full h-48 object-cover hover:scale-105 transition transform"
                  />
                )}
                <div className="p-5">
                  {blog?.category && (
                    <p className="text-sm text-blue-500 font-medium uppercase mb-2">
                      {blog?.category}
                    </p>
                  )}
                  {blog?.title && (
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {blog?.title}
                    </h3>
                  )}
                  {blog?.description && (
                    <p className="text-sm text-gray-600 mb-5">
                      {excerpt(blog?.description, 60)}
                    </p>
                  )}
                  <div className="flex items-center space-x-3">
                    {blog?.authorImage && (
                      <img
                        src={blog?.authorImage}
                        alt={blog?.authorName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      {blog?.authorName && (
                        <h4 className="text-sm font-bold text-gray-800">
                          {blog?.authorName}
                        </h4>
                      )}
                      {blog?.authorRole && (
                        <p className="text-xs text-gray-500">
                          {blog?.authorRole}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <Button text="Read More" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
