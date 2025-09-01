import { Metadata } from "next";

export const generateMetadata = ({
    title = 'CFX Prime | Home',
    description = 'Trade forex, commodities, and indices with CFX Prime. Experience competitive spreads, advanced trading platforms, and top-tier security tailored for both novice and professional traders.',
    // image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/icons/favicon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/favicon.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
