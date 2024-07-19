import {h, Component} from 'preact'



import logo360 from '../../assets/360.png'
import logo360white from '../../assets/360-dark-theme.png'
import logoEpitech from '../../assets/epitech.png'
import logoIsula from '../../assets/isula.png'
import logoIsulaWhite from '../../assets/isula-dark-theme.png'

import Company from './company'

export default class TheyTrustMe extends Component {
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
                    <div class="inline-block animate-fadein mt-8 md:mt-0 opacity-0 animation-delay-400">
                        <Company logo={localStorage.theme == 'dark' ? logo360white : logo360} title="Stage fullstack developer" time_period="août 2020 - décembre 2020" />
                    </div>
                </div>
            </div>
        )
    }
}
