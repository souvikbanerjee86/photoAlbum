import React, { Fragment } from "react"
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native"
import theme from "../../assets/themes/index"
import albumData from "../../assets/data/albumPage"
import Card from "./Card"
const Albums = ({ navigation }) => {
   return (
      <Fragment>
         <ScrollView>
            <View style={styles.albumContainer}>
               {albumData.map((item, index) => {
                  return <Card key={index} item={item} />
               })}
            </View>
         </ScrollView>
      </Fragment>
   )
}

const styles = StyleSheet.create({
   albumContainer: {
      marginBottom: theme.spacing.l
   }
})

export default Albums
