import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import { Check, Star, Crown, Zap } from "lucide-react";
import Link from "next/link";

const ACCOUNT_TYPES = [
    {
        name: "Standard",
        price: "$100",
        icon: Zap,
        description: "Perfect for new traders starting their journey",
        popular: false,
        features: [
            "Leverage: Starts from 400:1",
            "Live Market Access: Yes",
            "Suitable For: New Traders",
            "MT5 & CQG WebTrader",
            "Mobile, desktop, and tablet compatible",
            "24×5 Support"
        ],
        cta: "Open a Standard Account",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        name: "Pro",
        price: "$10,000",
        icon: Star,
        description: "Designed for professional and full-time traders",
        popular: true,
        features: [
            "Leverage: Starts from 400:1",
            "Live Market Access: Yes",
            "Suitable For: Professional/Full-Time Traders",
            "MT5 & CQG WebTrader",
            "Mobile, desktop, and tablet compatible",
            "Dedicated RM & 24×5 Support"
        ],
        cta: "Open a Pro Account",
        gradient: "from-primary/20 to-yellow-500/20"
    },
    {
        name: "Premium",
        price: "$25,000",
        icon: Crown,
        description: "Ultimate package for high volume traders",
        popular: false,
        features: [
            "Leverage: Starts from 400:1",
            "Live Market Access: Yes",
            "Suitable For: High Volume Traders",
            "MT5 & CQG WebTrader",
            "Mobile, desktop, and tablet compatible",
            "Dedicated RM & Sales Trader — 24×5 Support"
        ],
        cta: "Open a Premium Account",
        gradient: "from-purple-500/20 to-pink-500/20"
    }
];

export default function AccountTypesPage() {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-card/30 dark:to-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 dark:border-border/20">
                    <AnimationContainer animation="fadeUp" delay={0.1}>
                        <SectionBadge title="Account Types" />
                    </AnimationContainer>
                    
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <h1 className="text-4xl lg:text-5xl font-bold mt-6 mb-4">
                            Choose Your Trading Account
                        </h1>
                    </AnimationContainer>
                    
                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Select the perfect account type that matches your trading experience and investment goals. All accounts come with full market access and professional support.
                        </p>
                    </AnimationContainer>
                </div>

                {/* Account Types Grid */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {ACCOUNT_TYPES.map((account, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.4 + (index * 0.1)}
                        >
                            <Card className={`relative h-full transition-all duration-300 hover:scale-105 ${
                                account.popular 
                                    ? "border-primary/50 shadow-lg shadow-primary/20" 
                                    : "border-border hover:border-primary/30"
                            }`}>
                                {account.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                            Most Popular
                                        </div>
                                    </div>
                                )}
                                
                                <div className={`absolute inset-0 bg-gradient-to-br ${account.gradient} rounded-lg opacity-50`} />
                                
                                <CardHeader className="relative z-10 text-center pb-4">
                                    <div className="flex justify-center mb-4">
                                        <div className={`p-3 rounded-full ${
                                            account.popular 
                                                ? "bg-primary/20 text-primary" 
                                                : "bg-muted text-muted-foreground"
                                        }`}>
                                            <account.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    
                                    <CardTitle className="text-2xl font-bold">
                                        {account.name}
                                    </CardTitle>
                                    
                                    <div className="text-3xl font-bold text-primary mt-2">
                                        {account.price}
                                    </div>
                                    
                                    <CardDescription className="mt-2">
                                        {account.description}
                                    </CardDescription>
                                </CardHeader>
                                
                                <CardContent className="relative z-10 pt-0">
                                    <ul className="space-y-3 mb-8">
                                        {account.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-muted-foreground">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <Link href="/contact" className="block">
                                        <Button 
                                            className="w-full" 
                                            variant={account.popular ? "default" : "outline"}
                                            size="lg"
                                        >
                                            {account.cta}
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </AnimationContainer>
                    ))}
                </div>

                {/* Additional Information */}
                <AnimationContainer animation="fadeUp" delay={0.8} className="mt-16 text-center">
                    <div className="bg-card/50 rounded-lg p-8 border border-border/50">
                        <h3 className="text-xl font-semibold mb-4">Why Choose CFX Prime?</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                            <div>
                                <div className="font-medium text-foreground mb-2">Regulated & Secure</div>
                                <p>Fully regulated broker with segregated client funds and advanced security measures.</p>
                            </div>
                            <div>
                                <div className="font-medium text-foreground mb-2">Advanced Platforms</div>
                                <p>Access to MT5 and CQG WebTrader with professional trading tools and real-time data.</p>
                            </div>
                            <div>
                                <div className="font-medium text-foreground mb-2">Expert Support</div>
                                <p>Dedicated relationship managers and 24/5 multilingual customer support.</p>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
}
