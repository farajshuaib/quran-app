import React from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { ChangeMedia } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

import { useTheme } from '@react-navigation/native';
import Play from '../assets/svg/play';
import Pause from '../assets/svg/Pause';

function ProgressBar() {
  const { colors } = useTheme();
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View
        style={{ flex: progress.position, backgroundColor: colors.primary }}
      />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: colors.secondry,
        }}
      />
    </View>
  );
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) { }
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) { }
}

const Player = () => {
  const dispatch = useDispatch();
  const playbackState = usePlaybackState();
  const mediaPlaying = useSelector(state => state.mediaPlaying);
  const media = useSelector(state => state.media);
  const { colors } = useTheme();

  React.useEffect(async () => {
    setup();
    start({
      id: media[+mediaPlaying].id,
      title: media[+mediaPlaying].name,
      url: media[+mediaPlaying].url,
      artist: media.artist,
    });
  }, [mediaPlaying]);

  const setup = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_PLAY_FROM_SEARCH
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  };
  const start = async ({ id, title, url, artist }) => {
    // Add a track to the queue
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id,
      url,
      title,
      artist,
      artwork: 'https://m3lumh.com/wp-content/uploads/2020/03/1-161.jpg',
    });

    // Start playing it
    await TrackPlayer.play();
  };

  let middleButtonText = <Play />;

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = <Pause />;
  }

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      start({
        id: media[+mediaPlaying].id,
        title: media[+mediaPlaying].name,
        url: media[+mediaPlaying].url,
        artist: media.artist,
      });
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  const playerEnded = () => {
    media.length === mediaPlaying + 1
      ? dispatch(ChangeMedia(0))
      : dispatch(ChangeMedia(mediaPlaying + 1));
  };



  const onPrevious = () => {
    if (mediaPlaying == 0) {
      return;
    }
    dispatch(ChangeMedia(mediaPlaying - 1));
    start({
      id: media[+mediaPlaying].id,
      title: media[+mediaPlaying].name,
      url: media[+mediaPlaying].url,
      artist: media.artist,
    });
  };

  const onNext = () => {
    if (media.length === mediaPlaying) {
      return;
    }
    dispatch(ChangeMedia(mediaPlaying + 1));
    start({
      id: media[+mediaPlaying].id,
      title: media[+mediaPlaying].name,
      url: media[+mediaPlaying].url,
      artist: media.artist,
    });
  };

  return (
    <>
      <View style={{ ...styles.card, backgroundColor: colors.secondry }}>
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.controlButtonContainer}
            onPress={onNext}>
            <Text style={{ ...styles.controlButtonText }}>{'>>'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.controlButtonContainer,
              padding: 2,
              borderRadius: 50,
              borderColor: colors.primary,
              borderWidth: 1,
            }}
            onPress={togglePlayback}>
            {middleButtonText}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controlButtonContainer}
            onPress={onPrevious}>
            <Text style={{ ...styles.controlButtonText }}> {'<<'} </Text>
          </TouchableOpacity>

        </View>
        {media[+mediaPlaying] && (
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>{media[+mediaPlaying].id}</Text>
            <Text style={styles.title}>:</Text>
            <Text style={styles.title}>{media[+mediaPlaying].name}</Text>
          </View>
        )}
      </View>
      <ProgressBar />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: 'black',
    backgroundColor: 'white',
  },

  progress: {
    height: 3,
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 16,
    marginHorizontal: 2,
    color: '#333',
  },
  artist: {
    fontFamily: 'Tajawal-Medium',
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  controlButtonContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  controlButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

export default Player;
