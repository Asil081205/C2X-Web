import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "overview", label: "Overview", depth: 2 },
  { id: "features", label: "Features", depth: 2 },
  { id: "usage", label: "Usage", depth: 2 },
  { id: "examples", label: "Examples", depth: 2 },
];

const AiDocs = (): React.ReactElement => {
  return (
    <DocPage
      title="AI Assistant"
      description="Learn how to use C2X's AI-powered coding assistant."
      breadcrumbLabel="AI Assistant"
      readingTime={5}
      tocEntries={tocEntries}
    >
      <h2 id="overview">Overview</h2>
      <p>
        C2X is your pair programmer built into the IDE. It provides
        context-aware suggestions, one-click refactors, and intelligent
        completions.
      </p>

      <h2 id="features">Features</h2>
      <ul>
        <li>Smart completions</li>
        <li>Natural language to code</li>
        <li>Intelligent refactoring</li>
        <li>Security scanning</li>
      </ul>

      <h2 id="usage">Usage</h2>
      <p>Start typing and C2X will suggest completions.</p>

      <h2 id="examples">Examples</h2>
      <p>See the AI Assistant documentation for code examples.</p>
    </DocPage>
  );
};

export default AiDocs;
