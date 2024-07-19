import {h, Component} from 'preact'

import TheyTrustMe from './they-trust-me'
import Header from './header'
import Footer from './footer'
import About from './about'

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        if (localStorage.theme == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.theme = 'dark'
            document.getElementById('dark_toggle').classList.add('dark')
        } else {
            localStorage.theme = 'light'
            document.getElementById('dark_toggle').classList.remove('dark')
        }
        this.state = ({darkMode: localStorage.theme == 'dark'})
        this.toggleDarkMode = this.toggleDarkMode.bind(this)
    }
    
    toggleDarkMode() {
        localStorage.theme = !this.state.darkMode ? 'dark' : 'light'
        this.setState(() => { return ({ darkMode: (localStorage.theme == 'dark') }) })
        if (localStorage.theme == 'dark')
            document.getElementById('dark_toggle').classList.add('dark')
        else
            document.getElementById('dark_toggle').classList.remove('dark')
        document.getElementById('bg_element').classList.add('transition-colors')
    }

    render() {
        return (
            <div>
                <div class="max-w-4xl mx-auto z-50 rp-8 pt-24 pb-7 h-screen dark:text-gray-200 px-4 md:px-2 animate-fadein-faster">
                    <Header parent={this} darkMode={this.state.darkMode} />
                    <About/>
                    <TheyTrustMe/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

