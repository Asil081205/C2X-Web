import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "overview", label: "Overview", depth: 2 },
  { id: "authentication", label: "Authentication", depth: 2 },
  { id: "endpoints", label: "Endpoints", depth: 2 },
  { id: "examples", label: "Examples", depth: 2 },
];

const ApiDocs = (): React.ReactElement => {
  return (
    <DocPage
      title="API Reference"
      description="Complete API reference for C2X."
      breadcrumbLabel="API"
      readingTime={8}
      tocEntries={tocEntries}
    >
      <h2 id="overview">Overview</h2>
      <p>
        The C2X API provides programmatic access to your workspaces and
        projects.
      </p>

      <h2 id="authentication">Authentication</h2>
      <p>Use your API key to authenticate requests.</p>

      <h2 id="endpoints">Endpoints</h2>
      <ul>
        <li>GET /workspaces - List workspaces</li>
        <li>POST /workspaces - Create workspace</li>
        <li>GET /projects - List projects</li>
      </ul>

      <h2 id="examples">Examples</h2>
      <p>See the API documentation for code examples.</p>
    </DocPage>
  );
};

export default ApiDocs;
