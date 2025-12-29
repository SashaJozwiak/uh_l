import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './components/Providers'
import Header from './components/Header'
import Footer from './components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://youhold.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'YouHold - Cryptocurrency Fund | Token Buyback & Burn',
    template: '%s | YouHold'
  },
  description: 'YouHold is an open-ended cryptocurrency fund managing diversified assets and a software and gaming development studio. 50% of profits go to token buyback and burn, creating sustainable tokenomics. Invest in strategic development projects and earn together.',
  keywords: [
    'YouHold',
    'cryptocurrency fund',
    'crypto investment fund',
    'token buyback',
    'token burn',
    'defi fund',
    'blockchain investment',
    'cryptocurrency token',
    'software development fund',
    'gaming development studio',
    'tokenomics',
    'crypto asset management',
    'Solana token',
    'cryptocurrency airdrop',
    'web3 gaming',
    'crypto fund management'
  ],
  authors: [{ name: 'YouHold Team' }],
  creator: 'YouHold',
  publisher: 'YouHold',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU'],
    url: siteUrl,
    siteName: 'YouHold',
    title: 'YouHold - Cryptocurrency Fund | Token Buyback & Burn',
    description: 'Open-ended cryptocurrency fund managing diversified assets and a software and gaming development studio. 50% of profits go to token buyback and burn.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'YouHold - Cryptocurrency Fund',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouHold - Cryptocurrency Fund',
    description: 'Open-ended cryptocurrency fund managing diversified assets and a software and gaming development studio.',
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@youhold',
    site: '@youhold',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'ru': '/',
    },
  },
  category: 'Finance',
  classification: 'Cryptocurrency Fund',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': `${siteUrl}#organization`,
    name: 'YouHold',
    alternateName: 'YouHold Fund',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Open-ended cryptocurrency investment fund managing diversified assets and a software and gaming development studio. 50% of profits allocated to token buyback and burn mechanism.',
    foundingDate: '2024-09',
    founder: {
      '@type': 'Organization',
      name: 'YouHold',
    },
    areaServed: 'Worldwide',
    serviceType: 'Cryptocurrency Investment Fund',
    offers: {
      '@type': 'Offer',
      name: 'YouHold Token',
      description: 'Utility token representing ownership in YouHold fund. Used to unlock features in games and software developed by YouHold Studio.',
      category: 'Cryptocurrency Token',
      priceCurrency: 'USD',
    },
    sameAs: [
      'https://t.me/youhold',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
    potentialAction: {
      '@type': 'InvestAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/account`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      'expectsAcceptanceOf': {
        '@type': 'Offer',
        name: 'YouHold Token',
      },
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="ru" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
      </head>
      <body>
        <Providers>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
