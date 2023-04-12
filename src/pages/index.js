import Head from "next/head";
import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import Converter from "@/components/converter";
import SectionDownloader from "@/components/sectionDownloader";
import Gtag from "@/components/gtag";

const YoutubeDownloader = () => {
  const {t} = useTranslation()
  const router = useRouter();
  const canonicalUrl = router.locale !== "en" ? `https://y2meta.mobi/${router.locale}${router.asPath}` : `https://y2meta.mobi${router.asPath}`

  const webSiteJsonLd = () => {
    return {
      __html: `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Y2meta",
      "alternateName": "Youtube Vido Downloader",
      "url": "https://y2meta.mobi/",
      "Headline": "Y2meta - Online Youtube Downloader | Download  Youtube Video",
      "description": "Y2meta is popular online YouTube downloader allow to download Youtube video for free with high quality in 1080p, 2160p, 2k, 4k, 8k without install software"
      }`,
    };
  }

  const softwareApplicationJsonLd = () => {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "SoftwareApplication",
      "name": "Y2meta",
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "36256",
      "reviewCount": "36256",
      "bestRating": "5",
      "worstRating": "1"
      },
      "applicationCategory": "MultimediaApplication",
      "offers": {
      "@type": "Offer",
      "price": "0.0",
      "priceCurrency": "USD"
      },
      "operatingSystem": "Windows, macOS, Android,  iOS",
      "description": "Y2meta is popular online YouTube downloader allow to download Youtube video for free with high quality in 1080p, 2160p, 2k, 4k, 8k without install software",
      "image": "https://y2meta.mobi/logo.png"
      }`,
    };
  }

  const faqPageJsonLd = () => {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Y2meta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Y2meta is best YouTube Video Downloader that allow you to Download Video from YouTube quickly and for Free. also, convert YouTube to Mp3 in high quality."
      }
    },
    {
      "@type": "Question",
      "name": "Is Y2meta Totally Free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Y2meta is completely free to use and download YouTube videos. you don't need to pay any subscription amount just need the YouTube video URL that You want to download on your device."
      }
    },
    {
      "@type": "Question",
      "name": "How to download YouTube videos to iPhone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The process of iPhone users is slightly different from All use. You need to use Safari browser on iOS 13 or get Documents by Readdle app and all process is the same as above."
      }
    },
    {
      "@type": "Question",
      "name": "Is Y2meta safe to download Videos from YouTube?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Download YouTube Videos using our Downloader you don't need to share any personal information and Also don't need to install third-party applications and software on your devices."
      }
    },
    {
      "@type": "Question",
      "name": "What are the supported video/audio formats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide various high-quality formats and allow you to download mp3 in 320kbps, 256kbps, 192kbps, 128kbps, 64kbps bit rate and mp4 with 720p, 1080p, 1440p, 2160p quality."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the downloaded YouTube video file stored on my device?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After video is saved to your computer from Youtube then check directly in your browser download history or Downloads folder in your device."
      }
    },
    {
      "@type": "Question",
      "name": "Is this YouTube video downloader compatible with all devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Y2meta supports downloading videos from YouTube works smoothly on all devices such as computers, mobile, and tablets, and all types of browsers like Chrome, Firefox, Microsoft Edge, Safari, Opera and etc."
      }
    }
  ]
  }`,
    };
  }

  return (
    <Layout>
      <Gtag/>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>{t('seo_title')}</title>
        <meta name="description" content={t('seo_description')}/>
        <meta name="robots" content="index, follow"/>
        <meta name="theme-color" content="#fff"/>
        <meta itemProp="name" content={t('seo_title')}/>
        <meta itemProp="description" content={t('seo_description')}/>
        <meta name="author" content="Y2meta"/>
        <meta itemProp="image" content="https://y2meta.mobi/logo.png"/>
        <meta property="twitter:card" content="summary"/>
        <meta property="og:locale" content={router.locale}/>
        <meta name="twitter:title" content={t('seo_title')}/>
        <meta name="twitter:description" content={t('seo_description')}/>
        <meta name="twitter:image" content="https://y2meta.mobi/logo.png"/>
        <meta property="twitter:url" content={canonicalUrl}/>
        <meta property="og:title" content={t('seo_title')}/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://y2meta.mobi/logo.png"/>
        <meta property="og:description" content={t('seo_description')}/>
        <meta property="og:site_name" content="Y2meta"/>
        <meta property="og:url" content={canonicalUrl}/>
        <link rel="canonical" href={canonicalUrl}/>
        <link rel="alternate" href="https://y2meta.mobi/" hrefLang="x-default"/>
        {router.locales.map((item) => (
          item !== "en" ?
            <link rel="alternate" hrefLang={item} href={`https://y2meta.mobi/${item}/`} key={item}/> :
            <link rel="alternate" hrefLang={item} href="https://y2meta.mobi/" key={item}/>
        ))}
        <meta name="google-site-verification" content="swrenMhBfGT4U_8LhQyCoYnJL4SyJ2x9XW0F0eYdxK8"/>
        <meta name="monetag" content="b1af40c7cfd9807995efe13df5d7ff64">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={webSiteJsonLd()}
          key="website-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={softwareApplicationJsonLd()}
          key="softwareApplication-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={faqPageJsonLd()}
          key="faqPage-jsonld"
        />
      </Head>
      <Converter
        title={t('converter_title')}
        description={t('converter_description')}
      />
      <SectionDownloader/>
    </Layout>
  )
}

export default YoutubeDownloader

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}