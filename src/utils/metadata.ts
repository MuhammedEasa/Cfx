import { Metadata } from "next";

export const generateMetadata = ({
    title = 'CFX Prime | Professional Trading Platform - Forex, Stocks, Commodities',
    description = 'Trade forex, stocks, commodities, and indices with CFX Prime. Experience competitive spreads, lightning-fast execution, MT5 platform, and 24/7 support. Start trading with $100 minimum deposit.',
    keywords = 'forex trading, CFD trading, stock trading, commodities trading, MT5 platform, online trading, CFX Prime, trading platform, financial markets, investment',
    image = "/icons/cfx_logo.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/icons/favicon.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/icons/favicon.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/icons/favicon.png"
        },
    ],
    noIndex = false,
    canonical,
    alternates
}: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    canonical?: string;
    alternates?: Metadata["alternates"];
} = {}): Metadata => ({
    title,
    description,
    keywords,
    icons,
    authors: [{ name: "CFX Prime", url: "https://cfxprime.com" }],
    creator: "CFX Prime",
    publisher: "CFX Prime",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://cfxprime.com'),
    alternates,
    ...(canonical && { alternates: { canonical } }),
    openGraph: {
        title,
        description,
        type: 'website',
        locale: 'en_US',
        url: canonical || 'https://cfxprime.com',
        siteName: 'CFX Prime',
        ...(image && {
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        }),
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@cfxprime',
        ...(image && { images: [image] }),
    },
    robots: {
        index: !noIndex,
        follow: !noIndex,
        googleBot: {
            index: !noIndex,
            follow: !noIndex,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // verification: {
    //     google: 'your-google-verification-code',
    //     yandex: 'your-yandex-verification-code',
    //     yahoo: 'your-yahoo-verification-code',
    // },
});
