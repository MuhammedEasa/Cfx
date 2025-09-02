"use client";

import { ACCOUNT_TYPES } from '@/constants';
import { cn } from '@/lib';
import { Check, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from './ui/section-badge';

const Pricing = () => {
    const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
    
    const toggleSection = (accountName: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [accountName]: !prev[accountName]
        }));
    };

    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Account Types" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Choose your trading account
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Select an account type that best suits your trading experience and goals
                    </p>
                </AnimationContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 max-w-5xl mx-auto">
                {ACCOUNT_TYPES.map((account, index) => (
                    <AnimationContainer
                        key={index}
                        animation="fadeUp"
                        delay={0.6 + (index * 0.2)}
                    >
                        <div
                            className={cn(
                                "relative rounded-3xl backdrop-blur-3xl p-8 flex flex-col overflow-hidden",
                                account.popular && "bg-card/80",
                                !account.popular && "bg-gradient-to-b from-card/80 to-background/0"
                            )}
                        >
                            {account.popular && (
                                <>
                                    <div className="absolute inset-x-0 mx-auto -top-1/8 size-40 rounded-full bg-primary -z-10 blur-[5rem]" />
                                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
                                </>
                            )}

                            <AnimationContainer animation="fadeUp" delay={0.7 + (index * 0.2)}>
                                <div className="mb-6">
                                    <h3 className="text-2xl font-medium mb-2">{account.name}</h3>
                                    <p className="text-sm text-muted-foreground">{account.tagline}</p>
                                </div>
                            </AnimationContainer>

                            <AnimationContainer animation="fadeUp" delay={0.8 + (index * 0.2)}>
                                <div className="px-4 py-3 bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 rounded-lg mb-6">
                                    <p className="text-sm font-medium text-center">{account.highlight}</p>
                                </div>
                            </AnimationContainer>

                            <div className="mb-6">
                                <AnimationContainer animation="fadeUp" delay={0.9 + (index * 0.2)}>
                                    <ul className="space-y-3">
                                        {account.features.slice(0, 4).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-sm">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {expandedSections[account.name] && (
                                        <ul className="space-y-3 mt-3">
                                            {account.features.slice(4).map((feature, featureIndex) => (
                                                <li key={featureIndex + 4} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    
                                    {account.features.length > 4 && (
                                        <button 
                                            onClick={() => toggleSection(account.name)} 
                                            className="flex items-center gap-1 text-xs text-primary mt-3 hover:underline"
                                        >
                                            {expandedSections[account.name] ? (
                                                <>
                                                    <ChevronUp className="w-4 h-4" />
                                                    Show less features
                                                </>
                                            ) : (
                                                <>
                                                    <ChevronDown className="w-4 h-4" />
                                                    Show {account.features.length - 4} more features
                                                </>
                                            )}
                                        </button>
                                    )}
                                </AnimationContainer>
                            </div>

                            <AnimationContainer animation="fadeUp" delay={1 + (index * 0.2)}>
                                <h4 className="font-medium text-xl mb-2">{account.callout}</h4>
                                <p className="text-sm text-muted-foreground mb-6">{account.description}</p>
                            </AnimationContainer>

                            <AnimationContainer animation="fadeUp" delay={1.1 + (index * 0.2)}>
                                <div className="space-y-3">
                                    <button
                                        onClick={() => toggleSection(`${account.name}-benefits`)}
                                        className="flex items-center justify-between w-full text-sm font-medium bg-neutral-800/30 rounded-lg p-4 hover:bg-neutral-800/50 transition-colors"
                                    >
                                        <span>Why Choose {account.name == "Live Account" ? "CFX Prime" : "a Demo Account"}?</span>
                                        {expandedSections[`${account.name}-benefits`] ? (
                                            <ChevronUp className="w-4 h-4" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4" />
                                        )}
                                    </button>
                                    
                                    {expandedSections[`${account.name}-benefits`] && (
                                        <div className="bg-neutral-800/20 rounded-xl p-4 mt-2">
                                            <ul className="space-y-4">
                                                {account.benefits.map((benefit, benefitIndex) => (
                                                    <li key={benefitIndex} className="flex items-start gap-3">
                                                        <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <div>
                                                            <h6 className="font-medium text-sm">{benefit.title}</h6>
                                                            <p className="text-xs text-muted-foreground">{benefit.description}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </AnimationContainer>

                            <AnimationContainer animation="fadeUp" delay={1.2 + (index * 0.2)}>
                                <Link href={account.name === "Live Account" ? "/account-types" : "/contact"}>
                                    <Button
                                        variant={account.popular ? "default" : "secondary"}
                                        className="w-full mt-6"
                                    >
                                        {account.buttonText}
                                    </Button>
                                </Link>
                            </AnimationContainer>
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    );
};

export default Pricing;