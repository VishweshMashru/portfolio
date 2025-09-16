"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = toast.loading('Sending your message...');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error('Failed to send');
      toast.success('Message sent ✅', { id });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
        { id }
      );
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#101010]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold text-blue-400 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>Contact Me</motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">Have a project or an idea? Let’s talk.</p>

        <form onSubmit={onSubmit} className="rounded-2xl p-6 md:p-8 bg-[#151515]/80 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" value={formData.name} onChange={onChange} required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <input type="email" name="email" value={formData.email} onChange={onChange} required placeholder="Your email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <textarea name="message" value={formData.message} onChange={onChange} required rows={5} placeholder="Your message" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <button type="submit" className="w-full md:w-auto px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg shadow-blue-500/20 hover:opacity-95">Send Message</button>
            <a href="https://github.com/VishweshMashru" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200 w-full md:w-auto justify-center"><FaGithub/> GitHub</a>
            <a href="https://www.linkedin.com/in/vishwesh-mashruwala-00a53122a/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200 w-full md:w-auto justify-center"><FaLinkedin/> LinkedIn</a>
          </div>
        </form>
        <p className="text-sm text-gray-500 mt-6">Or reach me: mashruwalavishwesh03@gmail.com<span className="text-gray-300"></span></p>
      </div>
    </section>
  );
}
