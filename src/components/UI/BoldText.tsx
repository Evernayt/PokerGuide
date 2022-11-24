import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/theme';

interface BoldTextProps {
  children: string;
}

const BoldText: FC<BoldTextProps> = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: COLORS.primaryText,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});

export default BoldText;
