import React, { Component } from 'react'

export default class HInfo extends Component {
    render() {
        return (
            <div>
                {this.props.hospitals.map(item => (
                    <div key={item._id}>
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        )
    }
}
