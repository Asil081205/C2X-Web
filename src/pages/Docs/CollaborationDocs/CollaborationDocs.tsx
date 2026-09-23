import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "overview", label: "Overview", depth: 2 },
  { id: "features", label: "Features", depth: 2 },
  { id: "usage", label: "Usage", depth: 2 },
];

const CollaborationDocs = (): React.ReactElement => {
  return (
    <DocPage
      title="Collaboration"
      description="Real-time collaboration features in C2X."
      breadcrumbLabel="Collaboration"
      readingTime={4}
      tocEntries={tocEntries}
    >
      <h2 id="overview">Overview</h2>
      <p>
        C2X supports real-time collaboration where multiple users can edit
        the same file simultaneously.
      </p>

      <h2 id="features">Features</h2>
      <ul>
        <li>Live cursors</li>
        <li>Presence indicators</li>
        <li>Shared terminals</li>
        <li>Instant collaboration</li>
      </ul>

      <h2 id="usage">Usage</h2>
      <p>Invite teammates to your workspace and start coding together.</p>
    </DocPage>
  );
};

export default CollaborationDocs;
