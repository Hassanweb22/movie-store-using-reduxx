import { remove, add } from "../action/action"
import array from '../../Data'

const InitialState = {
    name: "Hassan",
    email: "Hassan@yahoo.com",
    age: 21,
    counter: 0,
    cards: array,
    empty: []
}



export default function appReducer(state = InitialState, action) {
    // console.log("appReducer_action ==>", action)
    switch (action.type) {
        case remove:
            console.log("remove", array)
            return { ...state, cards: action.cards, empty: action.empty }
        case add:
            console.log("add", action)
            return { ...state, cards: action.cards, empty: action.empty }
        default:
            return { ...state }
    }
}