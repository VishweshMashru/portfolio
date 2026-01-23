"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Convert slug to title (rough approximation)
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-black tracking-tighter hover:text-gray-600 transition-colors"
          >
            VM
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to blog
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Construction icon */}
            <motion.div
              className="inline-block mb-8"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-24 h-24 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
              Work in Progress
            </h1>

            <div className="w-20 h-1 bg-black mx-auto mb-8" />

            <p className="text-xl text-gray-600 mb-4">
              This article is currently being written
            </p>

            <p className="text-gray-500 mb-12 max-w-xl mx-auto">
              I'm working on a detailed write-up about <span className="font-medium text-black">{title}</span>. Check back soon for the full article!
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blog"
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                View other articles
              </Link>
              <Link
                href="/#projects"
                className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all"
              >
                See my projects
              </Link>
            </div>

            {/* Progress indicator */}
            <motion.div
              className="mt-16 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-gray-500 mb-4">Writing progress</p>
              <div className="w-full max-w-md mx-auto h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-black"
                  initial={{ width: "0%" }}
                  animate={{ width: "35%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">35% complete</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Vishwesh Mashruwala. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Built with Next.js & Framer Motion</p>
        </div>
      </footer>
    </main>
  );
}