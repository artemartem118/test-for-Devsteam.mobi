import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import ListItem from './List-item'

const List = ( { navigation, users, isFetching } ) => {

    if ( isFetching ) {
        return <ActivityIndicator size='large' style={ styles.loader }/>
    }

    return (
        <View style={ styles.container }>
            <FlatList
                data={ users }
                renderItem={ ( { item } ) => (
                    <ListItem
                        navigation={ navigation }
                        miniUrlPhoto={ item.user.profile_image.medium }
                        largeUrlPhoto={ item.user.profile_image.large }
                        name={ item.user.name }
                        username={ item.user.username }
                    />
                ) }
                keyExtractor={ ( item ) => item.id }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        marginTop: 10
    }
})

export default List
