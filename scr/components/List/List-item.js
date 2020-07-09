import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const ListItem = ( {
                       navigation, miniUrlPhoto, largeUrlPhoto,
                       name, username
                   } ) => {

    return (
        <View style={ styles.listItem }>
            <TouchableWithoutFeedback onPress={ () => navigation.navigate('Photo', { url: largeUrlPhoto }) }>
                <Image
                    style={ styles.img }
                    source={ {
                        uri: miniUrlPhoto
                    } }
                />
            </TouchableWithoutFeedback>
            <View style={ styles.info }>
                <Text style={ styles.name }>{ name }</Text>
                <Text style={ styles.username }>{ username }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 30,
        height: 80,
        flexDirection: 'row',
        marginBottom: 10
    },
    img: {
        flex: 1,
        resizeMode: 'contain'
    },
    info: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

export default ListItem
