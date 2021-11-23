import React from 'react'

export default class Company extends React.Component {
    render() {
        return (
            <div class="block md:inline-block mr-8">
                <img class="h-6 block" src={this.props.logo} />
                <p class="font-paragraph text-gray-400 font-light text-left mt-2">
                    {this.props.title}<br/>
                    {this.props.time_period}
                </p>
            </div>
        )
    }
}
