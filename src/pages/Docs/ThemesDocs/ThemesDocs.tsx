import DocPage from "@/components/docs/DocPage";
import type { TocEntry } from "@/components/docs/TableOfContents";

const tocEntries: TocEntry[] = [
  { id: "overview", label: "Overview", depth: 2 },
  { id: "available", label: "Available Themes", depth: 2 },
  { id: "custom", label: "Custom Themes", depth: 2 },
];

const ThemesDocs = (): React.ReactElement => {
  return (
    <DocPage
      title="Themes"
      description="Customize C2X with themes."
      breadcrumbLabel="Themes"
      readingTime={3}
      tocEntries={tocEntries}
    >
      <h2 id="overview">Overview</h2>
      <p>
        C2X offers dozens of curated dark, light, and high-contrast color
        themes.
      </p>

      <h2 id="available">Available Themes</h2>
      <ul>
        <li>Midnight</li>
        <li>Solar</li>
        <li>Contrast+</li>
        <li>And many more</li>
      </ul>

      <h2 id="custom">Custom Themes</h2>
      <p>Create your own custom themes.</p>
    </DocPage>
  );
};

export default ThemesDocs;
