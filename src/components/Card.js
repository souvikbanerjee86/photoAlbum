import React from "react"
import {
   ImageBackground,
   Pressable,
   Text,
   View,
   StyleSheet
} from "react-native"
import theme from "../../assets/themes"

const Card = ({ item }) => {
   return (
      <ImageBackground source={item.background} style={styles.imageBackground}>
         <Pressable>
            <View style={styles.imageContentContainer}>
               <View>
                  <Text style={styles.imageTitle}>{item.title}</Text>
                  <Text
                     style={styles.imageSubtitle}
                  >{`Created by ${item.user}`}</Text>
               </View>
               <View></View>
            </View>
         </Pressable>
      </ImageBackground>
   )
}

const styles = StyleSheet.create({
   imageBackground: {
      resizeMode: "cover",
      overflow: "hidden",
      height: theme.imageHeight.s,
      marginTop: theme.spacing.m,
      marginHorizontal: theme.spacing.m,
      paddingHorizontal: theme.spacing.m,
      borderRadius: theme.borderRadius.m,
      justifyContent: "center"
   },
   imageContentContainer: {},
   imageTitle: {
      ...theme.textVariants.h1,
      color: theme.colors.white
   },
   imageSubtitle: {
      ...theme.textVariants.h2,
      color: theme.colors.white
   }
})

export default Card
