import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, ArrowRight } from "lucide-react";
import styles from "./NewsletterCTA.module.scss";
import Button from "@/components/common/Button/Button";
import { fadeUp } from "@/animations/motion";

const NewsletterCTA = (): React.ReactElement => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubscribed(true);
    setLoading(false);
    setEmail("");
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className={styles.cta}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <Mail size={32} className={styles.icon} />
          <h2 className={styles.title}>Stay in the loop</h2>
          <p className={styles.description}>
            Subscribe to get the latest articles, tutorials, and updates
            delivered straight to your inbox.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.success}
            >
              <Check size={24} />
              <span>Thanks for subscribing!</span>
            </motion.div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={styles.input}
                  required
                  disabled={loading}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className={styles.button}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                  <ArrowRight size={16} />
                </Button>
              </div>
              <p className={styles.note}>No spam, unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterCTA;
