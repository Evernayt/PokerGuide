import {useState, useRef} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  BoldText,
  Button,
  NormalText,
  Part,
  Tip,
  Title,
  UnorderedList,
} from '../components';
import {PARTS} from '../constants/parts';
import {COLORS, SIZES} from '../constants/theme';

const imageHeight = (SIZES.width / 512) * 384;
const buttonWidth = SIZES.width / 2 - 12;

const Guide = () => {
  const [partIndex, setPartIndex] = useState<number>(0);

  const part = PARTS[partIndex];

  const scrollRef = useRef<ScrollView>(null);

  const next = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
    setPartIndex(prevState => prevState + 1);
  };

  const previous = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
    setPartIndex(prevState => prevState - 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollRef}>
        <View style={styles.space}>
          <Part part={part.num} />
          <Title>{part.title}</Title>
        </View>
        {part.steps.map(step => {
          const firstLine = step.text.split('.')[0] + '.';
          return (
            <>
              <Image style={styles.image} source={step.image} />
              <View style={styles.space}>
                <NormalText>
                  <BoldText>{firstLine}</BoldText>{' '}
                  {step.text.replace(firstLine, '')}
                </NormalText>
                <UnorderedList texts={step.lists} />
                {step.tip && <Tip>{step.tip}</Tip>}
              </View>
            </>
          );
        })}
      </ScrollView>
      <View style={styles.controls}>
        <Button
          containerStyle={{width: buttonWidth, marginRight: 8}}
          disabled={partIndex === 0}
          text="Previous part"
          onPress={previous}
        />
        <Button
          containerStyle={{width: buttonWidth}}
          disabled={partIndex === PARTS.length - 1}
          text="Next part"
          onPress={next}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  space: {
    padding: 16,
  },
  image: {
    resizeMode: 'contain',
    height: imageHeight,
    width: '100%',
  },
  controls: {
    margin: 8,
    flexDirection: 'row',
  },
});

export default Guide;
