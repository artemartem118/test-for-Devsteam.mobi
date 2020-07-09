import 'react-native-gesture-handler'

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import { name as appName } from './app.json'

import store from './scr/redux/store'

import App from './App'

AppRegistry.registerComponent(appName, () => () => (
    <NavigationContainer>
        <Provider store={ store }>
            <App/>
        </Provider>
    </NavigationContainer>
))
