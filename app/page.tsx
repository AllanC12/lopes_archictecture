'use client'

import './globals.css'

import { useState } from 'react';

import Header from '@/components/Header';
import Curtain from '@/components/Curtain';
import Banner from "@/components/Banner";
import MenuNavigation from '@/components/MenuNavigation';

export default function Home() {

  const [menuOpen,setMenuOpen] = useState<boolean>(false)

  console.log(menuOpen)

  return (
    <div className="page_home">
      <Header setMenuOpen={setMenuOpen}/>
      <Curtain/>
      <Banner/>
      <MenuNavigation/>
      
    </div>

  );
}
