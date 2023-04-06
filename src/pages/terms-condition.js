import Head from "next/head";
import {useRouter} from "next/router";
import Layout from "@/components/layout";

const TermsCondition = () => {
  const router = useRouter();
  const canonicalUrl = router.locale !== "en" ? `https://y2meta.mobi/${router.locale}${router.asPath}` : `https://y2meta.mobi${router.asPath}`

  return (
    <Layout>
      <Head>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Y2meta: Terms and Conditions - YouTube Downloader</title>
        <meta name="description"
              content="Certain rules and guidelines of Y2meta YouTube Downloader are given in this legal document. Users must agree to use the Website."/>
        <link rel="canonical" href={canonicalUrl}/>
      </Head>
      <div className="px-3.5 md:px-0 text-justify">
        <h1 className="text-center font-semibold my-4	text-2xl">Terms and Conditions</h1>
        <p className="mb-2.5">Welcome to Y2meta!</p>
        <p className="mb-2.5">By accessing or using our website, you agree to be bound by these Terms and Conditions,
          our Privacy Policy, and any other guidelines, rules, or policies that we may publish from time to time. If you
          do not agree to these Terms and Conditions, please do not use our website.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Use of the Website</h1>
        <p className="mb-2.5">Y2meta provides a platform for users to convert and download YouTube videos in various
          formats. By using our website, you agree to use it only for lawful purposes and in accordance with these Terms
          and Conditions. You agree not to use the website for any illegal or unauthorized activity, including but not
          limited to:<br/>
          a. Uploading or downloading copyrighted content without permission <br/>
          b. Distributing content that is defamatory, obscene, or offensive<br/>
          c. Hacking, attempting to hack, or damaging our website or our users’ computers in any way.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">User Accounts</h1>
        <p className="mb-2.5">To use certain features of the website, you may be required to create an account. You are
          responsible for maintaining the confidentiality of your account information, including your password, and for
          all activities that occur under your account. You agree to notify us immediately of any unauthorized use of
          your account or password or any other breach of security.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Intellectual Property</h1>
        <p className="mb-2.5">Y2meta respects the intellectual property rights of others and expects our users to do the
          same. You must not use our website to infringe the intellectual property rights of any person or entity. If
          you believe that your work has been copied in a way that constitutes copyright infringement, please contact
          us.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Disclaimer of Warranties</h1>
        <p className="mb-2.5">The website and all content and services provided through it are provided on an “as is”
          and “as available” basis, without any warranty or condition, express, implied, or statutory. Y2meta does not
          warrant that the website will be uninterrupted or error-free or that any errors will be corrected.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Limitation of Liability</h1>
        <p className="mb-2.5">In no event shall Y2meta or its affiliates, licensors, or service providers be liable for
          any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use
          of the website or any content or services provided through it.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Indemnification</h1>
        <p className="mb-2.5">You agree to indemnify, defend, and hold harmless Y2meta and its affiliates, licensors,
          and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs,
          expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these
          Terms and Conditions or your use of the website.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Governing Law and Dispute Resolution</h1>
        <p className="mb-2.5">These Terms and Conditions shall be governed by and construed in accordance with the laws
          of the state of [insert state] without giving effect to any choice or conflict of law provision or rule. Any
          dispute arising out of or relating to these Terms and Conditions shall be submitted to confidential
          arbitration in the state of [insert state], except that to the extent you have in any manner violated or
          threatened to violate our intellectual property rights, we may seek injunctive or other appropriate relief in
          any state or federal court in the state.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Changes to the Terms and Conditions</h1>
        <p className="mb-2.5">Y2meta reserves the right, at its sole discretion, to modify or replace these Terms and
          Conditions at any time. Your continued use of the website after any such changes constitutes your acceptance
          of the new Terms and Conditions.</p>
        <h1 className="mt-3	mb-2 text-xl font-semibold">Contact Us</h1>
        <p className="md:mb-16 mb-2.5">If you have any questions about these Terms and Conditions or the website, please
          contact us at Admin.</p>
      </div>
    </Layout>
  )
}

export default TermsCondition