import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/theme';

interface PartProps {
  part: number;
}

const Part: FC<PartProps> = ({part}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Part</Text>
      <Text style={styles.num}>{part}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: COLORS.background,
  },
  num: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.background,
  },
});

export default Part;
