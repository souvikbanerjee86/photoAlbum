import React from "react"
import { View, Text } from "react-native"

const SharedAlbum = ({ route }) => {
   const { item } = route.params
   console.log(item)
   return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Text>SharedAlbum Page</Text>
      </View>
   )
}

export default SharedAlbum
