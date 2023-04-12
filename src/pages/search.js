import React, {useEffect, useState} from 'react'
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import SectionDownloader from "@/components/sectionDownloader";
import Spinner from "../../public/loading.gif";
import Gtag from "@/components/gtag";

const Search = () => {
  const [dataList, setDataList] = useState();
  const [spinner, setSpinner] = useState(false);
  const {t} = useTranslation()
  const router = useRouter();
  const {url} = router?.query

  useEffect(() => {
    setSpinner(true);

    const fetchPromise = fetch(`https://me0xn4hy3i.execute-api.us-east-1.amazonaws.com/staging/api/resolve/resolveYoutubeSearch?search=${url}`);
    fetchPromise.then(response => {
      return response.json();
    }).then(data => {
      setSpinner(false)
      setDataList(data?.data)
    });
  }, [])

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
        <div className="bg-white p-4 border border-solid rounded border-current border-solid-clr container mx-auto">
          <div className="md:p-8 p-6 flex justify-around">
            {spinner ?
              <Image
                src={Spinner}
                alt="logo"
              /> :
              <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-9">
                {dataList?.map((item) => (
                  <Link
                    className="hover:text-btn-clr"
                    key={item?.videoId}
                    as="download"
                    href={{
                      pathname: `download`,
                      query: {
                        url: `https://youtu.be/${item?.videoId}`
                      },
                    }}
                  >
                    <img src={item?.imgSrc} alt="img"/>
                    <h3
                      className="absolute text-sm font-medium px-1 -mt-6	bg-black	text-white">{item?.duration}</h3>
                    <h3 className="text-start text-sm font-medium">{item?.title}</h3>
                  </Link>
                ))
                }
              </div>
            }
          </div>
        </div>
        <SectionDownloader/>
      </Layout>
    </>
  )
}

export default Search

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}