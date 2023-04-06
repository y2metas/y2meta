import Head from "next/head";
import {useRouter} from "next/router";
import Layout from "@/components/layout";

const AboutUs = () => {
  const router = useRouter();
  const canonicalUrl = router.locale !== "en" ? `https://y2meta.mobi/${router.locale}${router.asPath}` : `https://y2meta.mobi${router.asPath}`
  return (
    <Layout>
      <Head>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Y2meta: About Us - YouTube Downloader</title>
        <meta name="description"
              content="Y2meta is most popular YouTube Video Downloader It helps you to download YouTube Video read more information here"/>
        <link rel="canonical" href={canonicalUrl}/>
      </Head>
      <div className="px-3.5 md:px-0 text-justify">
        <h1 className="text-center font-semibold my-4	text-2xl">About Us</h1>
        <p className="mb-2.5">Welcome to Y2meta, the Best Online YouTube Downloader tool that is useful for downloading
          YouTube videos and saving them to different formats.</p>
        <p className="mb-2.5">We provide a simple and easy-to-use Youtube downloader tool so anyone can save it on their
          device. We also provide
          high-quality formats so you can play anywhere without an internet connection</p>
        <p className="mb-2.5">Y2meta is a simple and easy-to-use experience interface. fast and easy download process
          makes this downloader to the next level.
        </p>
        <p className="mb-2.5">We frequently update our YouTube Downloader to provide a good experience for our users. If
          you have any feedback in your mind, please contact us without any hesitation.
        </p>
        <p className="md:mb-16 mb-2.5">Thank you for using Y2meta!</p>
      </div>
    </Layout>
  )
}

export default AboutUs