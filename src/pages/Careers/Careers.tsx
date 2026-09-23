import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Careers.module.scss";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { JOBS } from "@/data/jobs";
import JobCard from "@/components/business/JobCard";
import BenefitCard from "@/components/business/BenefitCard";
import HiringStep from "@/components/business/HiringStep";
import TestimonialCard from "@/components/business/TestimonialCard";
import { Link } from "react-router-dom";

const Careers = (): React.ReactElement => {
  const [filter, setFilter] = useState<string>("all");

  const filteredJobs =
    filter === "all" ? JOBS : JOBS.filter((job) => job.department === filter);

  const departments = ["all", ...new Set(JOBS.map((job) => job.department))];

  const benefits = [
    {
      icon: "🏠",
      title: "Remote First",
      description: "Work from anywhere in the world",
    },
    {
      icon: "🕒",
      title: "Flexible Hours",
      description: "Set your own schedule",
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description: "Annual learning and development stipend",
    },
    {
      icon: "🏥",
      title: "Health Coverage",
      description: "Comprehensive health insurance",
    },
    {
      icon: "✈️",
      title: "Team Offsites",
      description: "Annual team meetups worldwide",
    },
    {
      icon: "💻",
      title: "Tech Setup",
      description: "Latest hardware and software",
    },
  ];

  const hiringSteps = [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit your resume and portfolio",
    },
    {
      step: 2,
      title: "Technical Interview",
      description: "Showcase your skills with our team",
    },
    {
      step: 3,
      title: "Project Assessment",
      description: "Complete a real-world project",
    },
    {
      step: 4,
      title: "Team Interview",
      description: "Meet the team and culture fit",
    },
    {
      step: 5,
      title: "Offer & Onboarding",
      description: "Join the C2X team",
    },
  ];

  const testimonials = [
    {
      id: "1",
      name: "Emily Rodriguez",
      role: "Senior Software Engineer",
      content:
        "Working at C2X has been transformative. The culture of innovation and collaboration is unlike anything I've experienced.",
      avatar: "https://placehold.co/100x100/007acc/ffffff?text=ER",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Product Designer",
      content:
        "The remote-first culture and emphasis on work-life balance makes C2X a truly special place to work.",
      avatar: "https://placehold.co/100x100/4ade80/ffffff?text=MC",
    },
    {
      id: "3",
      name: "Priya Sharma",
      role: "DevOps Engineer",
      content:
        "I've never been part of a team that values learning and growth as much as C2X. It's inspiring.",
      avatar: "https://placehold.co/100x100/8b5cf6/ffffff?text=PS",
    },
  ];

  return (
    <div className={styles.careers}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={styles.heroContent}
          >
            <motion.span variants={fadeUp} className={styles.badge}>
              Join Our Team
            </motion.span>
            <motion.h1 variants={fadeUp} className={styles.title}>
              Build the Future of <br />
              <span className={styles.gradient}>Collaboration</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.description}>
              We're looking for passionate people to help us build the next
              generation of developer tools.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            Why Join C2X?
          </motion.h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className={styles.positions}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            Open Positions
          </motion.h2>

          <div className={styles.filters}>
            {departments.map((dept) => (
              <button
                key={dept}
                className={`${styles.filterBtn} ${filter === dept ? styles.active : ""}`}
                onClick={() => setFilter(dept)}
              >
                {dept.charAt(0).toUpperCase() + dept.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.jobsGrid}>
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className={styles.emptyState}>
              <p>No open positions in this department right now.</p>
            </div>
          )}
        </div>
      </section>

      {/* Hiring Process */}
      <section className={styles.hiringProcess}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            Our Hiring Process
          </motion.h2>
          <div className={styles.steps}>
            {hiringSteps.map((step, index) => (
              <HiringStep key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            What Our Team Says
          </motion.h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
