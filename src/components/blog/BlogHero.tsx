import { motion } from "framer-motion";
import { Sparkles, BookOpen, Users, TrendingUp } from "lucide-react";
import styles from "./BlogHero.module.scss";
import { fadeUp, staggerContainer } from "@/animations/motion";

const BlogHero = (): React.ReactElement => {
  const stats = [
    { icon: BookOpen, label: "Articles", value: "50+" },
    { icon: Users, label: "Readers", value: "10K+" },
    { icon: TrendingUp, label: "Monthly Views", value: "50K+" },
    { icon: Sparkles, label: "Topics Covered", value: "20+" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className={styles.content}
        >
          <motion.div variants={fadeUp} className={styles.badge}>
            <Sparkles size={14} />
            <span>C2X Blog</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className={styles.title}>
            Insights for <br />
            <span className={styles.gradient}>Modern Developers</span>
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.description}>
            Tutorials, guides, and insights from the C2X team to help you
            build better software, faster.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.stats}>
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className={styles.stat}>
                <Icon size={18} />
                <div>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
