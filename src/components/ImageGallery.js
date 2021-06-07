import React from "react"
import { FlatList, Image, Text, View, StyleSheet } from "react-native"
import theme from "./../../assets/themes/index"

const ImageGallery = ({ images }) => {
   const ListImage = (itemImage) => {
      return <Image source={itemImage.background} style={styles.imageGallery} />
   }
   return (
      <View style={styles.galleryContainer}>
         <Text style={styles.galleryText}>Photos</Text>
         <FlatList
            data={images}
            numColumns={3}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => ListImage(item)}
         />
      </View>
   )
}
const styles = StyleSheet.create({
   galleryContainer: {
      alignItems: "center",
      marginBottom: theme.spacing.l
   },
   galleryText: {
      ...theme.textVariants.body3,
      color: theme.colors.gray
   },
   imageGallery: {
      height: theme.imageHeight.l,
      width: theme.imageHeight.l,
      margin: 2
   }
})

export default ImageGallery
