import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import ContactSectionTwo from "@/components/ContactSection/ContactSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MapBox from "@/components/MapSection/MapBox";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Contact2 = () => {
  return (
    <Layout pageTitle="Kontakt">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Kontakt" />
      <ContactSectionTwo />
      <ContactInfoTwo />
      <MapBox />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default Contact2;
