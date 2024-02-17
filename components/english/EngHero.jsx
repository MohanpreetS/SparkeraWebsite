"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ModalVideo from "@/components/common/ModalVideo";
import GetStarted from "@/components/common/GetStarted";
import gsap from "gsap";
import Link from "next/link";
export default function EngHero() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const parallaxIt = () => {
      const target = document.querySelectorAll(".js-mouse-move-container");

      target.forEach((container) => {
        const targets = container.querySelectorAll(".js-mouse-move");

        targets.forEach((el) => {
          const movement = el.getAttribute("data-move");

          document.addEventListener("mousemove", (e) => {
            const relX = e.pageX - container.offsetLeft;
            const relY = e.pageY - container.offsetTop;

            gsap.to(el, {
              x:
                ((relX - container.offsetWidth / 2) / container.offsetWidth) *
                Number(movement),
              y:
                ((relY - container.offsetHeight / 2) / container.offsetHeight) *
                Number(movement),
              duration: 0.2,
            });
          });
        });
      });
    };

    parallaxIt();
  }, []);
  return (
    <>
      <section className="masthead -type-5">
        <div className="masthead__bg pr-60 md:pr-0" style={{ zIndex: -1 }}>
          <Image
            width={1200}
            height={1200}
            style={{ width: "100%", height: "100%" }}
            src="/assets/img/home-6/hero/bg.png"
            alt="image"
          />
        </div>

        <div className="container big-hor-pad"    >
          <div className="row y-gap-50 items-center justify-between">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
              <div className="masthead__content">
                {/* <h1 className="masthead__title">
                  Spark your child's Curiosity
                </h1> */}
                <h1 className="masthead__title">
                  <span className="concert gradient-text">ENGLISH</span>
                </h1>
                <h2 class="semi-title">Our extensive English curriculum allows your child to develop their reading and writing skills, offering them a lifetime of academic advantages.</h2>
                {/* <h1 className="masthead__title">
                  More Than{" "}
                  <span className="text-purple-1 underline">3.500+</span>{" "}
                  <br className="md:d-none" /> Education Courses
                  <br className="md:d-none" /> Online Join Us Today
                </h1> */}

                <div className="row items-center x-gap-30 y-gap-20 pt-30">
                  <GetStarted />
                  {/* 
                  <div
                    className="col-auto"
                    onClick={() => setIsOpen(true)}
                    cursor
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      className="d-flex items-center js-gallery"
                      data-gallery="gallery1"
                    >
                      <div className="d-flex justify-center items-center size-60 rounded-full border-dark-1-lg">
                        <div className="icon-play text-20 text-dark-1 pl-5"></div>
                      </div>
                      <div className="ml-10">Watch Video</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="750">
              <div className="composition -type-1">
                {/* <div className="composition -type-1 js-mouse-move-container"> */}
                <div className="-img-2">
                  <Image
                    width={500}
                    height={400}
                    className="js-mouse-move rounded-image20"
                    data-move="40"
                    src="/assets/img/premium/englishCover.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
