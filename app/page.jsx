import LearningPathSix from "@/components/common/LearningPathSix";
import HeroSix from "@/components/homes/heros/HeroSix";
import HeaderSix from "@/components/layout/headers/HeaderSix";
import CoursesSix from "@/components/homes/courses/CoursesSix";
import React from "react";
import Teachers from "@/components/homes/instractors/Teachers";
import CategoriesSix from "@/components/homes/categories/CategoriesSix";
import TestimonialsSix from "@/components/homes/testimonials/TestimonialsSix";
import BrandsSix from "@/components/homes/brands/BrandsSix";
import LearningPathsSix from "@/components/homes/LearningPath/LearningPathsSix";
import CountdownRegistration from "@/components/homes/CountdownRegistration";
import EventsSix from "@/components/homes/events/EventsSix";
import BlogsTwo from "@/components/homes/blogs/BlogsTwo";
import GetAppSix from "@/components/homes/getApp/GetAppSix";
import FooterThree from "@/components/layout/footers/FooterThree";
import Preloader from "@/components/common/Preloader";
import HomeAbout from "@/components/about/HomeAbout";
import HowWorks from "@/components/about/HowWorks";

export const metadata = {
  title:
    "SparkEra",
  description:
    "Spark Your Child's Curiosity || Matha and English Worksheet based program",
};

export default function page() {
  return (
    <div className="main-content">
      <Preloader />
      <HeaderSix />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroSix />
        <LearningPathSix />
        <HomeAbout />
        <HowWorks />
        <FooterThree />
      </div>
    </div>
  );
}
