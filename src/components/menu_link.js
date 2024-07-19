import {h, Component} from 'preact'


export default class MenuLink extends Component {
    render() {
        return (
            <a href={this.props.link}
                class={
                    "dark:sm:rounded sm:rounded-md border-b-2 sm:border-2 inline-block mt-3 sm:dark:bg-gray-900 dark:text-gray-100 bg-none no-underline sm:mt-0 sm:inline-block font-extralight pb-2 sm:px-3 sm:py-1 mx-0 mr-4 sm:hover:shadow-md text-gray-800 " + this.props.color}>
                {this.props.text}
            </a>
        )
    }
}
