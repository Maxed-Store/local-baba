import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import NotificationCard from '../components/NotificationCard'
const Notification = () => {
  return (
    <View style={styles.container}>
      <Header title={'Notification'} />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </View>
  )
}

export default Notification
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
})