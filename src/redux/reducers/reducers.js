import { ADD_BOOK, DELETE_BOOK, GET_BOOKS, GET_ERROR, GET_REQUEST, UPDATE_BOOK } from "../actionTypes/actionTypes";

const initialState = {
    books: [],
    isLoading: false,
    error: null
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case GET_BOOKS:
            return {
                books: action.payload,
                isLoading: false,
                error: null
            }

        case ADD_BOOK:
            return {
                books: [...state.books, action.payload],
                isLoading: false,
                error: null
            }

        case UPDATE_BOOK:
            return {
               ...state
            }

        case DELETE_BOOK:
            return {
                ...state
            }

        case GET_ERROR:
            return {
                books: [],
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default bookReducer;


