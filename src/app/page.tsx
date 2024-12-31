import Features from "@/components/shared/pageSection/homePageSection/FeaturedSection";
import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import WhyUsSection from "@/components/shared/pageSection/homePageSection/WhyUsSection";
import MoreFeatureSection from "@/components/shared/pageSection/homePageSection/MoreFeatureSection";
import CTASection from "@/components/shared/pageSection/homePageSection/CTASection";
import TrustSection from "@/components/shared/pageSection/homePageSection/TrustSection";
import FormSection from "@/components/shared/pageSection/homePageSection/FormSection";
import Footer from "@/components/shared/Footer";
import whyUsData from "@/lib/WhyusSectionData";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Features />
      {whyUsData.map((data) => (
        <div key={data.id}>
          <WhyUsSection
            tag={data.tag}
            buttonHref={data.buttonHref}
            title={data.title}
            description={data.description}
            buttonIcon={data.buttonIcon}
            buttonText={data.buttonText}
            reverse={data.reverse}
            vertical={data.vertical}
            imageSrc={data.imageSrc}
          />
        </div>
      ))}
      <MoreFeatureSection />
      <CTASection />
      <TrustSection />
      <FormSection />
      <Footer />
    </div>
  );
}
