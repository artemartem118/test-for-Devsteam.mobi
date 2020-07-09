import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Photo from './scr/components/Photo/Photo'
import ListContainer from './scr/components/List/List-container'

const Stack = createStackNavigator()

const App = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='List' component={ ListContainer }/>
            <Stack.Screen name='Photo' component={ Photo }/>
        </Stack.Navigator>
    )
}

export default App
