import {FC, ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants/theme';
import BoldText from './BoldText';

interface TipProps {
  children: ReactNode;
}

const Tip: FC<TipProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <BoldText>Tip: </BoldText>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: COLORS.primaryText,
    fontSize: 18,
  },
});

export default Tip;
