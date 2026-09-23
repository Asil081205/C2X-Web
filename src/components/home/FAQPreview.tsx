import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "./FAQPreview.module.scss";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { cn } from "@/utils/helpers";
import type { FAQItem } from "@/types";

const FAQS: FAQItem[] = [
  {
    id: "what-is",
    question: "What is C2X?",
    answer:
      "C2X is a cloud-based, AI-powered code editor built for real-time team collaboration. It combines a familiar Monaco-based editing experience with built-in AI assistance, live multiplayer editing, and remote development support.",
  },
  {
    id: "extensions",
    question: "Does C2X support extensions?",
    answer:
      "Yes. C2X is compatible with the open VS Code extension API, so you can install existing extensions or publish your own to the C2X marketplace.",
  },
  {
    id: "collab",
    question: "Can teams collaborate in real time?",
    answer:
      "Absolutely. Multiple developers can edit the same file simultaneously with live cursors, presence indicators, and an in-editor chat — no separate screen-sharing tools required.",
  },
  {
    id: "offline-ai",
    question: "Does AI work offline?",
    answer:
      "Core editing, debugging, and version control work fully offline. Cloud-powered AI features require a connection, but C2X also supports local model integrations for offline AI assistance.",
  },
  {
    id: "privacy",
    question: "Is my code private?",
    answer:
      "Your code stays within your workspace boundary by default. Nothing is sent to cloud AI services unless you explicitly enable that feature, and enterprise plans support fully on-prem deployments.",
  },
];

const FAQPreview = (): React.ReactElement => {
  const [openId, setOpenId] = useState<string | null>("what-is");

  return (
    <section className="section-pad" aria-label="Frequently Asked Questions">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before getting started."
          align="center"
        />
        <div className={styles.list}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={styles.item}>
                <button
                  className={styles.trigger}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  {faq.question}
                  <Plus size={18} className={cn(styles.icon, isOpen && styles.open)} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={styles.answerWrap}
                    >
                      <p className={`${styles.answer} text-body`}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQPreview;
