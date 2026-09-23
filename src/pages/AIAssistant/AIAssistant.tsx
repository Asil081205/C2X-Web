import {
  Wand2,
  BookOpen,
  FlaskConical,
  FileText,
  Bug,
  Repeat,
  Languages,
  Sparkles,
} from "lucide-react";
import styles from "./AIAssistant.module.scss";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import PageHero from "@/components/common/PageHero";
import { AIChat } from "@/components/ai-assistant";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce, cardHover } from "@/animations/motion";
import type { AICapability } from "@/types";

const CAPABILITIES: AICapability[] = [
  {
    id: "generate",
    icon: Wand2,
    title: "Code Generation",
    description:
      "Describe what you need and get working, idiomatic code in the current file's language.",
  },
  {
    id: "explain",
    icon: BookOpen,
    title: "Explain Code",
    description:
      "Select any block and get a plain-language walkthrough of what it does and why.",
  },
  {
    id: "tests",
    icon: FlaskConical,
    title: "Generate Tests",
    description:
      "Automatically scaffold unit tests that cover real edge cases, not just happy paths.",
  },
  {
    id: "docs",
    icon: FileText,
    title: "Generate Documentation",
    description:
      "Turn functions and modules into clear docstrings and README sections.",
  },
  {
    id: "debug",
    icon: Bug,
    title: "Debug Errors",
    description:
      "Paste a stack trace or error and get a root-cause explanation with a fix.",
  },
  {
    id: "refactor",
    icon: Repeat,
    title: "Refactor Code",
    description:
      "Apply proposed refactors instantly, or review them as a diff first.",
  },
  {
    id: "translate",
    icon: Languages,
    title: "Translate Code",
    description:
      "Port functions and modules between languages while preserving behavior.",
  },
  {
    id: "inline",
    icon: Sparkles,
    title: "Inline Suggestions",
    description:
      "Ghost-text completions that adapt to your codebase as you type.",
  },
];

/**
 * /ai-assistant — premium AI coding experience page. Hero features a
 * live capability-switching chat demo; below is a grid summarizing
 * each capability shown in the demo.
 */
const AIAssistant = (): React.ReactElement => {
  return (
    <div className={styles.page}>
      <PageHero
        eyebrow="AI Assistant"
        title="Your intelligent coding partner."
        description="C2X reads your whole workspace — not just the open file — to generate, explain, test, and fix code without breaking your flow."
      >
        <AIChat />
        <div className={styles.heroImageWrap}>
          <img
            src="/images/ai/IMG-20260809-WA0009.jpg"
            alt="C2X assistant chat panel answering a question about a TypeScript file"
            className={styles.heroImage}
            loading="lazy"
          />
        </div>
      </PageHero>

      <section className="section-pad">
        <Container>
          <SectionTitle
            eyebrow="Capabilities"
            title="One assistant, every workflow"
            description="Every capability shown above is available from the command palette, inline, or the chat panel — wherever you're already working."
          />
          <div className={styles.grid}>
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.id}
                id={
                  cap.id === "generate"
                    ? "generation"
                    : cap.id === "explain"
                      ? "explanation"
                      : cap.id === "refactor"
                        ? "refactoring"
                        : cap.id === "inline"
                          ? "inline"
                          : ""
                }
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i % 4}
                whileHover={cardHover}
                className={styles.card}
              >
                <div className={styles.icon}>
                  <cap.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className={styles.cardTitle}>{cap.title}</h3>
                <p className="text-small">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AIAssistant;
