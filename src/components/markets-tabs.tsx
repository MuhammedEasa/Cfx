"use client"

import { useState } from "react";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";

interface MarketData {
  id: string;
  name: string;
  title: string;
  description: string[];
  image: string;
}

const MARKETS_DATA: MarketData[] = [
  {
    id: "stocks",
    name: "Stocks",
    title: "Stock Trading",
    description: [
      "Trade 300+ top stocks from global markets including Apple, Meta, Disney, LVMH, and Tesla. Access real-time market data and capitalize on global opportunities.",
      "Benefit from competitive spreads, instant execution, and comprehensive market analysis tools designed for both novice and professional traders.",
      "Diversify your portfolio with blue-chip stocks, growth stocks, and dividend-paying companies across multiple sectors and geographic regions."
    ],
    image: "/images/products_img.png"
  },
  {
    id: "indices",
    name: "Indices",
    title: "Index Trading",
    description: [
      "Trade major global indices including S&P 500, NASDAQ, FTSE 100, DAX, and Nikkei 225. Get exposure to entire market sectors with single trades.",
      "Leverage market volatility with tight spreads and fast execution on the world's most popular indices, available 24/7 during market hours.",
      "Perfect for traders looking to diversify risk across multiple stocks while maintaining focused market exposure."
    ],
    image: "/images/products_img.png"
  },
  {
    id: "commodities",
    name: "Commodities",
    title: "Commodity Trading",
    description: [
      "Diversify your portfolio by trading essential commodities like gold, silver, crude oil, and natural gas. Benefit from global market trends and economic indicators.",
      "Access precious metals, energy commodities, and agricultural products with competitive pricing and professional-grade trading tools.",
      "Hedge against inflation and currency fluctuations while capitalizing on supply and demand dynamics in global commodity markets."
    ],
    image: "/images/products_img.png"
  },
  {
    id: "forex",
    name: "Forex",
    title: "Forex Trading",
    description: [
      "Access over 80 major, minor, and exotic forex pairs including EURUSD, GBPUSD, AUDJPY, and CADJPY. Trade the world's largest financial market.",
      "Benefit from tight spreads, high liquidity, and 24/7 market access with advanced charting tools and real-time market analysis.",
      "Perfect for both scalping and long-term strategies with leverage options and comprehensive risk management tools."
    ],
    image: "/images/products_img.png"
  },
  {
    id: "crypto",
    name: "Crypto",
    title: "Cryptocurrency Trading",
    description: [
      "Trade popular cryptocurrencies including Bitcoin, Ethereum, and other major digital assets with competitive spreads and secure execution.",
      "Access the volatile crypto markets with professional trading tools, real-time charts, and comprehensive market analysis.",
      "Capitalize on the digital revolution with 24/7 trading availability and advanced order types for optimal trade management."
    ],
    image: "/images/products_img.png"
  },
  {
    id: "etfs",
    name: "ETFs",
    title: "ETF Trading",
    description: [
      "Explore diverse markets with ETF CFDs at CFX Prime, trading sectors like Energy, Financials, Healthcare, and Technology with streamlined execution.",
      "Access broad market exposure through exchange-traded funds with lower costs and instant diversification across multiple asset classes.",
      "Perfect for long-term investors and active traders seeking exposure to specific sectors, regions, or investment themes."
    ],
    image: "/images/products_img.png"
  },
  {
    id: "futures",
    name: "Futures",
    title: "Futures Trading",
    description: [
      "Lock in prices and mitigate risks with CFD futures on indices and commodities, accessible across MT5 from any device with professional execution.",
      "Trade futures contracts on major commodities, indices, and currencies with transparent pricing and advanced risk management tools.",
      "Ideal for hedging strategies and speculative trading with standardized contracts and high liquidity in global futures markets."
    ],
    image: "/images/products_img.png"
  }
];

const MarketsTabs = () => {
  const [activeTab, setActiveTab] = useState("stocks");

  const activeMarket = MARKETS_DATA.find(market => market.id === activeTab) || MARKETS_DATA[0];

  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Trade all your favourite markets in{" "}
              <span className="text-primary">one place</span>
            </h2>
          </AnimationContainer>
          
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access global financial markets with competitive spreads, advanced tools, and professional execution.
            </p>
          </AnimationContainer>
        </div>

        {/* Tabs Navigation */}
        <AnimationContainer animation="fadeUp" delay={0.4}>
          <div
            className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-muted/30 rounded-full max-w-4xl mx-auto overflow-x-auto scrollbar-hide"
            role="tablist"
            aria-label="Market categories"
          >
            {MARKETS_DATA.map((market, index) => (
              <button
                key={market.id}
                role="tab"
                aria-selected={activeTab === market.id}
                aria-controls={`panel-${market.id}`}
                tabIndex={activeTab === market.id ? 0 : -1}
                onClick={() => setActiveTab(market.id)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    const nextIndex = (index + 1) % MARKETS_DATA.length;
                    setActiveTab(MARKETS_DATA[nextIndex].id);
                  } else if (e.key === 'ArrowLeft') {
                    const prevIndex = (index - 1 + MARKETS_DATA.length) % MARKETS_DATA.length;
                    setActiveTab(MARKETS_DATA[prevIndex].id);
                  }
                }}
                className={cn(
                  "px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap hover-lift",
                  activeTab === market.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {market.name}
              </button>
            ))}
          </div>
        </AnimationContainer>

        {/* Tab Panel */}
        <AnimationContainer animation="fadeUp" delay={0.5}>
          <div
            id={`panel-${activeMarket.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeMarket.id}`}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {activeMarket.title}
              </h3>
              
              <div className="space-y-4">
                {activeMarket.description.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="pt-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full">
                    Start Investing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src={activeMarket.image}
                  alt={activeMarket.title}
                  fill
                  className="object-contain rounded-2xl transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={activeMarket.id === "stocks"}
                  loading={activeMarket.id === "stocks" ? "eager" : "lazy"}
                />
              </div>
            </div>
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  );
};

export default MarketsTabs;
