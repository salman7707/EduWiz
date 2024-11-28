import Features from "@/components/shared/pageSection/homePageSection/FeaturedSection";
import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import WhyUsSection from "@/components/shared/pageSection/homePageSection/WhyUsSection";
import IMAGES from "../../public/images";
import MoreFeatureSection from "@/components/shared/pageSection/homePageSection/MoreFeatureSection";
import CTASection from "@/components/shared/pageSection/homePageSection/CTASection";
import TrustSection from "@/components/shared/pageSection/homePageSection/TrustSection";
import FormSection from "@/components/shared/pageSection/homePageSection/FormSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Features />
      <WhyUsSection
        tag="Why Us?"
        buttonHref="/signup"
        title="Why eSkooly is the best school management software?"
        description="Besides, eSkooly is a completely free online school management software, it has more school management features than any other online school management system in the market."
        imageSrc={IMAGES.DESKTOP}
      />
      <WhyUsSection
        vertical={true}
        tag="Manage User Roles"
        title="Separate Portals Available"
        description="Our school management system comes with a separate portal for every user role. An admin portal with full controls, separate portals for Management staff, Accountant, Teachers, Parents, and Students."
        buttonHref="/signup"
        imageSrc={IMAGES.ALLTEAM}
      />
      <WhyUsSection
        tag="Message System"
        title="Messaging and file sharing system"
        description="Discuss and share ideas with other users through our messaging system. With this feature, you can do real-time chat with every individual associated with your institution."
        buttonText="Sign Up Now"
        buttonHref="/signup"
        buttonIcon="im im-icon-Add-User"
        imageSrc={IMAGES.COMMUNICATION}
      />
      <WhyUsSection
        tag="SMS Alerts"
        title="Free SMS Services"
        description="Send unlimited free SMS alerts on mobile numbers with our 100% free SMS gateway application. Now no need to buy expensive branded SMS to send alerts on mobile phones."
        buttonText="Download SMS Gateway"
        buttonHref="https://sms.eskooly.com/app/sms-gateway.apk"
        buttonIcon="im im-icon-Android"
        imageSrc={IMAGES.SMS}
        reverse
      />
      <WhyUsSection
        tag="Stay Mobile"
        title="Free Mobile Application"
        description="Download and install our free mobile application to stay on mobile. Our mobile app is for every registered user like Admin, Teacher, Accountant, Management staff, Parents, and students."
        buttonText="Download SMS Gateway"
        buttonHref="https://sms.eskooly.com/app/sms-gateway.apk"
        buttonIcon="im im-icon-Android"
        imageSrc={IMAGES.MOBICHAT}
      />
      <WhyUsSection
        tag="Live Class"
        title="Free online live classes"
        description="Stop using third-party apps like Zoom, Google meet, or Microsoft team to conduct online classes. Use our most powerful and easy-to-use platform to conduct your live online classes. It's 100% free."
        buttonHref="https://sms.eskooly.com/app/sms-gateway.apk"
        buttonIcon="im im-icon-Android"
        imageSrc={IMAGES.LIVECLASS}
        reverse
      />
      <WhyUsSection
        tag="Desktop App"
        title="Desktop version for Windows, MacOS, and Linux"
        description="Download and install our school management software in your computer just paying a small one time payment."
        buttonText="Download SMS Gateway"
        buttonHref="https://sms.eskooly.com/app/sms-gateway.apk"
        buttonIcon="im im-icon-Android"
        imageSrc={IMAGES.SUPPORTTEAM}
      />
      <WhyUsSection
        tag="Multilingual"
        title="Available In all Languages"
        description="Our free school management software comes in all languages. Manage your educational institute with your native language."
        buttonText="Download SMS Gateway"
        buttonHref="https://sms.eskooly.com/app/sms-gateway.apk"
        buttonIcon="im im-icon-Android"
        imageSrc={IMAGES.LANGUAGE}
        reverse
      />
      <MoreFeatureSection />
      <CTASection />
      <TrustSection />
      <FormSection />
      <Footer />
    </div>
  );
}
