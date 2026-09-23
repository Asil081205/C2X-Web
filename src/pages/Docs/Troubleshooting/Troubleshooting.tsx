import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "common-issues", label: "Common Issues", depth: 2 },
  { id: "solutions", label: "Solutions", depth: 2 },
  { id: "support", label: "Support", depth: 2 },
];

const Troubleshooting = (): React.ReactElement => {
  return (
    <DocPage
      title="Troubleshooting"
      description="Common issues and their solutions."
      breadcrumbLabel="Troubleshooting"
      readingTime={5}
      tocEntries={tocEntries}
    >
      <h2 id="common-issues">Common Issues</h2>
      <ul>
        <li>Connection issues</li>
        <li>Performance issues</li>
        <li>Authentication issues</li>
      </ul>

      <h2 id="solutions">Solutions</h2>
      <p>Check your internet connection and try again.</p>

      <h2 id="support">Support</h2>
      <p>Contact support for further assistance.</p>
    </DocPage>
  );
};

export default Troubleshooting;
