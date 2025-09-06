import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import MarketsTabs from "@/components/markets-tabs";
import PlatformMetrics from "@/components/platform-metrics";
import Pricing from "@/components/pricing";
import StartTrading from "@/components/start-trading";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
  return (
    <div className="w-full relative flex flex-col">
      <section id="home" className="w-full">
        <Hero />
      </section>

      <section id="markets" className="w-full">
        <MarketsTabs />
      </section>



      <section id="metrics" className="w-full">
        <PlatformMetrics />
      </section>

      <section id="start-trading" className="w-full">
        <StartTrading />
      </section>

      <section id="testimonials" className="w-full">
        <Testimonials />
      </section>

      <section id="products" className="w-full">
        <Pricing />
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
