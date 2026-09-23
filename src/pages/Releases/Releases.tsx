import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";
import VersionTimeline, { type ReleaseEntry } from "@/components/docs/VersionTimeline";
import styles from "./Releases.module.scss";
import { fadeUp, viewportOnce } from "@/animations/motion";

const RELEASES: ReleaseEntry[] = [
  {
    version: "v2.0",
    date: "January 2026",
    tag: "latest",
    summary:
      "A major release introducing the redesigned AI Assistant panel, live collaboration rooms, and a rebuilt extension marketplace.",
    sections: {
      features: [
        "AI Assistant panel with inline edits, test generation, and debugging",
        "Real-time collaboration rooms with voice, video, and comments",
        "Redesigned Extensions marketplace with ratings and categories",
      ],
      improvements: [
        "Editor startup time reduced by roughly 40%",
        "Terminal now supports split panes natively",
      ],
      fixes: ["Fixed a memory leak when closing many tabs in quick succession"],
      breaking: [
        "Extension manifest v1 is no longer supported — republish with the v2 schema",
        "The legacy Themes API (pre-1.2) has been removed",
      ],
    },
  },
  {
    version: "v1.2",
    date: "September 2025",
    tag: "stable",
    summary: "Focused on editor performance and expanded language support across the workbench.",
    sections: {
      features: ["Split editor now supports up to four panes", "Added Rust and Go language servers"],
      improvements: [
        "Faster full-workspace search on large repositories",
        "Reduced AI Assistant response latency by roughly 25%",
      ],
      fixes: ["Fixed incorrect line numbers in the Problems panel after a large paste"],
    },
  },
  {
    version: "v1.1",
    date: "May 2025",
    tag: "legacy",
    summary: "Introduced the integrated debugger and status bar Git branch indicator.",
    sections: {
      features: ["Integrated debugger with breakpoints and variable inspection", "Status bar Git branch indicator"],
      improvements: ["Settings UI reorganized into searchable categories"],
      fixes: ["Fixed the terminal losing focus after a window resize"],
    },
  },
  {
    version: "v1.0",
    date: "January 2025",
    tag: "legacy",
    summary: "The first stable release of C2X: editor, file explorer, terminal, and themes.",
    sections: {
      features: ["Core editor with syntax highlighting and multi-cursor editing", "File explorer, integrated terminal, and theme support"],
    },
  },
];

/** /releases — standalone changelog timeline, outside the /docs shell. */
const Releases = (): React.ReactElement => {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title="Release Notes"
        description="What's new, improved, and fixed in every C2X release."
      />
      <section className={styles.section}>
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <VersionTimeline releases={RELEASES} />
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Releases;
