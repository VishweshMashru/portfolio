"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ArchLinuxPost() {
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
              <span className="uppercase tracking-wider text-gray-500 font-medium">Operating Systems</span>
              <span className="text-gray-300">•</span>
              <time className="text-gray-500">Jan 28, 2026</time>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">5 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight leading-tight">
              I Use Arch Linux, btw
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              I don't actually use Arch. I use Fedora. The title is clickbait and I'm not sorry.
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
                Linux isn't that common anymore, especially for Gen Z. Most people I know are on Windows or macOS, and Linux is something you hear about online, not something you actually install. I didn't plan on switching either.
              </p>

              <p>
                What pushed me over was programming on Windows. Specifically C/C++ projects that needed gcc, make, cmake, and random system libraries. Half the time something wouldn't compile, and the error wasn't even my fault. It was PATH issues, missing headers, or WSL acting weird because it wasn't really Linux. <strong>I spent more time debugging my environment than my code.</strong>
              </p>

              <p>
                Updates didn't help either. Windows loved restarting itself, breaking things that worked literally the day before, or spinning my fans up for no reason while I was just trying to compile a project. Nothing kills momentum faster than your OS fighting you.
              </p>

              <p>
                Linux felt different immediately. I installed the tools I needed, they stayed installed, and builds just worked. When something broke, the error actually made sense. I could Google it and fix it instead of guessing.
              </p>

              <p>
                I went with Fedora because I wanted something sane. Arch looks fun if you enjoy configuring everything, but I just wanted a modern system that stayed out of my way. Fedora gave me that without turning every update into an event.
              </p>

              <p>
                Daily driving Linux made me way more comfortable with how my machine actually works. I'm not saying it made me a 10x engineer, but I stopped being scared of terminals and system errors. That alone was worth it.
              </p>

              <p>
                Linux isn't for everyone. If you're deep into Adobe or want zero friction gaming, Windows or macOS is probably better. But if you code a lot and are tired of your OS being the weakest link, Linux makes sense.
              </p>
              <p>
                I do have three seperate systems to run, all three OS on..... so I am kinda realizing that may not work for you if your companies requires windows for work or something. (MacOS tho, A laptop should be a M series, nothing else, change my mind)
              </p>

              <p>
                So no, I don't use Arch. But Windows pushed me to Linux, and Linux made me stay.
              </p>

              <p className="text-gray-500 italic">
                I use Arch, btw. (in my heart)
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