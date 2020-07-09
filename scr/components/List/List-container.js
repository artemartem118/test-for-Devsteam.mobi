import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getUsers } from '../../redux/list-reducer'

import List from './List'

const ListContainer = ( { users, navigation, getUsers, isFetching } ) => {

    useEffect(() => {
        getUsers()
    }, [])

    return <List isFetching={ isFetching } navigation={ navigation } users={ users }/>
}

const mapStateToProps = ( state ) => {
    return {
        users: state.listScreen.users,
        isFetching: state.listScreen.isFetching
    }
}

export default connect(mapStateToProps, { getUsers })(ListContainer)
