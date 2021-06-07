import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import Avatars from "./Avatars"
import SharedAlbumTitleCard from "./SharedAlbumTitleCard"
import theme from "./../../assets/themes/index"
import ImageGallery from "./ImageGallery"
import backgroundImages from "./../../assets/data/backgroundImages"

const SharedAlbum = ({ route }) => {
   const { album } = route.params
   return (
      <ScrollView>
         <SharedAlbumTitleCard album={album} />
         <View style={styles.avatarContainer}>
            <Avatars avatars={album.avatars} />
            <Text
               style={styles.avatarText}
            >{`${album.avatars.length} people`}</Text>
         </View>

         <ImageGallery images={backgroundImages} />
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   avatarContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colors.lightGray,
      marginVertical: theme.spacing.l,
      marginHorizontal: theme.spacing.m,
      paddingHorizontal: theme.spacing.m,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.m
   },
   avatarText: {
      ...theme.textVariants.body3,
      color: theme.colors.black,
      opacity: 0.2
   }
})

export default SharedAlbum
