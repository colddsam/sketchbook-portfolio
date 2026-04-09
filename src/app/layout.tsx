import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samrat | Full Stack Developer & Creative Designer",
  description: "A creative portfolio showcasing the work of Samrat — Full Stack Developer & Creative Designer. Hand-drawn doodle aesthetic meets pixel-perfect execution.",
  keywords: ["Samrat portfolio", "Full Stack Developer", "Creative Designer", "Web Development", "Next.js", "Java", "Spring Boot", "Machine Learning", "Graphic Design", "Doodle UI", "Accenture Developer"],
  authors: [{ name: "Samrat", url: "https://colddsam.com" }],
  creator: "Samrat",
  publisher: "Samrat",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://colddsam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samrat | Full Stack Developer & Creative Designer",
    description: "A creative portfolio showcasing the work of Samrat — Full Stack Developer & Creative Designer. Hand-drawn doodle aesthetic.",
    url: "https://colddsam.com",
    siteName: "Samrat's Sketchbook Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samrat | Full Stack Developer & Creative Designer",
    description: "A creative portfolio showcasing the work of Samrat — Full Stack Developer & Creative Designer.",
    creator: "@samrat", // Placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "5nKg5xf4hIJu_aK0BVKpGxC_zmLcJ4aX0hU5PteFTmM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samrat",
    jobTitle: "Full Stack Developer & Creative Designer",
    url: "https://colddsam.com",
    worksFor: {
      "@type": "Organization",
      name: "Accenture"
    },
    knowsAbout: ["Full Stack Development", "React", "Next.js", "Java", "Spring Boot", "Machine Learning", "Graphic Design"],
    sameAs: [
      "https://github.com/colddsam",
      "https://linkedin.com/in/colddsam"
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
