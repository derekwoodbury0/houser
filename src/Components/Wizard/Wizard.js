import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import store, { CANCEL_VALUES } from '../../store'
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'

export default class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
        
        this.addHouse = this.addHouse.bind(this)
    }

    cancelHouse = () => {
        store.dispatch({type: CANCEL_VALUES})
    }

    addHouse() {
        let newHouse = this.state

        axios.post('/api/houses', newHouse).then(
            this.setState ({ name: '', address: '', city: '', state: '', zip: ''})
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Add New Listing</h1>
                    <Link to="/">
                        <button onClick={this.cancelHouse}>Cancel</button>
                    </Link>
                    <Route path="/wizard/step1" component={StepOne}/>
                    <Route path="/wizard/step2" component={StepTwo}/>
                    <Route path="/wizard/step3" component={StepThree}/>
                </div>
            </div>
        )
    }
}