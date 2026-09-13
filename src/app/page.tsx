import { PortfolioPage } from "@/components/PortfolioPage";
import { siteConfig } from "@/config/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Materials Scientist and Scientific Project Coordinator",
    homeLocation: { "@type": "Place", name: "Hamburg, Germany" },
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: [
      "Materials science",
      "Semiconductors",
      "Surface science",
      "Thin films",
      "Energy materials",
      "Hydrogen storage and generation",
      "Fuel cells and electrolysers",
      "Nanotechnology",
      "Scientific project coordination",
      "Applied artificial intelligence",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <PortfolioPage />
    </>
  );
}
