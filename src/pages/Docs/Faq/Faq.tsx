import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "general", label: "General", depth: 2 },
  { id: "features", label: "Features", depth: 2 },
  { id: "pricing", label: "Pricing", depth: 2 },
];

const Faq = (): React.ReactElement => {
  return (
    <DocPage
      title="FAQ"
      description="Frequently asked questions about C2X."
      breadcrumbLabel="FAQ"
      readingTime={6}
      tocEntries={tocEntries}
    >
      <h2 id="general">General</h2>
      <h3>What is C2X?</h3>
      <p>C2X is an AI-native collaborative cloud IDE.</p>

      <h2 id="features">Features</h2>
      <h3>Does C2X support AI?</h3>
      <p>Yes, C2X includes AI-powered coding assistance.</p>

      <h2 id="pricing">Pricing</h2>
      <h3>Is C2X free?</h3>
      <p>C2X is free to use with premium plans available.</p>
    </DocPage>
  );
};

export default Faq;
