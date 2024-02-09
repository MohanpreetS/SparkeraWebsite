import Faq from '@/components/common/Faq'
import Preloader from '@/components/common/Preloader'

import Contact from '@/components/contacts/Contact'
import ElemEng from '@/components/english/ElemEng'
import EngHero from '@/components/english/EngHero'
import HighEng from '@/components/english/HighEng'
import MidEng from '@/components/english/MidEng'

import FooterOne from '@/components/layout/footers/FooterOne'
import FooterThree from '@/components/layout/footers/FooterThree'
import Header from '@/components/layout/headers/Header'
import HeaderSix from '@/components/layout/headers/HeaderSix'
import ElemMath from '@/components/math/ElemMath'
import HighMath from '@/components/math/HighMath'
import MidMath from '@/components/math/MidMath'
import React from 'react'
export const metadata = {
    title: 'Contact-2 || Educrat - Professional LMS Online Education Course NextJS Template',
    description:
        'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',

}

export default function page() {
    return (
        <div className="main-content  ">
            <Preloader />

            <HeaderSix />
            <div className="content-wrapper js-content-wrapper overflow-hidden">
                <EngHero />
                <ElemEng />
                <MidEng />
                <HighEng />
                <FooterThree />
            </div>

        </div>
    )
}

