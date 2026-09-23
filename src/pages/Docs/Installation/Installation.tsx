import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "system-requirements", label: "System Requirements", depth: 2 },
  { id: "windows", label: "Windows", depth: 2 },
  { id: "macos", label: "macOS", depth: 2 },
  { id: "linux", label: "Linux", depth: 2 },
];

const Installation = (): React.ReactElement => {
  return (
    <DocPage
      title="Installation Guide"
      description="Install C2X on your platform of choice."
      breadcrumbLabel="Installation"
      readingTime={4}
      tocEntries={tocEntries}
    >
      <h2 id="system-requirements">System Requirements</h2>
      <ul>
        <li>Modern browser (Chrome, Firefox, Edge, Safari)</li>
        <li>4GB RAM minimum</li>
        <li>Internet connection</li>
      </ul>

      <h2 id="windows">Windows</h2>
      <p>C2X works in any modern browser on Windows 10 and 11.</p>

      <h2 id="macos">macOS</h2>
      <p>C2X works in any modern browser on macOS 12 Monterey or later.</p>

      <h2 id="linux">Linux</h2>
      <p>C2X works in any modern browser on Linux distributions.</p>
    </DocPage>
  );
};

export default Installation;
