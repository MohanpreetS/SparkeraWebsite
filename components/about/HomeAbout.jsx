import React from "react";
import Image from "next/image";
export default function HomeAbout() {
  return (
    <>
      <section className="section-bg layout-pt-lg layout-pb-sm bg-light-4">
        <div className="section-bg__item -full">
          <div
            className="bg-image js-lazy"
            style={{ backgroundImage: "url(/assets/img/home-6/svg/bg.png)" }}
          ></div>
        </div>

        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-5 col-lg-6 col-md-9 lg:order-2">
              <div className="-el-2">
                <Image
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "100%" }}
                  className="w-1/1 rounded-image20"
                  src="/assets/img/premium/elemHomeChild.jpg"
                  alt="image"
                />
              </div>

            </div>

            <div className="col-lg-6 lg:order-1">
              <h3 className="text-45 md:text-30 lh-12">
                {/* <span className="text-purple-1">Learn</span> new skills when
              <br className="lg:d-none" /> and where you like. */}
                About Us
              </h3>
              <p className="mt-20 subtext">
                Welcome to SparkEra! Founded in 2009 under the name StepUp, and later known as Matheng, we bring over 15 years of experience in providing exceptional Math and English education. At SparkEra, we believe in personalized learning, offering daily worksheets that allow students to learn at their own pace and master concepts beyond their grade level. Over the years, we have successfully taught over 2,000 students, with more than 1,000 of them surpassing their grade level in math and English. Our mission is to ignite a passion for learning and help each student reach their full potential.
              </p>
              <div className="d-inline-block mt-30">
                <a href="#" className="button -md -dark-1 text-white">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="svg-shape">
        <svg
          width="1925"
          height="261"
          viewBox="0 0 1925 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
            fill="#F7F8FB"
          />
        </svg>
      </div>
    </>
  );
}




// import React from "react";
// import Image from "next/image";
// export default function Teachers() {
//   return (
//     <>
//       <section className="section-bg layout-pt-lg layout-pb-sm bg-light-4">
//         <div className="section-bg__item -full">
//           <div
//             className="bg-image js-lazy"
//             style={{ backgroundImage: "url(/assets/img/home-6/svg/bg.png)" }}
//           ></div>
//         </div>

//         <div className="container">
//         <div className="row y-gap-30 justify-between items-center">
//           <div className="col-xl-5 col-lg-6 col-md-9 lg:order-2">
//             <h3 className="text-45 md:text-30 lh-12">
//               {/* <span className="text-purple-1">Learn</span> new skills when
//               <br className="lg:d-none" /> and where you like. */}
//               About Us
//             </h3>
//             <p className="mt-20 subtext">
//             Welcome to SparkEra! Founded in 2009 under the name StepUp, and later known as Matheng, we bring over 15 years of experience in providing exceptional Math and English education. At SparkEra, we believe in personalized learning, offering daily worksheets that allow students to learn at their own pace and master concepts beyond their grade level. Over the years, we have successfully taught over 2,000 students, with more than 1,000 of them surpassing their grade level in math and English. Our mission is to ignite a passion for learning and help each student reach their full potential.
//             </p>
//             <div className="d-inline-block mt-30">
//               <a href="#" className="button -md -dark-1 text-white">
//                 Get Started
//               </a>
//             </div>
//           </div>

//           <div className="col-lg-6 lg:order-1">
//               <div className="-el-2">
//                 <Image
//                   width={580}
//                   height={670}
//                   style={{ width: "100%", height: "100%" }}
//                   className="w-1/1"
//                   src="/assets/img/home-6/learn/1.png"
//                   alt="image"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="svg-shape">
//         <svg
//           width="1925"
//           height="261"
//           viewBox="0 0 1925 261"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
//             fill="#F7F8FB"
//           />
//         </svg>
//       </div>
//     </>
//   );
// }
