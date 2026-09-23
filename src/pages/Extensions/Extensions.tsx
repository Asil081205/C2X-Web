import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutGrid } from "lucide-react";
import {
  FileCode2,
  Palette,
  Bug,
  Zap,
  Sparkles,
  Braces,
  GitBranch,
  Terminal as TerminalIcon,
  Eye,
  Regex,
  Timer,
  Wand2,
} from "lucide-react";
import styles from "./Extensions.module.scss";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";
import ExtensionCard from "@/components/extensions/ExtensionCard";
import { cn } from "@/utils/helpers";
import type { Extension, ExtensionCategory } from "@/types";

const CATEGORIES: ExtensionCategory[] = [
  "Languages",
  "Themes",
  "Debugging",
  "Productivity",
  "AI Tools",
];

const EXTENSIONS: Extension[] = [
  {
    id: "e1",
    name: "Python IntelliSense",
    publisher: "C2X",
    description:
      "Rich language support for Python with type checking and linting.",
    icon: FileCode2,
    iconColor: "#4ec9b0",
    downloads: "8.2M",
    rating: 4.8,
    category: "Languages",
    verified: true,
  },
  {
    id: "e2",
    name: "Rust Analyzer",
    publisher: "rust-lang",
    description: "Language server support for Rust with inline type hints.",
    icon: Braces,
    iconColor: "#dea584",
    downloads: "3.1M",
    rating: 4.9,
    category: "Languages",
    verified: true,
  },
  {
    id: "e3",
    name: "Go",
    publisher: "Go Team",
    description: "Full Go language support including debugging and testing.",
    icon: FileCode2,
    iconColor: "#00add8",
    downloads: "5.4M",
    rating: 4.7,
    category: "Languages",
  },
  {
    id: "e4",
    name: "Midnight Pro",
    publisher: "C2X",
    description: "A refined dark theme tuned for long coding sessions.",
    icon: Palette,
    iconColor: "#007acc",
    downloads: "2.6M",
    rating: 4.9,
    category: "Themes",
    verified: true,
  },
  {
    id: "e5",
    name: "Solar Flare",
    publisher: "ThemeForge",
    description: "Warm, high-contrast theme inspired by classic Solarized.",
    icon: Palette,
    iconColor: "#dcdcaa",
    downloads: "1.1M",
    rating: 4.6,
    category: "Themes",
  },
  {
    id: "e6",
    name: "Debugger for Chrome",
    publisher: "C2X",
    description:
      "Debug your JavaScript in Chrome from directly inside the editor.",
    icon: Bug,
    iconColor: "#f47474",
    downloads: "6.7M",
    rating: 4.5,
    category: "Debugging",
    verified: true,
  },
  {
    id: "e7",
    name: "Docker Debugger",
    publisher: "C2X",
    description: "Attach breakpoints to processes running inside containers.",
    icon: Bug,
    iconColor: "#569cd6",
    downloads: "980K",
    rating: 4.4,
    category: "Debugging",
  },
  {
    id: "e8",
    name: "GitLens",
    publisher: "OpenSource",
    description:
      "Supercharge git blame, history, and comparisons in the editor.",
    icon: GitBranch,
    iconColor: "#4ec9b0",
    downloads: "12.3M",
    rating: 4.9,
    category: "Productivity",
    verified: true,
  },
  {
    id: "e9",
    name: "Better Terminal",
    publisher: "C2X",
    description:
      "Split panes, themes, and shortcuts for the integrated terminal.",
    icon: TerminalIcon,
    iconColor: "#a1a1aa",
    downloads: "1.9M",
    rating: 4.6,
    category: "Productivity",
  },
  {
    id: "e10",
    name: "Regex Preview",
    publisher: "DevTools Co",
    description: "Live-highlight regex matches as you write the pattern.",
    icon: Regex,
    iconColor: "#ce9178",
    downloads: "740K",
    rating: 4.3,
    category: "Productivity",
  },
  {
    id: "e11",
    name: "C2X Chat",
    publisher: "C2X",
    description:
      "Bring the full AI assistant into any file with inline actions.",
    icon: Sparkles,
    iconColor: "#007acc",
    downloads: "9.8M",
    rating: 4.9,
    category: "AI Tools",
    verified: true,
  },
  {
    id: "e12",
    name: "AI Test Writer",
    publisher: "C2X Labs",
    description: "Generate unit tests for selected functions with one command.",
    icon: Wand2,
    iconColor: "#4ec9b0",
    downloads: "2.2M",
    rating: 4.7,
    category: "AI Tools",
  },
  {
    id: "e13",
    name: "AI Commit Messages",
    publisher: "C2X Labs",
    description:
      "Draft clear, conventional commit messages from your staged diff.",
    icon: Zap,
    iconColor: "#dcdcaa",
    downloads: "1.4M",
    rating: 4.5,
    category: "AI Tools",
  },
  {
    id: "e14",
    name: "Perf Profiler",
    publisher: "DevTools Co",
    description:
      "Visualize render and function timing without leaving the IDE.",
    icon: Timer,
    iconColor: "#569cd6",
    downloads: "610K",
    rating: 4.2,
    category: "Productivity",
  },
  {
    id: "e15",
    name: "Contrast Vision",
    publisher: "Accessibility Labs",
    description: "A high-contrast theme built for low-vision accessibility.",
    icon: Eye,
    iconColor: "#ffffff",
    downloads: "320K",
    rating: 4.8,
    category: "Themes",
  },
];

/**
 * /extensions — VS Code marketplace-inspired directory. Search box
 * plus category tabs filter the animated extension grid.
 */
const Extensions = (): React.ReactElement => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ExtensionCategory | "All">("All");

  const filtered = useMemo(() => {
    return EXTENSIONS.filter((ext) => {
      const matchesCategory = category === "All" || ext.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        ext.name.toLowerCase().includes(query.toLowerCase()) ||
        ext.publisher.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className={styles.page}>
      <PageHero
        eyebrow="Marketplace"
        title="Extend C2X however you build."
        description="Thousands of extensions for languages, themes, debugging, and AI tooling — compatible with the open VS Code extension API."
      />

      <section className={cn("section-pad", styles.section)}>
        <Container>
          <div className={styles.toolbar}>
            <div className={styles.searchBar}>
              <Search size={16} />
              <input
                type="text"
                placeholder="Search extensions…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search extensions"
              />
            </div>

            <div
              className={styles.categoryRow}
              role="tablist"
              aria-label="Extension categories"
            >
              <button
                className={cn(
                  styles.categoryBtn,
                  category === "All" && styles.active,
                )}
                onClick={() => setCategory("All")}
              >
                <LayoutGrid size={13} /> All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={cn(
                    styles.categoryBtn,
                    category === cat && styles.active,
                  )}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <p className={styles.resultCount}>{filtered.length} extensions</p>

          <motion.div layout className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {filtered.map((ext, index) => (
                <motion.div
                  key={ext.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <ExtensionCard extension={ext} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className={styles.emptyState}>
              No extensions match your search.
            </p>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Extensions;
