import Link from "next/link"
import Image from "next/image";
import {useState} from "react"
import {useRouter} from "next/router";
import {languageName, maiMenu} from "@/config/menu";
import LocaleSwitcher from "@/components/localeSwitcher";
import Logo from "../../public/logo.png"

const Header = () => {
  const router = useRouter();
  const {locale} = router;
  const [open, setOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false)

  return (
    <>
      <header className="h-[68px] flex items-center top-0">
        <div className="container mx-auto">
          <div className="flex justify-between md:mx-0	mx-3 items-center">
            <div className="lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center">
                <Image width={46} height={46} src={Logo} alt="y2meta"/>
                <div className="text-2xl font-semibold w-auto z-50 pl-2">y2meta.mobi</div>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
                type="button"
                className="inline-flex items-center justify-center border border-solid border-heading py-1 px-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6 text-heading-clr"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex">
              {maiMenu.map((item) => (
                <Link
                  key={"menu-" + item.url}
                  href={item.url}
                  className="text-sm py-6	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr"
                >{item.text}</Link>
              ))}
              <span onClick={() => setOpenLang(!openLang)}
                    className="text-sm flex py-6 cursor-pointer	px-3.5 text-heading hover:bg-heading-hover hover:text-heading-clr">
              {languageName[locale]}<p className="rotate-180 ml-1">^</p>
            </span>
            </nav>
          </div>
          {openLang && <LocaleSwitcher close={() => setOpenLang(false)}/>}
        </div>


        <div
          className="absolute top-16 inset-x-0 transition transform origin-top-right md:hidden z-20"
          style={{display: open ? "block" : "none"}}
        >
          <div className="shadow-lg">
            <div className="shadow-xs bg-background divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div>
                  <nav className="grid gap-y-8">
                    {maiMenu.map((item) => (
                      <Link
                        key={"menu-" + item.url}
                        href={item.url}
                        className="-m-3 p-3 flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300"
                      >{item.text}</Link>
                    ))}
                    <span onClick={() => setOpenLang(!openLang)}
                          className="-m-3 p-3 cursor-pointer flex items-center text-heading hover:bg-heading-hover hover:text-heading-clr transition duration-300">
                    {languageName[locale]}<p className="rotate-180 ml-1">^</p>
                  </span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header