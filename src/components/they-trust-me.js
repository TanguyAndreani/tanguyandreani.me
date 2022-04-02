import React from 'react'

import logo360 from '../../assets/logo360.png'
import logo360white from '../../assets/logo360white.png'
import logoEpitech from '../../assets/logoEpitech.png'
import logoIsula from '../../assets/82B64287-808F-4100-9321-0246E2114FA3.png'
import logoIsulaWhite from '../../assets/0C0DAEE4-21E8-46E5-9F54-16E80F2CBAE3.png'

import Company from './company'

export default class TheyTrustMe extends React.Component {
    render() {
        return (
            <div className="TheyTrustMe">
                <h3 class="text-2xl font-title font-light text-gray-400">
                    Ces entreprises m'ont fait confiance
                </h3>
                <div class="p-8">
                    <div class="inline-block animate-fadein">
                        <Company logo={localStorage.theme == 'dark' ? logoIsulaWhite : logoIsula} title="Stage gestion de projet" time_period="avril 2022 - juillet 2022" />
                    </div>
                    <div class="inline-block mt-8 animate-fadein md:mt-0 opacity-0 animation-delay-200">
                        <Company logo={logoEpitech} title="Assistant pédagogique (AER)" time_period="septembre 2021 - mars 2022" />
                    </div>
                    <div class="inline-block animate-fadein opacity-0 animation-delay-400">
                        <Company logo={localStorage.theme == 'dark' ? logo360white : logo360} title="Stage fullstack developer" time_period="août 2020 - décembre 2020" />
                    </div>
                </div>
            </div>
        )
    }
}
