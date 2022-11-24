import {FC, ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/theme';

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    marginVertical: 18,
    textAlign: 'center',
  },
});

export default Title;
