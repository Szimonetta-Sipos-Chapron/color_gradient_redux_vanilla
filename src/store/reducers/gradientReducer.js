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
        
        
        /*case "ORIENT_LEFT" : {
            return {...state, direction : "270deg"}
        }
        case "ORIENT_RIGHT" : {
            return {...state, direction : "90deg"}
        }
        case "ORIENT_45" : {
            return {...state, direction : "45deg"}
        }
        case "ORIENT_135" : {
            return {...state, direction : "135deg"}
        }
        case "ORIENT_225" : {
            return {...state, direction : "225deg"}
        }
        case "ORIENT_315" : {
            return {...state, direction : "315deg"}
        }*/
        default :
            return state;
    }
}

export const CHANGE_FIRST_COLOR = () => {return {type : "CHANGE_FIRST_COLOR" }}
export const CHANGE_LAST_COLOR = () => {return {type : "CHANGE_LAST_COLOR" }}
export const CHANGE_ALL_COLORS = () => {return {type : "CHANGE_ALL_COLORS" }}
export const CHANGE_DIRECTION = (direction) => {return {type : "CHANGE_DIRECTION", payload: direction }}

/*export const ORIENT_LEFT = () => {return {type : "ORIENT_LEFT" }}
export const ORIENT_RIGHT = () => {return {type : "ORIENT_RIGHT" }}
export const ORIENT_45 = () => {return {type : "ORIENT_45" }}
export const ORIENT_135 = () => {return {type : "ORIENT_135" }}
export const ORIENT_225 = () => {return {type : "ORIENT_225" }}
export const ORIENT_315 = () => {return {type : "ORIENT_315" }}*/
