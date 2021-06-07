import React from "react"
import { StyleSheet, View, Image } from "react-native"
import theme from "./../../assets/themes/index"
const Avatars = ({ avatars }) => {
   return (
      <View>
         {avatars.map((item, index) => (
            <Image
               source={item.image}
               key={index}
               style={[
                  styles.avatarStyle,
                  { zIndex: index, marginLeft: index * 16 },
                  index !== avatars.length - 1 && { position: "absolute" }
               ]}
            />
         ))}
      </View>
   )
}

const styles = StyleSheet.create({
   avatarStyle: {
      resizeMode: "cover",
      width: theme.imageHeight.xs,
      height: theme.imageHeight.xs,
      borderRadius: theme.imageHeight.xs / 2,
      borderWidth: theme.borderRadius.xs,
      borderColor: theme.colors.white
   }
})

export default Avatars
