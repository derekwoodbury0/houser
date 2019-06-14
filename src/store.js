import { createStore } from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imageUrl: '',
    mortgage: '',
    rent: ''
}

export const STEP_ONE_VALUES = 'STEP_ONE_VALUES'
export const STEP_TWO_VALUES = 'STEP_TWO_VALUES'
export const STEP_THREE_VALUES = 'STEP_THREE_VALUES'
export const CANCEL_VALUES = 'CANCEL_VALUES'
export const ADD_HOUSE = 'ADD_HOUSE'

function reducer(state = initialState, action) {

    switch(action.type) {
        case STEP_ONE_VALUES:
            return {
                ...state,
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip
            }
        case STEP_TWO_VALUES:
            return {...state, imageUrl: action.payload}
        case STEP_THREE_VALUES:
            return {...state, mortgage: action.payload.mortgage, rent: action.payload.rent}
        case CANCEL_VALUES:
            return {...initialState}
        default:
            return state
    }
}

export default createStore(reducer)