import './globals.css'
import Curtain from '../components/Curtain';
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="page_home">
      <Curtain/>
      <Banner/>
    </div>

  );
}
