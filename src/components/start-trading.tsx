"use client"

import { Button } from "./ui/button";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import Image from "next/image";
import { ArrowRight, FileCheck, HandCoins, TrendingUp } from "lucide-react";

const TRADING_STEPS = [
  {
    id: 1,
    icon: FileCheck,
    title: "Register & verify your account",
    description: "Quick and secure account setup"
  },
  {
    id: 2,
    icon: HandCoins,
    title: "Make your first deposit",
    description: "Fund your account securely"
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "You're ready to start trading!",
    description: "Access global markets instantly"
  }
];

const StartTrading = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Start with Trust. Trade with Confidence
              <br />
              <span className="text-primary">CFX Prime</span>
            </h2>
          </AnimationContainer>
          
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a global community of traders who value transparent pricing, lightning-fast execution, 
              and real human support 24/7. Open your account in minutes and trade when opportunity strikes.
            </p>
          </AnimationContainer>
        </div>

        {/* Steps Container */}
        <AnimationContainer animation="fadeUp" delay={0.4}>
          <div className="relative bg-gradient-to-br from-card/50 to-background/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 lg:p-8 shadow-xl max-w-4xl mx-auto">
            {/* Steps Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {TRADING_STEPS.map((step, index) => (
                <div key={step.id} className="relative">
                  <AnimationContainer 
                    animation="fadeUp" 
                    delay={0.5 + (index * 0.1)}
                  >
                    <div
                      className="group relative bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-4 lg:p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/30 hover-lift focus-ring h-[180px] flex flex-col justify-center"
                      role="article"
                      aria-labelledby={`step-${step.id}-title`}
                    >
                      {/* Step Number */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                          {step.id}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="mb-4 flex justify-center pt-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3
                        id={`step-${step.id}-title`}
                        className="text-base font-semibold mb-2 text-foreground"
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </AnimationContainer>

                  {/* Arrow between steps (desktop only) */}
                  {index < TRADING_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 z-10">
                      <AnimationContainer
                        animation="fadeLeft"
                        delay={0.7 + (index * 0.1)}
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </AnimationContainer>
                    </div>
                  )}

                  {/* Arrow between steps (mobile only) */}
                  {index < TRADING_STEPS.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <AnimationContainer
                        animation="fadeUp"
                        delay={0.7 + (index * 0.1)}
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center rotate-90">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </AnimationContainer>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimationContainer>

        {/* CTA Button */}
        <AnimationContainer animation="fadeUp" delay={0.8}>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover-lift focus-ring"
            >
              Start Trading
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default StartTrading;
