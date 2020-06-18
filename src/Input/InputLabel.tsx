import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, LayoutChangeEvent, StyleSheet, Text} from 'react-native';
import {useTheme} from '../Theme/Theme';

interface LabelProps {
    label?: string;
    focused?: boolean;
    hasValue?: boolean;
}

const DURATION_PLACEHOLDER_ANIMATION = 100;
const PLACEHOLDER_SCALE_RATIO = 0.81;
const TRANSLATE_TOP = -10;

const InputLabel: React.FC<LabelProps> = React.memo(({label, focused, hasValue}: LabelProps) => {
  const [translateXCalculated, setTranslateXCalculated] = useState(0);
  const isActive = focused || hasValue;
  const scale = useRef(new Animated.Value(isActive ? PLACEHOLDER_SCALE_RATIO : 1)).current;
  const translateY = useRef(new Animated.Value(isActive ? TRANSLATE_TOP : 0)).current;
  const translateX = useRef(new Animated.Value(translateXCalculated)).current;

  useEffect(() => {
    Animated.timing(scale, {
      duration: DURATION_PLACEHOLDER_ANIMATION,
      toValue: isActive ? PLACEHOLDER_SCALE_RATIO : 1,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      duration: DURATION_PLACEHOLDER_ANIMATION,
      toValue: isActive ? TRANSLATE_TOP : 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateX, {
      duration: DURATION_PLACEHOLDER_ANIMATION,
      toValue: isActive ? translateXCalculated : 0,
      useNativeDriver: true,
    }).start();
  }, [focused, hasValue, translateXCalculated]);

  const handlePlaceholderLayout = useCallback((e: LayoutChangeEvent) => {
    const layoutWidth = e.nativeEvent.layout.width;
    setTranslateXCalculated((Math.round(layoutWidth * PLACEHOLDER_SCALE_RATIO) / 2) - (layoutWidth / 2));
  }, [label]);

  const theme = useTheme();

  return (
    <Animated.View
      onLayout={handlePlaceholderLayout}
      style={[
        styles.labelWrap,
        {
          transform: [
            {translateY},
            {translateX},
            {scale},
          ],
        },
      ]}
    >
      <Text
        onLayout={handlePlaceholderLayout}
        numberOfLines={1}
        style={[
          styles.labelBase,
          !focused && {color: theme.textSecondaryColor},
          focused && {color: theme.textPrimaryColor},
        ]}>
        {label}
      </Text>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  labelBase: {
    marginLeft: 21,
    fontSize: 16,
    lineHeight: 55,
  },
  labelWrap: {
    position: 'absolute',
    top: 0,
    zIndex: 0,
    left: 0,
  },
});


export default InputLabel;
