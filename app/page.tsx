import "./globals.css";

import Header from "@/components/Header";
import Curtain from "@/components/Curtain";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import About from "@/components/About";

import { ContextBannerProvider } from "./context/BannerContext";

export default function Home() {
  return (
    <div className="page_home">
      <ContextBannerProvider>
        <Header />
        <Curtain />
        <Banner />
        <Projects />
        {/* <About/>
        <Contacts/> */}
      </ContextBannerProvider>
    </div>
  );
}
