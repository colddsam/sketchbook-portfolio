import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samrat | Full Stack Developer & Creative Designer",
    short_name: "Samrat Portfolio",
    description: "A creative portfolio showcasing the work of Samrat — Full Stack Developer & Creative Designer.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfbfb",
    theme_color: "#2a2a2a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
