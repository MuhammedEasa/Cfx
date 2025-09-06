"use client"
import { METRICS } from '@/constants';
import { cn } from "@/lib";
import Image from "next/image";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import { Button } from './ui/button';
import SectionBadge from './ui/section-badge';
import { useEffect, useRef, useState } from 'react';
type AnimatedCounterProps = {
    value: number;
  };
  
  const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef<HTMLSpanElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = Math.ceil(value / 30);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 50);
  
          observer.disconnect();
        }
      }, { threshold: 0.1 });
  
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
  
      return () => observer.disconnect();
    }, [value]);
  
    return <span ref={counterRef}>{count}</span>;
  };
  

const PlatformMetrics = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="Platform Impact" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                            Your Gateway to
                            <br />
                            Global Markets
                        </h2>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Trade forex, indices, commodities and more with CFX Prime&apos;s leading platforms.
                        </p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <Button className="mt-4">
                            Start Trading
                        </Button>
                    </AnimationContainer>
                </div>

                <div className="flex flex-col gap-6 px-1 md:px-0">
                    {METRICS.map((metric, index) => (
                        <AnimationContainer
                            key={index}
                            animation={metric.reverse ? "fadeLeft" : "fadeRight"}
                            delay={0.6 + (index * 0.2)}
                        >
                            <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 backdrop-blur-sm border border-primary/20 dark:border-primary/30 p-4 lg:p-6 overflow-hidden z-0 min-h-[120px]">
                                <AnimationContainer animation="scaleUp" delay={0.7 + (index * 0.2)}>
                                    <div className={cn(
                                        "absolute -bottom-1/2 right-0 bg-primary size-16 lg:size-24 blur-[2rem] lg:blur-[3rem] rounded-full -z-10",
                                        metric.reverse && "left-0"
                                    )}></div>
                                </AnimationContainer>

                                <div className={cn(
                                    "flex items-center justify-between gap-6 z-30 h-full",
                                    metric.reverse && "flex-row-reverse"
                                )}>
                                    <AnimationContainer animation="fadeUp" delay={0.8 + (index * 0.2)}>
                                        <div className="flex flex-col justify-center flex-1">
                                            <div className="flex items-baseline gap-1 mb-1">
                                                <span className="text-3xl lg:text-4xl font-medium text-foreground">
                                                    <AnimatedCounter value={metric.number} />
                                                </span>
                                                {metric.suffix && (
                                                    <span className="text-3xl lg:text-4xl font-medium text-foreground">
                                                        {metric.suffix}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm lg:text-base text-muted-foreground font-medium">
                                                {metric.label}
                                            </p>
                                        </div>
                                    </AnimationContainer>

                                    <AnimationContainer
                                        animation={metric.reverse ? "fadeRight" : "fadeLeft"}
                                        delay={0.9 + (index * 0.2)}
                                    >
                                        <div className="relative flex-shrink-0">
                                            {/* Single circle container */}
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 shadow-md">
                                                <Image
                                                    src={metric.image}
                                                    alt={metric.label}
                                                    width={40}
                                                    height={40}
                                                    className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                                                />
                                            </div>
                                        </div>
                                    </AnimationContainer>
                                </div>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default PlatformMetrics;