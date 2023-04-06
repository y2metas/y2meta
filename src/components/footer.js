import Link from "next/link";
import {footer} from "@/config/menu";

const Footer = () => {
  return (
    <div className="md:py-14 py-5	text-sm	text-center border-solid	border-y border-inherit">
      <p className="mb-5	">@2023 y2meta.mobi</p>
      {footer.map((item) => (
        <Link key={"footer-" + item.url} className="mx-2" href={item.url}>{item.text}</Link>
      ))}
    </div>
  )
}

export default Footer