import Head from "next/head";
import {useRouter} from "next/router";
import Layout from "@/components/layout";

const PrivacyPolicy = () => {
  const router = useRouter();
  const canonicalUrl = router.locale !== "en" ? `https://y2meta.mobi/${router.locale}${router.asPath}` : `https://y2meta.mobi${router.asPath}`
  return (
    <Layout>
      <Head>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Y2meta: Privacy Policy - YouTube Downloader</title>
        <meta name="description"
              content="This is Y2meta Privacy Policy here we describes how we protect the collection and disclosure of your information"/>
        <link rel="canonical" href={canonicalUrl}/>
      </Head>
      <div className="px-3.5 md:px-0 text-justify">
        <h1 className="text-center font-semibold my-4	text-2xl">Privacy Policy</h1>
        <p className="mb-2.5">This Privacy Policy explains how Y2meta collects, uses, and protects the personal
          information of our users. By using our website, you agree to the terms of this Privacy Policy. If you do
          not
          agree with our policies and practices, please do not use our website.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Information We Collect</h1>
        <p className="mb-2.5">When you use our website, we may collect personal information that you voluntarily
          provide
          to us, such as your name, email address, and other contact information. We may also collect non-personal
          information, such as your IP address, browser type, and operating system.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">How We Use Your Information</h1>
        <p className="mb-2.5">We may use your personal information to provide you with the services and products
          that
          you have requested, to send you information about our products and services, and to improve the quality
          of our
          website. We may also use non-personal information to analyze trends and to improve the functionality and
          performance of our website.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Cookies and Other Tracking Technologies</h1>
        <p className="mb-2.5">We use cookies and other tracking technologies to enhance your user experience and to
          collect information about how you use our website. Cookies are small data files that are stored on your
          computer or mobile device when you visit our website. You can disable cookies in your browser settings,
          but
          this may affect the functionality of our website.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Third-Party Services</h1>
        <p className="mb-2.5">We may use third-party services, such as Google Analytics, to analyze website traffic
          and
          usage. These third-party services may use cookies and other tracking technologies to collect information
          about
          your use of our website.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Data Security</h1>
        <p className="mb-2.5">We take reasonable measures to protect the personal information of our users from
          unauthorized access, disclosure, or use. However, no data transmission over the internet or electronic
          storage
          system can be guaranteed to be 100% secure.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Children’s Privacy</h1>
        <p className="mb-2.5">Our website is not intended for children under the age of 13. We do not knowingly
          collect
          personal information from children under the age of 13. If you are a parent or guardian and you believe
          that
          your child has provided us with personal information, please contact us.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Changes to the Privacy Policy</h1>
        <p className="mb-2.5">Y2meta reserves the right to modify or update this Privacy Policy at any time. Your
          continued use of our website after any changes to this Privacy Policy constitutes your acceptance of the
          new
          terms.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Contact Us</h1>
        <p className="md:mb-16 mb-2.5">If you have any questions or concerns about this Privacy Policy or our
          website,
          please contact us at Admin.</p>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy