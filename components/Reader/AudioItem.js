import React from 'react';
import {View, Text} from 'react-native';
import Play from '../../assets/svg/play';
import Pause from '../../assets/svg/Pause';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {ChangeMedia} from '../../store/actions';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const AudioItem = ({surahData, index, uid, name, rewaya}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const mediaPlaying = useSelector(state => state.mediaPlaying);
  const playbackState = usePlaybackState();
  // const media = useSelector(state => state.media);

  let middleButtonText = <Play />;

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = <Pause />;
  }

  return (
    <View
      style={{
        flexDirection: 'row-reverse',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 2,
      }}>
      <TouchableOpacity
        onPress={() => dispatch(ChangeMedia(index))}
        style={{
          borderRadius: 50,
          borderWidth: 1,
          borderColor: colors.primary,
        }}>
        {mediaPlaying === index ? middleButtonText : <Play />}
      </TouchableOpacity>
      <View style={{marginHorizontal: 10}}>
        <Text
          style={{fontFamily: 'Tajawal-Medium', color: '#333', fontSize: 16}}>
          {surahData.name}
        </Text>
      </View>
    </View>
  );
};

export default AudioItem;
