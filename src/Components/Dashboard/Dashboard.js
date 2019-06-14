import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }

        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        axios.get('/api/houses').then(response => {
            this.setState ({ houses: response.data })
        }).catch(error => console.log(error))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.houses.length !== this.state.houses.length) {
            this.componentDidMount()
        }
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`).then(this.componentDidMount())
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="dashboard">
                    <div className="dashboard-header">
                        <h1>Dashboard</h1>
                        <Link to="/wizard/step1">
                            <button className="dashboard-header-button">Add New Property</button>
                        </Link>
                    </div>
                    <h2>Home Listings</h2>
                    <div className="display">
                        <div>
                            {this.state.houses.map(house => {
                                return (
                                    <House key={house.id}
                                        house={house}
                                        deleteHouse={this.deleteHouse}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}