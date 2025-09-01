import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Images from "./global/images";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import Marquee from "./ui/marquee";
import SectionBadge from "./ui/section-badge";
import { GalaxyBackground } from "./ui/galaxy-background";
import { MarketTicker } from "./market-ticker";

const Hero = () => {

    const companies = [
        Images.comp1,
        Images.comp2,
        Images.comp3,
        Images.comp4,
        Images.comp5,
        Images.comp6,
    ];

    return (
        <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full h-full flex-1">
            <div className="flex flex-col lg:flex-row w-full h-full lg:gap-16">
                <div className="flex flex-col items-start gap-10 py-8 w-full">
                    <div className="flex flex-col items-start gap-4">
                        <AnimationContainer animation="fadeUp" delay={0.2}>
                            <SectionBadge title="Serving Clients in 50+ Countries" />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4}>
                            <h1 className="text-5xl lg:text-6xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-neutral-500">
                                Trade Smarter with CFX Prime
                            </h1>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                                Unlock global markets with a secure and reliable trading platform. CFX Prime offers 2000+ CFD instruments, expert support, and innovative tools for traders at every level.
                            </p>
                        </AnimationContainer>
                    </div>

                    <AnimationContainer animation="fadeUp" delay={0.8}>
                        <div className="w-full">
                            <Link href="/">
                                <Button size="md" className="w-full md:w-auto">
                                    Start Trading Now
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={1}>
                        <div className="flex flex-col items-start gap-4 py-4">
                            <p className="text-sm md:text-base text-muted-foreground">
                                Trusted by 10,000+ Global Traders
                            </p>
                            <div className="w-full relative max-w-[calc(100vw-2rem)] lg:max-w-lg">
                                <Marquee className="[--duration:40s] select-none [--gap:2rem]">
                                    {[...Array(10)].map((_, index) => (
                                        <div key={index} className="flex items-center justify-center text-muted-foreground h-16">
                                            {companies[index % companies.length]({ className: "w-auto h-5" })}
                                        </div>
                                    ))}
                                </Marquee>
                                <div className="pointer-events-none absolute inset-y-0 -right-1 w-1/3 bg-gradient-to-l from-background z-40"></div>
                                <div className="pointer-events-none absolute inset-y-0 -left-1 w-1/3 bg-gradient-to-r from-background z-40"></div>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>

                <AnimationContainer animation="fadeRight" delay={0.4}>
                    <div className="flex flex-col items-center justify-center w-full h-min relative">
                        <div className="w-full max-w-2xl lg:max-w-4xl relative">
                            <Image
                                src="/icons/landing.png"
                                alt="CFX Prime Trading Platform"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                                width={1024}
                                height={1024}
                                className="object-contain w-full h-auto rounded-xl lg:rounded-2xl"
                                priority
                            />
                        </div>
                    </div>
                </AnimationContainer>
            </div>
            <AnimationContainer animation="scaleUp" delay={1.2} className="absolute inset-0 -z-10">
                <GalaxyBackground className="opacity-60" />
            </AnimationContainer>

            {/* Live Market Ticker */}
            <AnimationContainer animation="fadeUp" delay={1.4} className="w-full mt-16">
                <div className="bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
                    <MarketTicker className="h-16" />
                </div>
            </AnimationContainer>
        </Wrapper>
    )
};

export default Hero;
