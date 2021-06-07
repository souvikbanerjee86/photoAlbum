import React from "react"
import { ImageBackground, Text, View, StyleSheet } from "react-native"
import theme from "./../../assets/themes/index"

export const SharedAlbumTitleCard = ({ album }) => {
   return (
      <ImageBackground source={album.background} style={styles.imageBackground}>
         <View style={styles.imageContainer}>
            <View>
               <Text style={styles.title}>{album.title}</Text>
               <Text style={styles.subTitle}>{`Created by ${album.user}`}</Text>
            </View>
            <View>
               <Text style={styles.imageNumber}>102 photos</Text>
            </View>
         </View>
      </ImageBackground>
   )
}

const styles = StyleSheet.create({
   imageBackground: {
      resizeMode: "cover",
      overflow: "hidden",
      height: theme.imageHeight.l,
      marginTop: theme.spacing.m,
      marginHorizontal: theme.spacing.m,
      paddingHorizontal: theme.spacing.m,
      paddingVertical: theme.spacing.m,
      borderRadius: theme.borderRadius.m,
      justifyContent: "flex-end"
   },
   imageContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end"
   },
   title: {
      ...theme.textVariants.h1,
      color: theme.colors.white
   },
   subTitle: {
      ...theme.textVariants.body2,
      color: theme.colors.gray
   },
   imageNumber: {
      ...theme.textVariants.body3,
      color: theme.colors.gray
   }
})

export default SharedAlbumTitleCard
