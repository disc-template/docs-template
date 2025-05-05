import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const DocumentationSidebar: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Project Documentation",
      items: [
        {
          type: "doc",
          id: "intro",
          label: "Documentation",
        },
        {
          type: "doc",
          id: "overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "installation",
          label: "Installation",
        },
        {
          type: "doc",
          id: "usage",
          label: "Usage",
        },
        {
          type: "doc",
          id: "faq",
          label: "FAQ",
        },
      ],
    },
    {
      type: "category",
      label: "Handoff Documentation",
      items: [
        {
          type: "doc",
          id: "hand-off-documentation/intro",
          label: "Handoff Documentation",
        },
        {
          type: "doc",
          id: "hand-off-documentation/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "hand-off-documentation/next-steps",
          label: "Installation",
        },
        {
          type: "doc",
          id: "hand-off-documentation/credits",
          label: "Usage",
        },
        {
          type: "doc",
          id: "hand-off-documentation/acknowledgements",
          label: "FAQ",
        },
      ],
    },
  ],
};

export default DocumentationSidebar;
