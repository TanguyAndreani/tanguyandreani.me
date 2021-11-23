import React from 'react'

import logo360 from '../../assets/logo360.png'
import logo360white from '../../assets/logo360white.png'
import logoEpitech from '../../assets/logoEpitech.png'

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
                        <Company logo={localStorage.theme == 'dark' ? logo360white : logo360} title="Stage fullstack developer" time_period="août 2020 - décembre 2020" />
                    </div>
                    <div class="inline-block mt-8 md:mt-0 animate-fadein opacity-0 animation-delay-400">
                        <Company logo={logoEpitech} title="Assistant pédagogique (AER)" time_period="Depuis septembre 2021" />
                    </div>
                </div>
            </div>
        )
    }
}
