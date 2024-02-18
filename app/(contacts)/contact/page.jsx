import Faq from '@/components/common/Faq'
import Preloader from '@/components/common/Preloader'

import Contact from '@/components/contacts/Contact'

import FooterOne from '@/components/layout/footers/FooterOne'
import FooterThree from '@/components/layout/footers/FooterThree'
import Header from '@/components/layout/headers/Header'
import HeaderSix from '@/components/layout/headers/HeaderSix'
import React from 'react'
export const metadata = {
  title: 'Contact Us',
  description:
    '',

}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />

      <HeaderSix />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <Contact />
        <Faq />
        <FooterThree />
      </div>

    </div>
  )
}

