import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Albums from "../components/Albums"
import SharedAlbum from "../components/SharedAlbum"

const Stack = createStackNavigator()
const Navigation = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Album" component={Albums} />
         <Stack.Screen name="Shared Album" component={SharedAlbum} />
      </Stack.Navigator>
   )
}

export default Navigation
