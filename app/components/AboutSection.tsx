'use client';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 bg-[#2C2C2C] text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <VerticalTimeline className="mt-12">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#333', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #333' }}
          date="2019 - 2021"
          iconStyle={{ background: '#3B82F6', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title font-bold">India</h3>
          <p>HighSchool</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#333', color: '#fff' }}
          date="2022 - 2025"
          iconStyle={{ background: '#06B6D4', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title font-bold">San Jose State University</h3>
          <p>Advanced CS Projects, AI, Computer Vision</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#333', color: '#fff' }}
          date="2022 - Present"
          iconStyle={{ background: '#9333EA', color: '#fff' }}
          icon={<FaProjectDiagram />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Currently</h3>
          <p>Building impactful real-world projects with Computer Vision & Next.js</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
