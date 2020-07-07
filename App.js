import 'react-native-gesture-handler'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

const App = () => {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Text style={styles.text}>awdawd</Text>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'red'
    }
})

export default App
