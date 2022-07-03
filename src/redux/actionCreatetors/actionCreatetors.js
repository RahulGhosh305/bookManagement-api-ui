import { GET_REQUEST, GET_BOOKS, GET_ERROR, ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../actionTypes/actionTypes"
const axios = require('axios').default;

export const getBook = () => async (dispatch) => {
    dispatch({
        type: GET_REQUEST
    })

    const res = await axios.get("http://localhost:5000/")
    try {
        dispatch({
            type: GET_BOOKS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error.message
        })
    }
}

export const addBook = (book) => async (dispatch) => {
    dispatch({
        type: GET_REQUEST
    })
    // Send a POST request
    axios.post('http://localhost:5000/', { ...book })
        .then((response) => {
            // console.log(response.data);
            dispatch({
                type: ADD_BOOK,
                payload: response.data
            })
        })
        .catch((error) => {
            // console.log(error);
            dispatch({
                type: GET_ERROR,
                payload: error.message
            })
        });
}

export const updateBook = (id, book) => async (dispatch) => {
    dispatch({
        type: GET_REQUEST
    })
    axios.patch(`http://localhost:5000/${id}`, { ...book })
        .then((response) => {
            // console.log(response.data);
            dispatch({
                type: UPDATE_BOOK,
            })
        })
        .catch((error) => {
            // console.log(error);
            dispatch({
                type: GET_ERROR,
                payload: error.message
            })
        });

}

export const deleteBook = (id) => async (dispatch) => {
    dispatch({
        type: GET_REQUEST
    })
    axios.delete(`http://localhost:5000/${id}`)
        .then((response) => {
            // console.log(response.data);
            dispatch({
                type: DELETE_BOOK,
            })
        })
        .catch((error) => {
            // console.log(error);
            dispatch({
                type: GET_ERROR,
                payload: error.message
            })
        });

}