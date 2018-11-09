import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet
} from 'react-native'

class Loading extends PureComponent {
  constructor(props) {
    super(props)
    this.navigate()
  }

  navigate = async () => {
    const { navigation, user } = this.props
    const hideLogin = await AsyncStorage.getItem('hideLogin')
    navigation.navigate(!user && !hideLogin ? 'Login' : 'AppDrawer')
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

Loading.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object
}

export default Loading