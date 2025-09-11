"use client"

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MarketTicker } from "./market-ticker";
import Wrapper from "./global/wrapper";
import Marquee from "./ui/marquee";
import Image from "next/image";
import AnimationContainer from "./global/animation-container";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useTheme } from "next-themes";

const COMPANY_LOGOS = [
  { name: "Apple", symbol: "AAPL", logo: "/logos/apple.svg" },
  { name: "Microsoft", symbol: "MSFT", logo: "/logos/microsoft.svg" },
  { name: "Nvidia", symbol: "NVDA", logo: "/logos/nvidia.svg" },
  { name: "Tesla", symbol: "TSLA", logo: "/logos/tesla.svg" },
  { name: "Meta", symbol: "META", logo: "/logos/meta.svg" },
  { name: "Amazon", symbol: "AMZN", logo: "/logos/amazon.svg" },
  { name: "Google", symbol: "GOOGL", logo: "/logos/google.svg" },
  { name: "Netflix", symbol: "NFLX", logo: "/logos/netflix.svg" },
];

const HERO_SLIDES = [
  {
    id: 1,
    title: 'Professional Trading Platform',
    subtitle: 'Advanced Technology',
    description: 'Access professional-grade trading tools with advanced charting, real-time data, and institutional-level execution for serious traders.',
    buttonText: 'Explore Platform',
    buttonLink: '/account-types',
    accent: 'from-orange-500 to-red-500',
    lightImage: '/images/Professional_Light_01.png',
    darkImage: '/images/Professional_Dark_01.png',
    type: 'image'
  },
  {
    id: 2,
    title: 'Competitive Spreads',
    subtitle: 'Lowest Market Spreads',
    description: 'Trade with the tightest spreads in the industry. Maximize your profits with our competitive pricing across all major currency pairs and instruments.',
    buttonText: 'View Spreads',
    buttonLink: '/account-types',
    accent: 'from-blue-500 to-cyan-500',
    lightImage: '/images/Spreads_white.png',
    darkImage: '/images/Spreads_dark.png',
    type: 'image'
  },
  {
    id: 3,
    title: 'Swap-Free Trading',
    subtitle: 'Islamic Accounts Available',
    description: 'Trade without overnight swap charges. Our swap-free accounts comply with Islamic finance principles, offering ethical trading solutions.',
    buttonText: 'Learn More',
    buttonLink: '/account-types',
    accent: 'from-green-500 to-emerald-500',
    lightImage: '/images/Swap_Free_Light_02.png',
    darkImage: '/images/Swap_Free_Dark_02.png',
    type: 'image'
  },
  {
    id: 4,
    title: 'Refer & Earn with CFX Prime',
    subtitle: 'Referral Program',
    description: 'Invite friends and earn rewards for every successful referral. Build your network while growing your trading opportunities with our comprehensive referral program.',
    buttonText: 'Start Referring',
    buttonLink: '/contact',
    accent: 'from-primary to-primary/80',
    lightImage: '/images/referandearn.png',
    darkImage: '/images/referandearn.png',
    type: 'image'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = HERO_SLIDES[currentSlide];
  const isDark = resolvedTheme === 'dark';
  const currentImage = isDark ? activeSlide.darkImage : activeSlide.lightImage;

  return (
    <div className="w-full relative flex flex-col">
      {/* Hero Section */}
      <section className="w-full min-h-[600px] lg:min-h-[700px] relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/50 dark:from-background dark:via-background/90 dark:to-card/30">
        <Wrapper className="relative z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px] lg:min-h-[700px] py-12 lg:py-20">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-8">
              <AnimationContainer animation="fadeUp" delay={0.2}>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${activeSlide.accent} text-white text-sm font-medium mb-6 shadow-lg`}>
                  {activeSlide.subtitle}
                </div>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.3}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                  {activeSlide.title}
                </h1>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.4}>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  {activeSlide.description}
                </p>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={activeSlide.buttonLink}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full hover-lift focus-ring group"
                    >
                      {activeSlide.buttonText}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 text-lg font-semibold rounded-full hover-lift focus-ring group border-2"
                    >
                      <Play className="mr-2 w-5 h-5" />
                      Watch Demo
                    </Button>
                  </Link>
                </div>
              </AnimationContainer>

              {/* Slide Indicators */}
              <AnimationContainer animation="fadeUp" delay={0.6}>
                <div className="flex space-x-2 pt-4">
                  {HERO_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-primary scale-125'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </AnimationContainer>
            </div>

            {/* Right Column - Interface Mockup */}
            <div className="relative">
              <AnimationContainer animation="fadeLeft" delay={0.4}>
                <div className="relative w-full max-w-3xl mx-auto">
                  {/* Main interface mockup */}
                  <div className="relative w-full">
                    <div className="relative aspect-[5/4] w-full">
                      <Image
                        src={currentImage}
                        alt={activeSlide.title}
                        fill
                        className="object-contain"
                        priority={currentSlide === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </AnimationContainer>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Companies Logo Section */}
      <section className="w-full py-12 lg:py-16 bg-muted/30 dark:bg-card/20">
        <Wrapper>
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground">
                Trade stocks from world&apos;s leading companies
              </p>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <Marquee className="[--duration:40s] [--gap:4rem]" pauseOnHover={false} repeat={3}>
              {COMPANY_LOGOS.map((company, index) => (
                <div key={`${company.name}-${index}`} className="flex items-center justify-center min-w-[140px]">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </Marquee>
          </AnimationContainer>
        </Wrapper>
      </section>

      {/* Market Ticker Section */}
      <section className="w-full">
        <MarketTicker className="border-t border-border" />
      </section>
    </div>
  );
};

export default Hero;