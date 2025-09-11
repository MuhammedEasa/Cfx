import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = generateMetadata({
  canonical: 'https://cfxprime.com',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background text-foreground font-base antialiased overflow-x-hidden",
          base.variable,
          heading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FinancialService",
                "name": "CFX Prime",
                "description": "Professional trading platform offering forex, stocks, commodities, and indices trading with competitive spreads and advanced tools.",
                "url": "https://cfxprime.com",
                "logo": "https://cfxprime.com/icons/cfx_logo.png",
                "sameAs": [
                  "https://twitter.com/cfxprime",
                  "https://linkedin.com/company/cfxprime",
                  "https://facebook.com/cfxprime"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+971 558413067",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Arabic", "farsi", "Hindi","Pashto"],
                  "hoursAvailable": "Mo-Su 00:00-24:00"
                },
                "offers": {
                  "@type": "Offer",
                  "description": "Professional trading services with competitive spreads",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "100",
                    "priceCurrency": "USD"
                  }
                }
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
