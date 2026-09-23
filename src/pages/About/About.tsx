import { motion } from "framer-motion";
import styles from "./About.module.scss";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { COMPANY_STATS } from "@/data/companyStats";
import { TEAM } from "@/data/team";
import { TIMELINE } from "@/data/timeline";
import StatisticCard from "@/components/business/StatisticCard";
import TeamCard from "@/components/business/TeamCard";
import Timeline from "@/components/business/Timeline";
import TechnologyCard from "@/components/business/TechnologyCard";
import LeadershipCard from "@/components/business/LeadershipCard";
import CultureCard from "@/components/business/CultureCard";

const About = (): React.ReactElement => {
  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "WebAssembly", icon: "🟣", category: "Runtime" },
    { name: "Rust", icon: "🦀", category: "Backend" },
    { name: "Monaco Editor", icon: "✏️", category: "Editor" },
  ];

  const leadership = TEAM.filter((member) => member.leadership);

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={styles.heroContent}
          >
            <motion.span variants={fadeUp} className={styles.badge}>
              About C2X
            </motion.span>
            <motion.h1 variants={fadeUp} className={styles.title}>
              Building the Future of
              <br />
              <span className={styles.gradient}>Collaborative Development</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.description}>
              We're on a mission to transform how developers work together,
              making collaboration seamless, intelligent, and delightful.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={styles.missionCard}
            >
              <div className={styles.cardIcon}>🎯</div>
              <h2>Our Mission</h2>
              <p>
                To empower developers worldwide with intelligent tools that make
                collaboration feel natural, regardless of location or timezone.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={styles.visionCard}
            >
              <div className={styles.cardIcon}>🔭</div>
              <h2>Our Vision</h2>
              <p>
                A world where distance doesn't matter—where every developer can
                contribute their best work seamlessly with their team, powered
                by AI and real-time technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            C2X by the Numbers
          </motion.h2>
          <div className={styles.statsGrid}>
            {COMPANY_STATS.map((stat, index) => (
              <StatisticCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            Our Journey
          </motion.h2>
          <Timeline items={TIMELINE} />
        </div>
      </section>

      {/* Culture */}
      <section className={styles.culture}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            Engineering Culture
          </motion.h2>
          <div className={styles.cultureGrid}>
            <CultureCard
              title="Innovation First"
              description="We encourage experimentation and learning from failures."
              icon="💡"
            />
            <CultureCard
              title="Open Source Mindset"
              description="We believe in giving back to the community that built us."
              icon="🌍"
            />
            <CultureCard
              title="Remote First"
              description="Our team spans the globe, working together seamlessly."
              icon="🌐"
            />
            <CultureCard
              title="Continuous Learning"
              description="We invest in our people and their growth."
              icon="📚"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leadership}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            Leadership Team
          </motion.h2>
          <div className={styles.leadershipGrid}>
            {leadership.map((member, index) => (
              <LeadershipCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={styles.technology}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            Technology Stack
          </motion.h2>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <TechnologyCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className={styles.container}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sectionTitle}
          >
            Meet the Team
          </motion.h2>
          <div className={styles.teamGrid}>
            {TEAM.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
