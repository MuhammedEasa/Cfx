export interface PerkItem {
    title: string;
    description: string;
    icon: string;
}

export const PERKS: PerkItem[] = [
    {
        title: "Access Global Markets",
        description: "Trade across Forex, Stocks, Commodities, Indices, ETFs, and Futures in one platform.",
         icon: "/icons/perk-one.svg"
    },
    {
        title: "Wide Forex Coverage",
        description: "Explore 80+ major, minor & exotic FX pairs like EURUSD, GBPUSD, and AUDJPY.",
        icon: "/icons/perk-two.svg"
    },
    {
        title: "Stock Opportunities",
        description: "Invest in top global companies like Apple, Meta, Disney, and Tesla with ease.",
       icon: "/icons/perk-three.svg"
    },
    {
        title: "Commodity Trading",
        description: "Dive into gold, silver, and crude oil markets for diverse investment options.",
        icon: "/icons/perk-four.svg"
    },
    {
        title: "Futures & ETFs",
        description: "Gain exposure to 250+ futures and a range of ETFs for strategic diversification.",
        icon: "/icons/perk-one.svg"
    },
    {
        title: "Seamless Platform Experience",
        description: "Enjoy real-time data, intuitive design, and lightning-fast execution.",
        icon: "/icons/perk-three.svg"
    }
];
