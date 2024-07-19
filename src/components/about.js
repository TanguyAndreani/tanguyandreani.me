import {h, Component} from 'preact'



export default class About extends Component {
    render() {
        return (
            <div class="mx-auto my-8 font-paragraph font-extralight">
                <p class="text-lg mt-4">
                    Développeur et artiste multi-technique, à mon compte depuis 2023, j'explore de nombreuses facettes des sciences de l'informatique, <span></span>
                    comme le <span class="inline-block border-b border-dotted border-gray-400">reverse engineering</span>, <span></span>
                    l'<span class="inline-block border-b border-dotted border-gray-400">art génératif</span>, <span></span>
                    la <span class="inline-block border-b border-dotted border-gray-400">programmation fonctionnelle et la théorie des catégories</span>, <span></span>
                    ou encore le <span class="inline-block border-b border-dotted border-gray-400">design d'interface graphique</span>. <span></span>
                </p>
                <p class="text-lg mt-4">
                    Je suis ouvert aux propositions de recrutement, notamment en freelance via mon entreprise.
                </p>
            </div>
        )
    }
}

