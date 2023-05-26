 import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "../actions/types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}
const rootReducer = (state = initialState, { type, payload,pepi }) => {
    switch (type) {
        case ADD_FAV:
            return {
                 ...state,
                  myFavorites: payload, 
                  allCharacters: payload 
                };

        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites: [...state.myFavorites, payload],
        //         allCharacters: [...state.allCharacters, payload]
        //     }

        case REMOVE_FAV: 
        const filter2 = state.myFavorites.filter((user) => user.id !== pepi)   
            return {
                 ...state, 
                 myFavorites: filter2,
                 allCharacters: payload };

        // case REMOVE_FAV:
        //     const filter =state.myFavorites.filter(fav => fav.id !== payload)
        //     const filter2 =state.allCharacters.filter(fav => fav.id !== payload)
        //     return {
        //         ...state,
        //         myFavorites:filter ,//
        //         allCharacters: filter2
        //     }
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
            const allCharacterscopy = [...state.myFavorites] //una copiad e mi estado global allcharacter
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