import Faq from '@/components/common/Faq'
import Preloader from '@/components/common/Preloader'

import Contact from '@/components/contacts/Contact'

import FooterOne from '@/components/layout/footers/FooterOne'
import FooterThree from '@/components/layout/footers/FooterThree'
import Header from '@/components/layout/headers/Header'
import HeaderSix from '@/components/layout/headers/HeaderSix'
import ElemMath from '@/components/math/ElemMath'
import HighMath from '@/components/math/HighMath'
import MathHero from '@/components/math/MathHero'
import MidMath from '@/components/math/MidMath'
import React from 'react'
export const metadata = {
  title: 'Math - SparkEra',
  description:
    '',

}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />

      <HeaderSix />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <MathHero />
        <ElemMath />
        <MidMath />
        <HighMath />
        <FooterThree />
      </div>

    </div>
  )
}

