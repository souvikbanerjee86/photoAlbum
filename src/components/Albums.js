import React, { Fragment } from "react"
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native"
import theme from "../../assets/themes/index"
import albumData from "../../assets/data/albumPage"
import Card from "./Card"
import Separator from "./Separator"
const Albums = ({ navigation }) => {
   return (
      <Fragment>
         <ScrollView>
            <View style={styles.albumContainer}>
               {albumData.map((item, index) => (
                  <View key={index}>
                     <Card item={item} navigation={navigation} />

                     {index === 1 && <Separator />}
                  </View>
               ))}
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
