import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "installation", label: "Installation", depth: 2 },
  { id: "commands", label: "Commands", depth: 2 },
  { id: "examples", label: "Examples", depth: 2 },
];

const CliDocs = (): React.ReactElement => {
  return (
    <DocPage
      title="CLI Tools"
      description="Command-line tools for C2X."
      breadcrumbLabel="CLI"
      readingTime={4}
      tocEntries={tocEntries}
    >
      <h2 id="installation">Installation</h2>
      <p>Install the C2X CLI using npm or download the binary.</p>

      <h2 id="commands">Commands</h2>
      <ul>
        <li>c2x init - Initialize a project</li>
        <li>c2x open - Open a workspace</li>
        <li>c2x sync - Sync changes</li>
      </ul>

      <h2 id="examples">Examples</h2>
      <p>See the CLI documentation for usage examples.</p>
    </DocPage>
  );
};

export default CliDocs;
