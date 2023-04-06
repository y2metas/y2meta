import Head from "next/head";
import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import Converter from "@/components/converter";
import SectionDownloader from "@/components/sectionDownloader";

const YoutubeDownloader = () => {
  const {t} = useTranslation()
  const router = useRouter();
  const canonicalUrl = router.locale !== "en" ? `https://y2meta.mobi/${router.locale}${router.asPath}` : `https://y2meta.mobi${router.asPath}`

  return (
    <Layout>
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
        <meta name="google-site-verification" content="swrenMhBfGT4U_8LhQyCoYnJL4SyJ2x9XW0F0eYdxK8" />
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