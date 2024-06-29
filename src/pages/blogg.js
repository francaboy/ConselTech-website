import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const BlogGrid = () => {
  return (
    <Layout pageTitle="Blogg">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blogg" />
      <NewsSection showTitle={false} isMore />
      <MainFooter />
    </Layout>
  );
};

export default BlogGrid;
