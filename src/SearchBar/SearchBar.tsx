import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Keyboard, LayoutChangeEvent, Platform, StyleSheet, View} from 'react-native';
import SearchInput, {SearchInputProps} from '../Input/SearchInput';
import {HeaderButton} from '../';
import {Feather} from '@expo/vector-icons';

export interface SearchBarProps extends SearchInputProps {
    value?: any;
    onChangeText: (value: any) => void;
    focused?: boolean;
    onBlur?: () => void;
    placeholder?: string;
    cancelText?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({focused = false, cancelText = 'Cancel', placeholder = 'Search', onBlur, onFocus, onChangeText, ...other}: SearchBarProps) => {
  const [realWidth, setRealWidth] = useState(0);
  const width = useRef(new Animated.Value(focused ? 0 : -realWidth)).current;

  useEffect(() => {
    Animated.spring(width, {
      friction: focused ? 5 : 10,
      tension: 70,
      toValue: focused ? 0 : -realWidth,
    }).start();
  }, [focused, realWidth]);

  const handleCancelLayout = useCallback((e: LayoutChangeEvent) => {
    setRealWidth(e.nativeEvent.layout.width);
  }, []);

  const onCancel = useCallback(() => {
    onChangeText('');
    if (onBlur) {
      onBlur();
    }
    Keyboard.dismiss();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        {Platform.OS === 'android' && (
          <Animated.View style={[styles.cancelContainer, {marginRight: width}]}>
            <View onLayout={handleCancelLayout}>
              <View style={styles.leftCancel}>
                <HeaderButton noSpacing title={(
                  <Feather name="arrow-left" size={24} color="black"/>
                )} onPress={onCancel}/>
              </View>
            </View>
          </Animated.View>
        )}
        <View style={styles.input}>
          <SearchInput
            {...other}
            autoFocus={focused}
            onChangeText={onChangeText}
            onFocus={onFocus}
            placeholder={placeholder}
          />
        </View>
        {Platform.OS !== 'android' && (
          <Animated.View style={[styles.cancelContainer, {marginLeft: width}]}>
            <View onLayout={handleCancelLayout}>
              <View style={styles.rightCancel}>
                <HeaderButton noSpacing title={cancelText} onPress={onCancel}/>
              </View>
            </View>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
  containerInner: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  input: {
    flexGrow: 1,
    zIndex: 1,
  },
  leftCancel: {
    marginRight: 10,
  },
  rightCancel: {
    marginLeft: 10,
  },
  cancelContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
});


export default SearchBar;
