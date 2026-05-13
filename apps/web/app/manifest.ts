import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StackFoundry",
    short_name: "StackFoundry",
    description: "Install production SaaS modules as editable source code.",
    id: "https://stackfoundry.dev/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#151515",
    theme_color: "#d18135",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
