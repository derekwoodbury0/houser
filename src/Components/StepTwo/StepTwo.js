import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { STEP_TWO_VALUES } from '../../store'

export default class StepTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageUrl: store.getState().imageUrl
        }

        this.handleClick=this.handleClick.bind(this)
    }

    componentDidMount() {
        store.subscribe( () => this.setState ({ imageUrl: store.getState().imageUrl }))
    }

    handleChange = event => this.setState ({ imageUrl: event.target.value })

    handleClick() {
        let stepTwoValues = this.state.imageUrl
        store.dispatch({ type: STEP_TWO_VALUES, payload: stepTwoValues })
    }

    render() {
        return(
            <div>
                <h2>Image URL</h2>
                <input
                    onChange={this.handleChange}
                    value={this.state.imageUrl}
                />
                <div>
                    <Link to="/wizard/step1">
                        <button onClick={this.handleClick}>Previous Step</button>
                    </Link>
                    <Link to="/wizard/step3">
                        <button onClick={this.handleClick}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}