import React, { Fragment, useLayoutEffect, useRef, useMemo } from "react"
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import theme from "../../assets/themes/index"
import albumData from "../../assets/data/albumPage"
import Card from "./Card"
import Separator from "./Separator"
import Feather from "@expo/vector-icons/Feather"
import RBSheet from "react-native-raw-bottom-sheet"
import BottomSheetContent from "./BottomSheetContent"

const Albums = ({ navigation, navigation: { setOptions } }) => {
   const sheetRef = useRef()
   useLayoutEffect(() => {
      setOptions({
         headerRight: () => (
            <TouchableOpacity onPress={() => openBottomSheet()}>
               <View style={styles.openSheetButton}>
                  <Feather name="plus" size={16} color={theme.colors.white} />
               </View>
            </TouchableOpacity>
         )
      })
   })

   const openBottomSheet = () => {
      sheetRef.current.open()
   }

   const closeBottomSheet = () => {
      sheetRef.current.close()
   }
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
         <RBSheet
            ref={sheetRef}
            height={250}
            openDuration={300}
            closeOnDragDown={true}
            closeOnPressMask={false}
         >
            <BottomSheetContent handleClose={closeBottomSheet} />
         </RBSheet>
      </Fragment>
   )
}

const styles = StyleSheet.create({
   albumContainer: {
      marginBottom: theme.spacing.l
   },
   openSheetButton: {
      width: 32,
      height: 32,
      backgroundColor: theme.colors.primary,
      marginRight: theme.spacing.m,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center"
   }
})

export default Albums
