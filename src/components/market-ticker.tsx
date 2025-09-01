"use client";

import { useEffect, useRef } from "react";

interface MarketTickerProps {
  className?: string;
}

export const MarketTicker: React.FC<MarketTickerProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

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
          proName: "TVC:GOLD",
          title: "Gold"
        },
        {
          proName: "TVC:DJI",
          title: "US30"
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
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum"
        }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
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
  }, []);

  return (
    <div className={`tradingview-widget-container ${className}`} ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};
