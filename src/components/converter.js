import Link from "next/link";
import { useRouter } from 'next/router'
import {useState} from "react";
import {useTranslation} from "next-i18next";

const Converter = ({title, description}) => {
  const router = useRouter()
  const {t} = useTranslation()
  const [inputValue, setInputValue] = useState("test");

  const isYtUrl = (url) => {
    const ytRegex = new RegExp(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/g
    );
    return ytRegex.test(url)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClickEnter = (e) => {
    if (e.keyCode === 13) {
      if (isYtUrl(inputValue)) {
        router.push({pathname: '/download', query: {url: inputValue}}, "download")
      } else {
        router.push({pathname: '/search', query: {url: inputValue}}, "search")
      }
    }
  };

  const handleClickConvert = () => {
    if (isYtUrl(inputValue)) {
      router.push({pathname: '/download', query: {url: inputValue}}, "download")
    } else {
      router.push({pathname: '/search', query: {url: inputValue}}, "search")
    }
  };

  return (
    <>
      <div
        className="bg-white p-4 border border-solid rounded border-current border-solid-clr container mx-auto">
        <div className="md:py-8 py-7 text-center">
          <h1 className="mb-2.5 md:text-3xl text-2xl font-medium">{title}</h1>
          <p>{description}</p>
          <div className="flex justify-center md:mt-9 mt-6">
            <div className="flex w-[600px]">
              <input
                type="text"
                className="block md:text-base	text-sm w-full px-4 py-2 h-[60px] border-4 !outline-none border-solid rounded border-btn-clr"
                placeholder={t('search_place_holder')}
                onChange={handleInputChange}
                onKeyDown={handleClickEnter}
              />
              <button
                className="md:px-4 rounded-r md:text-base	text-sm md:w-[120px] w-[78px] h-[60px] -ml-1 text-white bg-btn-clr"
                onClick={handleClickConvert}>
                {t('btn_submit')}
              </button>
            </div>
          </div>
          <p className="text-xs	p-1.5 text-btn-border md:mb-6 mb-5">{t('converter_term_description')}
            <Link className="text-heading-clr" href="/terms-condition"> {t('converter_term_title')}</Link>.
          </p>
        </div>
      </div>
    </>
  )
}

export default Converter