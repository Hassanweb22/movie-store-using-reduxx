let fullData = "fullData"
let remove = "remove"
let add = "add"

const removeCards = (updateCards, empty, removeLeft) => {
    console.log("copyCards=>", updateCards)
    return (dispatch) => {
        dispatch({
            type: remove,
            cards: updateCards,
            empty: [...empty, ...removeLeft]
        })
    }
}
const addCards = (updateEmpty, cards, addLeft) => {
    console.log("addCards=>", updateEmpty)
    return (dispatch) => {
        dispatch({
            type: add,
            cards: [...cards, ...addLeft],
            empty: updateEmpty
        })
    }
}

const set_Data = (counter) => {
    return (dispatch) => {
        console.log("counter=>", counter)
        dispatch({
            type: "setData",
            counter: counter
        })
    }
}

const data_fetch = (counter) => {
    return async (dispatch) => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
        let json = await res.json()
        console.log("json", json)
        dispatch({
            type: fullData,
            payload: json
        })
    }
}

export {
    removeCards,
    addCards,
    set_Data,
    data_fetch,
    fullData,
    remove,
    add
}