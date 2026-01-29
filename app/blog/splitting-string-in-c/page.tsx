"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SplittingStringInC() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-black tracking-tighter hover:text-gray-600 transition-colors">
            VM
          </Link>
          <Link href="/blog" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Meta */}
            <div className="flex items-center gap-3 mb-8 text-sm">
              <span className="uppercase tracking-wider text-gray-500 font-medium">Programming Languages</span>
              <span className="text-gray-300">•</span>
              <time className="text-gray-500">Jan 29, 2026</time>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">6 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight leading-tight">
              Everyone Should Suffer Through Splitting a String in C
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              I used to think C was useless. Old, annoying, and designed to make students miserable. Coming from Python and JavaScript, it felt like unnecessary suffering.
            </p>

            <div className="w-20 h-1 bg-black mb-12" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p>
                Then I tried to split a string in C.
              </p>

              <p>
                Do you know how insane that is? In Python it's <code className="bg-gray-100 px-2 py-1 rounded text-sm">s.split()</code> and you're done. In C, you're suddenly Googling <code className="bg-gray-100 px-2 py-1 rounded text-sm">strtok()</code> like your life depends on it. And then you find out <code className="bg-gray-100 px-2 py-1 rounded text-sm">strtok()</code> mutates your string, uses internal state, breaks if you're not careful, and absolutely will screw you over if you try to reuse the original string later.
              </p>

              <p>
                So now you're copying strings, allocating memory, tracking tokens, making sure you don't segfault, and remembering to free everything at the end. Miss one step and the program either crashes or quietly ruins your day.
              </p>

              <p>
                That's when it hits you: <strong>strings in C are not strings. They're just memory.</strong> Nothing is safe. Nothing is automatic. The computer does exactly what you tell it, even if what you told it was stupid.
              </p>

              <p>
                You can't bullshit your way through C. If you don't understand what you wrote, it shows immediately.
              </p>

              <p>
                Weirdly, that was the first time I felt like a real programmer. Not a script kid or a framework junkie, but someone actually dealing with how computers work instead of just vibes and abstractions.
              </p>

              <p>
                I don't write C every day, and I don't want to. But after fighting <code className="bg-gray-100 px-2 py-1 rounded text-sm">strtok()</code> and pointers and memory, every other language feels easy. Bugs make more sense. Performance isn't a mystery anymore.
              </p>

              <p>
                C sucks sometimes. But it teaches you things that stick.
              </p>

              <p>
                And honestly, everyone should suffer through splitting a string in C at least once.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-16 border-t border-gray-200" />

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all articles
            </Link>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 Vishwesh Mashruwala. All rights reserved.</p>
          <p className="text-sm text-gray-500">Built with Next.js & Framer Motion</p>
        </div>
      </footer>
    </main>
  );
}