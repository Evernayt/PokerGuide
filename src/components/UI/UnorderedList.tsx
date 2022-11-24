import {FC, ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS} from '../../constants/theme';
import NormalText from './NormalText';

interface ColumnProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface RowProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface UnorderedListProps {
  texts: string[];
}

const Column: FC<ColumnProps> = ({children, style}) => {
  return <View style={[styles.column, style]}>{children}</View>;
};

const Row: FC<RowProps> = ({children, style}) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

const UnorderedList: FC<UnorderedListProps> = ({texts}) => {
  return (
    <Column style={styles.container}>
      {texts.map((t, index) => (
        <Row key={index}>
          <Column style={styles.dotContainer}>
            <Text style={styles.dot}>{'\u2022'}</Text>
          </Column>
          <Column style={{marginRight: 16}}>
            <NormalText>{t}</NormalText>
          </Column>
        </Row>
      ))}
    </Column>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  dotContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 12,
    marginTop: 4,
    transform: [{scale: 2.5}],
  },
  dot: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    color: COLORS.secondaryText,
  },
});

export default UnorderedList;
