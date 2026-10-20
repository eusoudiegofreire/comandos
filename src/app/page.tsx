import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { DisclaimerCallout } from "@/components/DisclaimerCallout";
import { LibraryExplorer } from "@/components/LibraryExplorer";
import { StacksSection } from "@/components/StacksSection";
import { BriefingSection } from "@/components/BriefingSection";
import { FinalCta } from "@/components/FinalCta";
import { DeliveryCta } from "@/components/DeliveryCta";
import { VideoShowcase } from "@/components/VideoShowcase";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <a
        href="#biblioteca"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Pular para a biblioteca
      </a>
      <DeliveryCta compact />
      <SiteHeader />
      <main>
        <Hero />
        <VideoShowcase />
        <DisclaimerCallout />
        <LibraryExplorer />
        <DeliveryCta />
        <StacksSection />
        <BriefingSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
