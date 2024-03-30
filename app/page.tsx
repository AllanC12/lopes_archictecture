import './globals.css'

import Header from '@/components/Header';
import Curtain from '@/components/Curtain';
import Banner from "@/components/Banner";
import MenuNavigation from '@/components/MenuNavigation';

export default function Home() {
  return (
    <div className="page_home">
      <Header/>
      <Curtain/>
      <Banner/>
      <MenuNavigation/>
    </div>

  );
}
