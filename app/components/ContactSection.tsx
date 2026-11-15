"use client";
import { useState } from "react";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import toast from "react-hot-toast";
import { SectionHeading, SocialLinks } from "./PortfolioUI";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
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
    } catch {
      toast.error(
        "Could not send your message. Please try again or email me directly.",
        { id },
      );
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="contact" className="portfolio-section contact-section">
      <SectionHeading eyebrow="Connect" title="Let’s talk">
        <span className="status-pill">
          <span className="small-dot" />
          Open to opportunities
        </span>
      </SectionHeading>
      <div className="contact-layout">
        <div className="contact-copy">
          <h3>Have a project in mind or just want to chat?</h3>
          <p>Drop me a message.</p>
          <a
            className="email-link"
            href="mailto:mashruwalavishwesh03@gmail.com"
          >
            <FiMail />
            mashruwalavishwesh03@gmail.com
          </a>
          <SocialLinks boxed />
          <p className="location-note">Based in San José, CA</p>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-row">
            <div>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={onChange}
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={onChange}
                required
                placeholder="you@example.com"
              />
            </div>
          </div>
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={onChange}
            required
            rows={4}
            placeholder="What are you working on?"
          />
          <button type="submit" className="button primary" disabled={sending}>
            {sending ? "Sending…" : "Send Message"}
            <FiArrowUpRight />
          </button>
        </form>
      </div>
    </section>
  );
}
