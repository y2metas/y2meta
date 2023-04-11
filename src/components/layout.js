import Header from "@/components/header";
import Footer from "@/components/footer";
import Gtag from "@/components/gtag";

const Layout = ({children}) => (
  <>
    <Gtag/>
    <div className="md:w-[890px] mx-auto">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  </>
);

export default Layout