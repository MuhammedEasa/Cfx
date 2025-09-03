import Image from "next/image";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import Marquee from "./ui/marquee";
import { GalaxyBackground } from "./ui/galaxy-background";
import { MarketTicker } from "./market-ticker";
import HeroSlider from "./hero-slider";

const Hero = () => {
  const companies = [
    { name: "Apple", symbol: "AAPL", logo: "/logos/apple.svg" },
    { name: "Microsoft", symbol: "MSFT", logo: "/logos/microsoft.svg" },
    { name: "Nvidia", symbol: "NVDA", logo: "/logos/nvidia.svg" },
    { name: "Tesla", symbol: "TSLA", logo: "/logos/tesla.svg" },
    { name: "Meta", symbol: "META", logo: "/logos/meta.svg" },
    { name: "Amazon", symbol: "AMZN", logo: "/logos/amazon.svg" },
    { name: "Google", symbol: "GOOGL", logo: "/logos/google.svg" },
    { name: "Netflix", symbol: "NFLX", logo: "/logos/netflix.svg" },
  ];

  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative min-h-screen">
      {/* Galaxy Background Effect */}
      <AnimationContainer
        animation="scaleUp"
        delay={0.1}
        className="absolute inset-0 -z-10"
      >
        <GalaxyBackground className="opacity-40" />
      </AnimationContainer>

      {/* Hero Slider */}
      <div className="w-full mb-16 relative z-10">
        <HeroSlider />
      </div>

      {/* Company Logos Section */}
      <AnimationContainer
        animation="fadeUp"
        delay={0.6}
        className="w-full relative z-10"
      >
        <div className="flex flex-col items-center justify-center w-full py-8 md:py-16 relative">
          <div className="text-center mb-8">
            <p className="text-sm md:text-base text-muted-foreground">
              Trade Popular Stocks & Assets
            </p>
          </div>
          <div className="w-full relative max-w-6xl">
            <Marquee
              className="[--duration:20s] select-none [--gap:4rem]"
              pauseOnHover={false}
              repeat={6}
              reverse={false}
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center h-20 min-w-[120px] group"
                >
                  <div className="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={company.logo}
                      width={100}
                      height={100}
                      alt={company.name}
                      className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {company.symbol}
                  </div>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 -right-1 w-1/3 bg-gradient-to-l from-background z-40"></div>
            <div className="pointer-events-none absolute inset-y-0 -left-1 w-1/3 bg-gradient-to-r from-background z-40"></div>
          </div>
        </div>
      </AnimationContainer>

      {/* Live Market Ticker */}
      <AnimationContainer
        animation="fadeUp"
        delay={0.8}
        className="w-full mt-8 relative z-10"
      >
        <div className="bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
          <MarketTicker className="h-16" />
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default Hero;
