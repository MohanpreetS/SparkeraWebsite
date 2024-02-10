"use client";

import React from "react";
import { locationData } from "@/data/officeLocation";
import Image from "next/image";
import { contactData } from "@/data/contactLinks";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <section className="contact-head">
        <div className="masthead__bg pr-60 md:pr-0" style={{ zIndex: -1 }}>
          <Image
            width={1200}
            height={1200}
            style={{ width: "100%", height: "100%" }}
            src="/assets/img/home-6/hero/bg.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div>
                  <h1 className="page-header__title contact-title">Contact Us</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    Contact us via email or phone: Monday-Thursday 10am-7pm, or Friday/Saturday 10am - 4pm.<br />
                    Or send us a message here and we'll get back to you shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between">
            <div className="col-xl-5 col-lg-6">
              <h3 className="text-24 lh-1 fw-500">Contact Info</h3>
              <div className="y-gap-30 pt-60 lg:pt-40">
                {contactData.map((elm, i) => (
                  <div key={i} className="d-flex items-center">
                    <div className="d-flex justify-center items-center size-60 rounded-full bg-light-7">
                      <Image width={30} height={30} src={elm.icon} alt="icon" />
                    </div>
                    <div className="ml-20">
                      {elm.address || elm.email || elm.phoneNumber}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
