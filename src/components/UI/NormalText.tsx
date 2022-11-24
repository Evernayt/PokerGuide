import {FC, ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/theme';

interface NormalTextProps {
  children: ReactNode;
}

const NormalText: FC<NormalTextProps> = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: COLORS.primaryText,
    lineHeight: 26,
  },
});

export default NormalText;
