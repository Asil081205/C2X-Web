import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "overview", label: "Overview", depth: 2 },
  { id: "installation", label: "Installation", depth: 2 },
  { id: "development", label: "Development", depth: 2 },
];

const ExtensionsDocs = (): React.ReactElement => {
  return (
    <DocPage
      title="Extensions"
      description="Extend C2X with custom extensions."
      breadcrumbLabel="Extensions"
      readingTime={5}
      tocEntries={tocEntries}
    >
      <h2 id="overview">Overview</h2>
      <p>
        C2X has a growing extensions marketplace compatible with the open
        VS Code API.
      </p>

      <h2 id="installation">Installation</h2>
      <p>Install extensions from the marketplace or build your own.</p>

      <h2 id="development">Development</h2>
      <p>Build custom extensions with the Extension API.</p>
    </DocPage>
  );
};

export default ExtensionsDocs;
