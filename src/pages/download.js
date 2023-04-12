import React from 'react'
import Head from "next/head";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import Gtag from "@/components/gtag";

const Download = () => {
  const {t} = useTranslation()
  const router = useRouter();
  const {url} = router?.query

  return (
    <>
      <Layout>
        <Gtag/>
        <Head>
          <meta name="robots" content="noindex, nofollow"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <title>{t('seo_title')}</title>
          <meta name="description" content={t('seo_description')}/>
        </Head>
        <div
          className="bg-white p-4 border border-solid rounded border-current	border-solid-clr container mx-auto">
          <div className="md:py-8 py-7 text-center">
            <div
              className="bg-no-repeat bg-top bg-center bg-[url('../../public/loading.gif')]">
              <iframe
                className="h-[1000px]"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-downloads allow-forms"
                src={`https://ytconvert.me/api/widgetv2?url=${url}`}
                width="100%"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Download

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}