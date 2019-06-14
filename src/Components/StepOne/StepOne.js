import React, { Component } from 'react'
import store, { STEP_ONE_VALUES } from '../../store'
import { Link } from 'react-router-dom'

export default class StepOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zip: store.getState().zip
        }

    }

    handleChange = (event) => {
        let { value, name } = event.target
        this.setState ({ [name]: value})
    }

    handleClick = () => {
        let stepOneInfo = this.state
        store.dispatch({type: STEP_ONE_VALUES, payload: stepOneInfo})
    }

    render() {
        return(
            <div>
                <div>
                    <h2>Property Name</h2>
                    <input
                        onChange={this.handleChange}
                        name="name"
                        value={this.state.name}
                    />
                    <h2>Address</h2>
                    <input
                        onChange={this.handleChange}
                        name="address"
                        value={this.state.address}
                    />
                    <h2>City</h2>
                    <input
                        onChange={this.handleChange}
                        name="city"
                        value={this.state.city}
                    />
                    <h2>State</h2>
                    <input
                        onChange={this.handleChange}
                        name="state"
                        value={this.state.state}
                    />
                    <h2>Zip Code</h2>
                    <input
                        onChange={this.handleChange}
                        name="zip"
                        value={this.state.zip}
                    />
                    <Link to="/wizard/step2">
                        <button onClick={this.handleClick}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}