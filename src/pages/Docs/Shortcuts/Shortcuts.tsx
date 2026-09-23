import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "general", label: "General", depth: 2 },
  { id: "editing", label: "Editing", depth: 2 },
  { id: "navigation", label: "Navigation", depth: 2 },
];

const Shortcuts = (): React.ReactElement => {
  return (
    <DocPage
      title="Keyboard Shortcuts"
      description="Boost your productivity with keyboard shortcuts."
      breadcrumbLabel="Keyboard Shortcuts"
      readingTime={4}
      tocEntries={tocEntries}
    >
      <h2 id="general">General</h2>
      <ul>
        <li>Ctrl+S - Save</li>
        <li>Ctrl+Shift+P - Command Palette</li>
        <li>Ctrl+Shift+E - Sidebar</li>
      </ul>

      <h2 id="editing">Editing</h2>
      <ul>
        <li>Ctrl+C - Copy</li>
        <li>Ctrl+V - Paste</li>
        <li>Ctrl+Z - Undo</li>
      </ul>

      <h2 id="navigation">Navigation</h2>
      <ul>
        <li>Ctrl+P - Go to File</li>
        <li>Ctrl+G - Go to Line</li>
      </ul>
    </DocPage>
  );
};

export default Shortcuts;
