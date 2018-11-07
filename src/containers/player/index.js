import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { playPause, skipToPrevious, skipToNext, replay, forward, download, setRate, addFavorite, removeFavorite, playVideo } from 'src/actions'
import { getCurrentTrack, getPlayerState, getRate, getLanguage, isFavorite } from 'src/reducers/selectors'

import Player from './Player'

const  mapStateToProps = state => ({
  state: getPlayerState(state),
  track: getCurrentTrack(state),
  rate: getRate(state),
  language: getLanguage(state),
  isFavorite: isFavorite(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    playPause,
    skipToPrevious,
    skipToNext,
    replay,
    forward,
    download,
    setRate,
    addFavorite,
    removeFavorite,
    playVideo
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)
