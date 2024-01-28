import React from "react";
import Links from "../component/Links";
import Socials from "@/components/common/Socials";
import FooterLinks from "../component/FooterLinks";
import Image from "next/image";

export default function FooterThree() {
  return (
    <footer className="footer -type-5 border-top-light">
      <div className="container">
        <div className="row y-gap-30 pb-20">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="footer-header__logo">
              <Image
                width={140}
                height={50}
                src="/assets/img/general/logoNameDark.png"
                alt="logo"
              />
               <div className="footer-header-socials">
              <div className="footer-header-socials__list d-flex items-center">
                <Socials
                  componentsClass={
                    "size-40 d-flex justify-center items-center "
                  }
                />
              </div>
            </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="mt-30">
              <div className="text-17 text-dark-1">Call Us</div>
              <div className="text-17 lh-1 fw-500 text-purple-1 mt-5">
                (437)-987-0699
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="mt-30 pr-20">
              <div className="lh-17">
              <Image
                            width={24}
                            height={24}
                            src="/assets/img/footer/icons8-location-100.png"
                            alt="icon"
                          /> Unit 4, 2575 Steeles Ave E, Brampton, ON <br/>
                <Image
                            width={24}
                            height={24}
                            src="/assets/img/footer/icons8-email-96.png"
                            alt="icon"
                          />{" "}sparkeracademy@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* <div className="py-30 border-top-light">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="footer-footer__copyright d-flex items-center h-100">
                © {new Date().getFullYear()} Educrat. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div className="d-flex x-gap-15">
                    <Links />
                  </div>
                </div>

                <div>
                  <a
                    href="#"
                    className="button -md -light-4 px-20 -purple-3 text-purple-1"
                  >
                    <i className="icon-worldwide mr-5"></i>English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
