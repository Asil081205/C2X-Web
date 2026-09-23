import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "create-project", label: "Create a Project", depth: 2 },
  { id: "write-code", label: "Write Code", depth: 2 },
  { id: "collaborate", label: "Collaborate", depth: 2 },
  { id: "debug", label: "Debug", depth: 2 },
];

const QuickStart = (): React.ReactElement => {
  return (
    <DocPage
      title="Quick Start Guide"
      description="Get started with C2X in 5 minutes."
      breadcrumbLabel="Quick Start"
      readingTime={3}
      tocEntries={tocEntries}
    >
      <h2 id="create-project">Create a Project</h2>
      <p>Click the "New Project" button and choose a template.</p>

      <h2 id="write-code">Write Code</h2>
      <p>
        Start typing in the editor. C2X provides IntelliSense and AI
        completions.
      </p>

      <h2 id="collaborate">Collaborate</h2>
      <p>
        Invite team members to your workspace and code together in real-time.
      </p>

      <h2 id="debug">Debug</h2>
      <p>Set breakpoints, inspect variables, and step through your code.</p>
    </DocPage>
  );
};

export default QuickStart;
