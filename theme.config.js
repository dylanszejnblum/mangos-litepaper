export default {
  titleSuffix: ' – Mangos Wallet',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">🥭 Mangos</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        ERC-4337 Social Recovery Wallet
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Mangos: smart wallet" />
      <meta name="og:description" content="Mangos: smart wallet" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://litepaper.mangos.finance/BANNER.png"
      />
      <meta name="twitter:site:domain" content="litepaper.mangos.finance" />
      <meta name="twitter:url" content="https://mangos.finance" />
      <meta
        name="og:title"
        content="Mangos is a smart wallet compatible with erc-4337"
      />
      <meta
        name="og:image"
        content="https://litepaper.mangos.finance/BANNER.png"
      />
      <meta name="apple-mobile-web-app-title" content="Mangos" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerText: <> {new Date().getFullYear()} © Mangos Wallet.</>,
  unstable_faviconGlyph: '🥭',
}
