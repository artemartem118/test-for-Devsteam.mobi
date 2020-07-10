import { requireUsers } from '../API/api'

const SET_USERS = 'list/SET_USERS'
const TOGGLE_IS_FETCHING = 'list/TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    isFetching: false
}

const listReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
    }
    return state
}

const setUsers = ( payload ) => ({
    type: SET_USERS,
    payload
})
const toggleIsFetching = ( isFetching ) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const getUsers = () => async dispatch => {

    dispatch(toggleIsFetching(true))

    const data = await requireUsers()
    const users = data.map(dataItem => ({
        user: dataItem.user,
        id: dataItem.id
    }))

    dispatch(setUsers(users))
    dispatch(toggleIsFetching(false))
}

export default listReducer
