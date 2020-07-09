import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Photo = ( { route } ) => {

    const { url } = route.params

    return (
        <View style={ styles.container }>
            <Image
                style={ styles.img }
                source={ {
                    uri: url
                } }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100%',
        flex: 1,
        resizeMode: 'contain'
    }
})

export default Photo
