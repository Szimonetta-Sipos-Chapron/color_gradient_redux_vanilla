import { randomHexColor } from "../../utils/color";

const initialState = {
    firstColor: '#e367a4',
    lastColor: '#48b1f3',
    direction: '90deg',
    nbColors: 0,
};

export default function gradientReducer(state = initialState, action = {type : 'INIT'}) {
    
    switch (action.type) {

        case "CHANGE_FIRST_COLOR" : {
            return {...state, firstColor : randomHexColor(), nbColors: state.nbColors + 1 };
        }
        case "CHANGE_LAST_COLOR" : {
            return {...state, lastColor : randomHexColor(), nbColors : state.nbColors + 1};
        }
        case "CHANGE_ALL_COLORS" : {
            return {...state, firstColor : randomHexColor(), lastColor : randomHexColor(), nbColors : state.nbColors + 2}
        }
        case "CHANGE_DIRECTION" : {
            return {...state, direction: action.payload}
        }
        case "INIT" : {
            return state;
        }
        
        default :
            return state;
    }
}

export const CHANGE_FIRST_COLOR = () => {return {type : "CHANGE_FIRST_COLOR" }}
export const CHANGE_LAST_COLOR = () => {return {type : "CHANGE_LAST_COLOR" }}
export const CHANGE_ALL_COLORS = () => {return {type : "CHANGE_ALL_COLORS" }}
export const CHANGE_DIRECTION = (direction) => {return {type : "CHANGE_DIRECTION", payload: direction }}

