import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const Layout = ({children}) => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-9KQ1GEKTL5"
      strategy="lazyOnload"
    />
    <Script id="google-analytics" strategy="lazyOnload">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9KQ1GEKTL5');
      `}
    </Script>
    <div className="md:w-[890px] mx-auto">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  </>
);

export default Layout