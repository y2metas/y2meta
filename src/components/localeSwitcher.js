import Link from "next/link";
import {useRouter} from "next/router";
import {languageName} from "@/config/menu";

const LocaleSwitcher = ({close}) => {
  const router = useRouter();
  const {pathname, query, asPath} = router;
  const {locales} = router;

  return (
    <>
      <ul
        className="absolute rounded bg-white md:top-16 2xl:right-96 top-72 border-solid border-inherit md:right-0	lg:right-24 xl:right-48 border z-50 min-w-[160px] py-1">
        {locales?.map((locale) => (
          <li className="hover:bg-lang-color" key={"locale-" + locale}>
            <Link onClick={close} className="mx-5	my-1" href={{pathname, query}} as={asPath} locale={locale}>
              {languageName[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default LocaleSwitcher;