import Header from "@/components/Header";
import Image from "next/image";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Footer from "@/components/Footer";
import { HeaderNavs } from "@/components/Header/constants";
import HeaderNav from "@/components/Navs/HeaderNav";
import HeroSection from "@/containers/home-page/hero-section";
import InfoSection from "@/containers/home-page/info-section";
import ServicesSection from "@/containers/home-page/service-section";
import HeaderSection from "@/containers/home-page/header-section";
export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <Footer/>
    </>
  );
}
