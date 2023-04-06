import Image from "next/image";
import {useTranslation} from "next-i18next";
import Quality from "../../public/quality.svg";
import Gift from "../../public/gift.svg";
import Video from "../../public/video.svg";
import Downloads from "../../public/download.svg";
import Link from "next/link";

const SectionDownloader = () => {
  const {t} = useTranslation()

  return (
    <section className="container mx-auto px-3.5 md:px-0">
      <div className="md:py-8 py-6 text-center">
        <h2 className="font-bold text-xl my-2.5 md:text-2xl">{t('section_main_title')}</h2>
        <h3 className="text-lg text-justify	my-2.5">
          <Link className="text-[#551A8B]" href="https://y2meta.mobi/">
            {t('section_main_descriptions_one_tag')}
          </Link>
          {t('section_main_descriptions_one')}
        </h3>
        <h3 className="text-lg text-justify	my-2.5">{t('section_main_descriptions_two')}</h3>
      </div>
      <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      <div className="py-8 md:flex md:justify-between">
        <div className="md:w-[43%]">
          <h4 className="text-lg my-1.5"><strong>{t('how_convert_title')}</strong></h4>
          <ol className="m-0 pl-4 list-decimal text-justify">
            <li className="mb-2.5">{t('how_convert_step_one')}</li>
            <li className="mb-2.5">{t('how_convert_step_two')}</li>
            <li className="mb-2.5">{t('how_convert_step_three')}</li>
          </ol>
        </div>
        <div className="md:w-[43%]">
          <h5 className="text-lg my-1.5"><strong>{t('advantages_title')}</strong></h5>
          <ul className="m-0 pl-4 list-disc text-justify">
            <li className="mb-2.5">{t('advantages_one')}</li>
            <li className="mb-2.5">{t('advantages_two')}</li>
            <li className="mb-2.5">{t('advantages_three')}</li>
            <li className="mb-2.5">{t('advantages_four')}</li>
            <li className="mb-2.5">{t('advantages_five')}</li>
          </ul>
        </div>
      </div>
      <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      <div
        className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        <div>
          <Image className="inline" src={Quality} alt="quality" height={50}/>
          <div className="px-6 py-4">
            <h3 className="text-2xl text-heading-clr font-bold mb-2">{t('box_title_one')}</h3>
            <p>{t('box_description_one')}</p>
          </div>
        </div>
        <div>
          <Image className="inline" src={Video} alt="video" height={50}/>
          <div className="px-6 py-4">
            <h3 className="text-2xl text-heading-clr font-bold mb-2">{t('box_title_two')}</h3>
            <p>{t('box_description_two')}</p>
          </div>
        </div>
        <div>
          <Image className="inline" src={Downloads} alt="download" height={50}/>
          <div className="px-6 py-4">
            <h3 className="text-2xl text-heading-clr font-bold mb-2">{t('box_title_three')}</h3>
            <p>{t('box_description_three')}</p>
          </div>
        </div>
        <div>
          <Image className="inline" src={Gift} alt="gift" height={50}/>
          <div className="px-6 py-4">
            <h3 className="text-2xl text-heading-clr font-bold mb-2">{t('box_title_four')}</h3>
            <p>{t('box_description_four')}</p>
          </div>
        </div>
      </div>
      <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      <div className="md:py-8 py-6">
        <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">{t('faq_main_title')}</h2>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_one')}</h3>
        <p>{t('faq_description_one')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_two')}</h3>
        <p>{t('faq_description_two')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_three')}</h3>
        <p>{t('faq_description_three')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_four')}</h3>
        <p>{t('faq_description_four')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_five')}</h3>
        <p>{t('faq_description_five')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_six')}</h3>
        <p>{t('faq_description_six')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_seven')}</h3>
        <p>{t('faq_description_seven')}</p>
      </div>
    </section>
  )
}

export default SectionDownloader