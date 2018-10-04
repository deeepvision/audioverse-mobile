import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, StyleSheet } from 'react-native'

import ListItem from 'src/components/list/ListItem'
import MiniPlayer from 'src/components/miniplayer'

class Downloads extends PureComponent {

  renderItem({ item }) {
    return (
      <ListItem
        avatar={{source: item.artwork}}
        title={item.title}
        subtitle={`${item.artist} \u00B7 ${item.bitRate} kbps`}
        onPress={() => this.props.resetAndPlayTrack([item])}
      />
    )
  }

  render() {
    const { items } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.fileName}
        />
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

Downloads.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array,
  resetAndPlayTrack: PropTypes.func.isRequired
}

export default Downloads
