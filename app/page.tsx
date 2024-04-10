'use client'

import './globals.css'

import { useRef } from 'react';

import Header from '@/components/Header';
import Curtain from '@/components/Curtain';
import Banner from "@/components/Banner";
import Contacts from '@/components/Contacts';
import About from '@/components/About';

export default function Home() {

 

  return (
    <div className="page_home">
      <Header/>
      <Curtain/>
      <Banner/>
      {/* <About/>
      <Contacts/> */}
    </div>

  );
}
