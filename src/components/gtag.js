import Script from 'next/script'

const GTag = () => {
  return (
    <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-257217301-2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-257217301-2');
        `}
      </Script>
    </div>
  )
}

export default GTag