import React, { Component } from 'react'
import './House.css'

export default class Header extends Component {
    render() {
        let { house } = this.props
        return (
            <div>
                <div className="home-container">
                    <div>
                        <img src={house.img} alt="" height="200" width="300"/>
                    </div>
                    <div>
                        <h3>Property Name: {house.name}</h3>
                        <h3>Address: {house.address}</h3>
                        <h3>City: {house.city}</h3>
                        <h3>State: {house.state}</h3>
                        <h3>Zipcode: {house.zip}</h3>
                    </div>
                    <div>
                        <h3>Monthly Mortgage: ${house.mortgage}</h3>
                        <h3>Desired Rent: ${house.rent}</h3>
                        <button 
                            className="delete-button"
                            onClick={() => this.props.deleteHouse(house.id)}
                        >X</button>
                    </div>
                </div>
            </div>
        )
    }
}