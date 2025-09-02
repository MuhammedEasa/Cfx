"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface MarketTickerProps {
  className?: string;
}

export const MarketTicker: React.FC<MarketTickerProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Clear previous widget
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin"
        },
        {
          proName: "FX:EURUSD",
          title: "EUR/USD"
        },
        {
          proName: "FX:GBPUSD",
          title: "GBP/USD"
        },
        {
          proName: "FX:USDJPY",
          title: "USD/JPY"
        },
        {
          proName: "TVC:GOLD",
          title: "Gold"
        },
        {
          proName: "TVC:SILVER",
          title: "Silver"
        },
        {
          proName: "NYMEX:CL1!",
          title: "Crude Oil"
        },
        {
          proName: "TVC:DJI",
          title: "US30"
        },
        {
          proName: "TVC:SPX",
          title: "S&P 500"
        },
        {
          proName: "TVC:NDX",
          title: "US100"
        },
        {
          proName: "NASDAQ:TSLA",
          title: "Tesla"
        },
        {
          proName: "NASDAQ:NVDA",
          title: "Nvidia"
        },
        {
          proName: "NASDAQ:AAPL",
          title: "Apple"
        },
        {
          proName: "NASDAQ:MSFT",
          title: "Microsoft"
        },
        {
          proName: "NASDAQ:GOOGL",
          title: "Google"
        },
        {
          proName: "NASDAQ:AMZN",
          title: "Amazon"
        },
        {
          proName: "NASDAQ:META",
          title: "Meta"
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum"
        }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: theme === "dark" ? "dark" : "light",
      locale: "en"
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [theme]);

  return (
    <div className={`tradingview-widget-container ${className}`} ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};
