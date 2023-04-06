import Image from "next/image";
import {useTranslation} from "next-i18next";
import Gift from "../../public/gift.svg";
import Video from "../../public/video.svg";
import Downloads from "../../public/download.svg";
import Quality from "../../public/quality.svg";
import Link from "next/link";

const SectionMP3 = () => {
  const {t} = useTranslation()

  return (
    <section className="container mx-auto px-3.5 md:px-0">
      <div className="md:py-8 py-6 text-center">
        <h2 className="font-bold text-xl my-2.5 md:text-2xl">{t('section_main_title_mp3')}</h2>
        <h3 className="text-lg text-justify	my-2.5">{t('section_main_descriptions_one_mp3')}</h3>
        <h3 className="text-lg text-justify	my-2.5">{t('section_main_descriptions_two_mp3')}</h3>
      </div>
      <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      <div className="py-8 md:flex md:justify-between">
        <div className="md:w-[43%]">
          <h4 className="text-lg my-1.5"><strong>{t('how_convert_title_mp3')}</strong></h4>
          <ol className="m-0 pl-4 list-decimal text-justify">
            <li className="mb-2.5">{t('how_convert_step_one_mp3')}</li>
            <li className="mb-2.5">{t('how_convert_step_two_mp3')}</li>
            <li className="mb-2.5">{t('how_convert_step_three_mp3')}</li>
          </ol>
        </div>
        <div className="md:w-[43%]">
          <h5 className="text-lg my-1.5"><strong>{t('advantages_title_mp3')}</strong></h5>
          <ul className="m-0 pl-4 list-disc text-justify">
            <li className="mb-2.5">{t('advantages_one_mp3')}</li>
            <li className="mb-2.5">{t('advantages_two_mp3')}</li>
            <li className="mb-2.5">{t('advantages_three_mp3')}</li>
            <li className="mb-2.5">{t('advantages_four_mp3')}</li>
            <li className="mb-2.5">{t('advantages_five_mp3')}</li>
          </ul>
        </div>
      </div>
      <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      <div
        className="md:py-8 py-6 text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        <div>
          <Image className="inline" src={Quality} alt="quality" height={50}/>
          <div className="px-6 py-4">
            <h3 className="text-2xl text-heading-clr font-bold mb-2">{t('box_title_one_mp3')}</h3>
            <p>{t('box_description_one_mp3')}</p>
          </div>
        </div>
        <div>
          <Image className="inline" src={Video} alt="video" height={50}/>
          <div className="px-6 py-4">
            <h3 className="text-2xl text-heading-clr font-bold mb-2">{t('box_title_two_mp3')}</h3>
            <p>{t('box_description_two_mp3')}</p>
          </div>
        </div>
        <div>
          <Image className="inline" src={Downloads} alt="download" height={50}/>
          <div className="px-6 py-4">
            <h3 className="text-2xl text-heading-clr font-bold mb-2">{t('box_title_three_mp3')}</h3>
            <p>{t('box_description_three_mp3')}</p>
          </div>
        </div>
        <div>
          <Image className="inline" src={Gift} alt="gift" height={50}/>
          <div className="px-6 py-4">
            <h3 className="text-2xl text-heading-clr font-bold mb-2">{t('box_title_four_mp3')}</h3>
            <p>{t('box_description_four_mp3')}</p>
          </div>
        </div>
      </div>
      <hr className="w-48 h-px mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"/>
      <div className="md:py-8 py-6">
        <h2 className="font-bold text-center text-xl my-2.5 md:text-2xl">{t('faq_main_title_mp3')}</h2>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_one_mp3')}</h3>
        <p>
          {t('faq_description_one_mp3_first')}
          <Link className="text-[#551A8B]" href="https://y2meta.mobi/">
            {t('section_main_descriptions_one_mp4_tag')}
          </Link>
          {t('faq_description_one_mp3')}
        </p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_two_mp3')}</h3>
        <p>{t('faq_description_two_mp3')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_three_mp3')}</h3>
        <p>{t('faq_description_three_one_mp3')}</p>
        <p>{t('faq_description_three_two_mp3')}</p>
        <p>{t('faq_description_three_three_mp3')}</p>
        <p>{t('faq_description_three_four_mp3')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_four_mp3')}</h3>
        <p>{t('faq_description_four_mp3')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_five_mp3')}</h3>
        <p>{t('faq_description_five_mp3')}</p>
        <h3 className="mt-2.5 font-semibold">{t('faq_title_six_mp3')}</h3>
        <p>{t('faq_description_six_mp3')}</p>
      </div>
    </section>
  )
}

export default SectionMP3

