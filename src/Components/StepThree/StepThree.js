import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import store, { STEP_THREE_VALUES, CANCEL_VALUES } from '../../store'

export default class StepThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mortgage: store.getState().mortgage,
            rent: store.getState().rent
        }

        this.addHouse = this.addHouse.bind(this)
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState ({
                mortgage: store.getState().mortgage,
                rent: store.getState().rent
            })
        })
    }

    handleChange = event => {
        let { name, value } = event.target
        this.setState ({ [name]: value })
    }

    handlePrevClick = () => {
        let stepThreeValues = this.state
        store.dispatch ({ type: STEP_THREE_VALUES, payload: stepThreeValues })
    }
    
    addHouse() {
        let newHouse = store.getState()
        newHouse.rent = this.state.rent
        newHouse.mortgage = this.state.mortgage
    
        axios.post('/api/houses', newHouse)
        store.dispatch({ type: CANCEL_VALUES})
    }

    render() {
        return(
            <div>
                <h2>Monthly Mortgage Amount</h2>
                <input
                    onChange={this.handleChange}
                    name="mortgage"
                    value={this.state.mortgage}
                />
                <h2>Desired Monthly Rent</h2>
                <input
                    onChange={this.handleChange}
                    name="rent"
                    value={this.state.rent}
                />
                <div>
                    <Link to="/wizard/step2">
                        <button onClick={this.handlePrevClick}>Previous Step</button>
                    </Link>
                    <Link to="/">
                        <button onClick={this.addHouse}>Complete</button>
                    </Link>
                </div>
            </div>
        )
    }
}