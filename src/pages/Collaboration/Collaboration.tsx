import { motion } from "framer-motion";
import {
  Users,
  GitBranch,
  MessageSquare,
  Eye,
  Share2,
  UserPlus,
} from "lucide-react";
import styles from "./Collaboration.module.scss";
import { fadeUp, staggerContainer } from "@/animations/motion";
import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import type { CollabFeature } from "@/types";

const features: CollabFeature[] = [
  {
    id: "live",
    icon: Users,
    title: "Live Collaboration",
    description:
      "Multiple developers can work on the same file simultaneously with full cursor tracking and presence indicators.",
  },
  {
    id: "workspace",
    icon: GitBranch,
    title: "Team Workspace",
    description:
      "Shared development environment where your entire team can collaborate seamlessly.",
  },
  {
    id: "presence",
    icon: Eye,
    title: "Presence",
    description:
      "See who's online, what file they're working on, and where their cursor is positioned.",
  },
  {
    id: "sharing",
    icon: Share2,
    title: "Sharing",
    description:
      "Share projects instantly with team members and control access permissions.",
  },
  {
    id: "comments",
    icon: MessageSquare,
    title: "Comments & Reviews",
    description:
      "Leave feedback, suggest changes, and review code within the editor.",
  },
  {
    id: "invite",
    icon: UserPlus,
    title: "Invite Teammates",
    description: "Invite team members to your workspace with a single click.",
  },
];

const Collaboration = (): React.ReactElement => {
  return (
    <div className={styles.page}>
      <PageHero
        eyebrow="Collaboration"
        title="Build together, in real time."
        description="C2X transforms how teams code together — live cursors, shared terminals, and instant collaboration without leaving your editor."
      >
        <div className={styles.heroImageWrap}>
          <img
            src="/images/collaboration/IMG-20260809-WA0011.jpg"
            alt="C2X collaboration workspace showing room creation, live cursors, team chat, task board, and presence indicators"
            className={styles.heroImage}
            loading="lazy"
          />
        </div>
      </PageHero>

      <section className="section-pad">
        <Container>
          <SectionTitle
            eyebrow="Features"
            title="Designed for teamwork"
            description="Every collaboration feature is built to keep your team aligned and productive."
          />
          <div className={styles.grid}>
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  id={feature.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i % 3}
                  className={styles.card}
                >
                  <div className={styles.icon}>
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Collaboration;
