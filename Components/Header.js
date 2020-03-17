import React from 'react'
import {StyleSheet,Text,View} from "react-native"
import { createPortal } from 'react-dom'
const Header = () => {
  return (
    <View styles={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
  },
  title: {
    textAlign: "center",
    color:"#fff",
    fontSize: 20,
    padding:20,
    fontWeight: "bold",
    backgroundColor: "coral"
 }
})