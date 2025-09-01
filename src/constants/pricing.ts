export type AccountBenefit = {
    title: string;
    description: string;
};

export type AccountType = {
    name: string;
    tagline: string;
    highlight: string;
    features: string[];
    callout: string;
    description: string;
    benefits: AccountBenefit[];
    buttonText: string;
    popular?: boolean;
};

export const ACCOUNT_TYPES: AccountType[] = [
    {
        name: "Live Account",
        tagline: "Real Markets, Real Profits",
        highlight: "10k Products with $0 commission",
        popular: true,
        features: [
            "MT5 & CQG WebTrader",
            "Mobile, desktop and tablet compatible",
            "Live market news",
            "Advanced market analytics",
            "Instant notifications",
            "Ideal for new to intermediate traders",
            "Currencies, indices, shares and commodities",
            "Average spreads of 1.4 pips",
            "Automated execution with no dealer intervention"
        ],
        callout: "Real Markets. Real Profits. Live Trading with CFX Prime",
        description: "Experience real-time market access and competitive spreads—trade live with CFX Prime for powerful, flexible global trading.",
        benefits: [
            {
                title: "Real-Time Market Data",
                description: "Access accurate and up-to-date data across global markets, ensuring you're always trading with the latest information."
            },
            {
                title: "Flexible Funding Options",
                description: "Fund your account with multiple payment methods, including debit/credit cards, e-wallets, and bank transfers."
            },
            {
                title: "Instant Order Execution",
                description: "Experience precise order placements with high-speed execution for all market conditions."
            },
            {
                title: "Dedicated 24/6 Support",
                description: "Expert support available in multiple languages to assist with any trading or technical queries."
            }
        ],
        buttonText: "Open Live Account"
    },
    {
        name: "Demo Account",
        tagline: "Practice with confidence",
        highlight: "FREE demo account with $10,000 in simulated funds",
        features: [
            "Learn on REAL live markets risk-free",
            "No payment details required",
            "Accessible on ALL devices",
            "Learn to trade risk-free",
            "Develop and test your trading strategies",
            "Trade indices, currencies and commodities"
        ],
        callout: "Step into Trading and Experience the Markets Risk-Free",
        description: "Experience the markets without risk by opening a Demo Account with CFX Prime. Utilize virtual funds to practice trading across various assets, refine your strategies, and gain valuable insights, all within a realistic trading environment.",
        benefits: [
            {
                title: "Practice Makes Perfect",
                description: "Experience risk-free trading to hone your skills and strategies in real market conditions."
            },
            {
                title: "Real-Time Market Data",
                description: "Access accurate and up-to-date data across global markets, ensuring you're always trading with the latest information."
            },
            {
                title: "Instant Order Execution",
                description: "Experience precise order placements with high-speed execution for all market conditions."
            },
            {
                title: "Dedicated 24/6 Support",
                description: "Expert support available in multiple languages to assist with any trading or technical queries."
            }
        ],
        buttonText: "Create Demo Account"
    }
];