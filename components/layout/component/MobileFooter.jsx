import React from "react";
import Link from "next/link";
export default function MobileFooter() {
  return (
    <>
      <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
        <div className="mobile-footer__number">
          <div className="text-14 fw-500 text-dark-1">Call us</div>
          <div className="text-14 fw-500 text-purple-1">437-987-0699</div>
        </div>

        <div className="mobile-footer__number py-5">
          <div className="text-14 fw-500 text-dark-1">Mail us</div>
          <div className="text-14 fw-500 text-purple-1">sparkeracademy@gmail.com</div>
        </div>

        <div className="mobile-footer__number py-5">
          <div className="text-14 fw-500 text-dark-1">Address</div>
          <div className="text-14 fw-500 text-purple-1">Unit 4, Steeles Ave E, Brampton</div>
        </div>

      </div>
    </>
  );
}
