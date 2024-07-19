import {h, Component} from 'preact'


import MenuLink from './menu_link'
import DarkModeToggle from './darkmode_toggle'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="text-center mb-8">
                    <DarkModeToggle parent={this.props.parent} darkMode={this.props.darkMode} />
                </div>
                <h1 class="text-5xl font-title">Tanguy Andreani <span class="text-gray-500 font-title">{'{'}</span></h1>
                <hr class="mb-8 mt-4 border-2 w-32 animate-scalex origin-left"></hr>
                <div class="text-xl sm:text-2xl text-left">
                    <MenuLink link="https://tanguyandreani.github.io" text="Blog" color="border-red-400" />
                    <MenuLink link="https://github.com/TanguyAndreani" text="GitHub" color="border-green-400" />
                    <MenuLink link="https://tanguyandreani.github.io/cv_tanguy_andreani.pdf" text="CV" color="border-yellow-300" />
                    <MenuLink link="mailto:hello@tanguyandreani.me" text="hello@tanguyandreani.me" color="border-blue-300" />
                </div>
            </header>
        )
    }
}
