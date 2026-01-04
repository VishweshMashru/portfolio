"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/VishweshMashru",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishwesh-mashruwala-00a53122a/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:mashruwalavishwesh03@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Message sent successfully", { id });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", { id });
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            Let's talk
          </h2>
          <div className="w-20 h-1 bg-black mb-6" />
          <p className="text-gray-600 text-lg max-w-xl">
            Have a project in mind or just want to chat? Drop me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <motion.form
            onSubmit={onSubmit}
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  placeholder=" "
                  className="peer w-full px-0 py-4 border-b-2 border-gray-200 bg-transparent text-black placeholder-transparent focus:outline-none focus:border-black transition-colors"
                />
                <label
                  className={`absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm ${
                    focused === "name" ? "text-black" : "text-gray-500"
                  }`}
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                  placeholder=" "
                  className="peer w-full px-0 py-4 border-b-2 border-gray-200 bg-transparent text-black placeholder-transparent focus:outline-none focus:border-black transition-colors"
                />
                <label
                  className={`absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm ${
                    focused === "email" ? "text-black" : "text-gray-500"
                  }`}
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={onChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                rows={6}
                placeholder=" "
                className="peer w-full px-0 py-4 border-b-2 border-gray-200 bg-transparent text-black placeholder-transparent focus:outline-none focus:border-black transition-colors resize-none"
              />
              <label
                className={`absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm ${
                  focused === "message" ? "text-black" : "text-gray-500"
                }`}
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="group relative px-8 py-4 bg-black text-white rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message
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
              </span>
              <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </motion.form>

          {/* Social links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-6">
              Connect
            </h3>
            
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-black hover:text-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Based in San José, CA
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Open to opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}