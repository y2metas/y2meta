import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({children}) => (
  <>
    <div className="md:w-[890px] mx-auto">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  </>
);

export default Layout