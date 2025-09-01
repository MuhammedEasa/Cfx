import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Perks from "@/components/perks";
import PlatformMetrics from "@/components/platform-metrics";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <section id="home" className="w-full">
                <Hero />
            </section>

            <section id="about" className="w-full">
                <Perks />
            </section>

            <section id="how-it-works" className="w-full">
                <HowItWorks />
            </section>

            <section id="platform" className="w-full">
                <Features />
            </section>

            <section id="testimonials" className="w-full">
                <Testimonials />
            </section>

            <section id="products" className="w-full">
                <Pricing />
            </section>

            <section id="metrics" className="w-full">
                <PlatformMetrics />
            </section>

            <section id="faq" className="w-full">
                <FAQ />
            </section>

            <section id="cta" className="w-full">
                <CTA />
            </section>
        </div>
    );
};

export default HomePage;
