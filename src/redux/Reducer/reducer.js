import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "../actions/types"
const initialState = {
    myFavorites: [],
    allCharacters: []
}
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV:

            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }
        case FILTER:

            const filterAllCharacters = state.allCharacters.filter((char) => char.gender === payload)
            return {
                ...state,
                myFavorites:
                    payload === 'AllCharacters'
                    ? state.allCharacters : filterAllCharacters
            }
        case ORDER:
            // let filterGender = state.allCharacters.filter((char) => char.gender == payload)
            const allCharacterscopy = [...state.allCharacters] //una copiad e mi estado global allcharacter
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