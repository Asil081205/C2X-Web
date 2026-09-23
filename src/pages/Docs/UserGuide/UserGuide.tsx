import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "editor", label: "Editor", depth: 2 },
  { id: "sidebar", label: "Sidebar", depth: 2 },
  { id: "terminal", label: "Terminal", depth: 2 },
  { id: "settings", label: "Settings", depth: 2 },
];

const UserGuide = (): React.ReactElement => {
  return (
    <DocPage
      title="User Guide"
      description="Learn how to use C2X effectively."
      breadcrumbLabel="User Guide"
      readingTime={6}
      tocEntries={tocEntries}
    >
      <h2 id="editor">Editor</h2>
      <p>
        The editor provides syntax highlighting, IntelliSense, and multi-cursor
        editing.
      </p>

      <h2 id="sidebar">Sidebar</h2>
      <p>
        The sidebar gives you access to files, search, extensions, and more.
      </p>

      <h2 id="terminal">Terminal</h2>
      <p>Run commands directly in the integrated terminal.</p>

      <h2 id="settings">Settings</h2>
      <p>Customize your editor with themes, keybindings, and preferences.</p>
    </DocPage>
  );
};

export default UserGuide;
