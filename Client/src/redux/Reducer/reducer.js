 import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "../actions/types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}
const rootReducer = (state = initialState, { type, payload,id }) => {
    switch (type) {
        case ADD_FAV:
            return {
                 ...state,
                  myFavorites: payload, 
                  allCharacters: payload 
                };

        case REMOVE_FAV: 
        const filter2 = state.myFavorites.filter((user) => user.id !== id)   
            return {
                 ...state, 
                 myFavorites: filter2,
                 allCharacters: payload };

        case FILTER:

            const filterAllCharacters = state.allCharacters.filter((char) => char.gender === payload)
            return {
                ...state,
                myFavorites:
                    payload === 'AllCharacters'
                        ? state.allCharacters : filterAllCharacters
            }
        case ORDER:
            const allCharacterscopy = [...state.myFavorites]
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                        ? allCharacterscopy.sort((a, b) => a.id - b.id)
                        : allCharacterscopy.sort((a, b) => b.id - a.id)
            }
        default:
            return { ...state }
    }
}
export default rootReducer;