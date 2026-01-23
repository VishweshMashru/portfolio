"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Why C is Still the Best Programming Language to Learn in 2026",
    excerpt: "In an era of JavaScript frameworks and Python AI libraries, learning C remains the most valuable investment for any serious programmer. Here's why mastering pointers and manual memory management makes you a better engineer.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Programming Languages",
    slug: "why-c-is-still-best-language-2026",
  },
  {
    title: "The Problem With Modern Web Development",
    excerpt: "We've built an entire ecosystem where a simple website requires 2MB of JavaScript, 47 dependencies, and 3 build tools. Something went very wrong, and it's time we talk about it.",
    date: "Dec 20, 2025",
    readTime: "10 min read",
    category: "Web Development",
    slug: "problem-with-modern-web-development",
  },
  {
    title: "Stop Chasing Frameworks, Learn Computer Science",
    excerpt: "React will be replaced. So will Next.js. But algorithms, data structures, and systems programming? Those are forever. Why CS fundamentals matter more than any framework.",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    category: "Career Advice",
    slug: "stop-chasing-frameworks-learn-cs",
  },
  {
    title: "I use Vim BTW",
    excerpt: "VS Code is great. But there's something about modal editing and staying on the keyboard that makes Vim irreplaceable for systems programming and remote development.",
    date: "Oct 10, 2025",
    readTime: "6 min read",
    category: "Developer Tools",
    slug: "why-i-still-use-vim-2026",
  },
  {
    title: "The AI Hype Cycle: What Actually Matters",
    excerpt: "Everyone's building AI wrappers around GPT-4. But the real innovation isn't in prompts—it's in understanding how these models work, their limitations, and building real solutions.",
    date: "Sep 15, 2025",
    readTime: "9 min read",
    category: "Artificial Intelligence",
    slug: "ai-hype-cycle-what-actually-matters",
  },
  {
    title: "Low-Level Programming Isn't Dead, It's Essential",
    excerpt: "As abstraction layers pile up, fewer engineers understand what's actually happening on the CPU. Why learning systems programming makes you irreplaceable in the age of high-level everything.",
    date: "Aug 22, 2025",
    readTime: "11 min read",
    category: "Systems Programming",
    slug: "low-level-programming-still-essential",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Simple header with back link */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-black tracking-tighter hover:text-gray-600 transition-colors">
            VM
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      {/* Blog content */}
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight">
              Writing
            </h1>
            <div className="w-20 h-1 bg-black mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl">
              Hot takes, strong opinions, and thoughts on technology, programming
              languages, and what actually matters in software engineering.
            </p>
          </motion.div>

          {/* Blog posts list */}
          <div className="space-y-12">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-gray-200 pb-12 last:border-0"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-gray-400 group-hover:text-black transition-colors">
                    <span className="mr-2">Read article</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Vishwesh Mashruwala. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </footer>
    </main>
  );
}