import * as actionTypes from './actions'
import moment from 'moment'

const initialState = {
    date: moment().format('MMMM Do YYYY'),
    time: moment().format('h:mm:ss a')
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_DATE_TIME:
            return {
                ...state,
                date: moment().format('MMMM Do YYYY'),
                time: moment().format('h:mm:ss a')
            }
            break
        // case actionTypes.SELECT_STAGE:
        //     return {
        //         ...state, currentPage: action.payload
        //     }
        //     break
        // case actionTypes.MUTE_OR_UNMUTE:
        //     return {
        //         ...state, mute: action.payload
        //     }
        //     break
        default: return state
    }
}

export default reducer