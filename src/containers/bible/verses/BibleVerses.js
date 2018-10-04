import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, WebView, StyleSheet } from 'react-native'

import MiniPlayer from 'src/components/miniplayer'
import { Endpoints } from 'src/constants'

class BibleVerses extends PureComponent {

  render() {
    const { version, testament, book, chapter } = this.props.bible
    const uri = process.env['BASE_URL'] + Endpoints.audiobibles + '/books/' + book + '?volume=' + version.id + '&testament=' + testament + '&text=true&chapter=' + chapter
    const headers = {Authorization: 'Basic ' + process.env['BASIC_TOKEN']}

    return (
      <View style={styles.container}>
        <WebView source={{uri: uri, headers: headers}} />
        <MiniPlayer navigation={this.props.navigation} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

BibleVerses.propTypes = {
  navigation: PropTypes.object.isRequired,
  bible: PropTypes.object
}

export default BibleVerses
