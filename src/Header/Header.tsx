import React, {ReactNode, useCallback, useRef, useState} from 'react';
import {Animated, Platform, StyleSheet, Text, TextProps, View, ViewProps} from 'react-native';
import renderNode from '../Helpers/renderNode';
import SearchBar, {SearchBarProps} from '../SearchBar/SearchBar';
import Box from '../Box/Box';
import {useTheme} from '../Theme/Theme';

interface HeaderProps extends ViewProps {
    title?: ReactNode;
    left?: ReactNode;
    right?: ReactNode;
    searchBar?: SearchBarProps;
}

const TRANSLATE_TOP = -56;

const Header: React.FC<HeaderProps> = ({searchBar, title, left = null, right = null, ...other}: HeaderProps) => {
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const translateY = useRef(new Animated.Value(searchFocused ? TRANSLATE_TOP : 0)).current;
  const height = useRef(new Animated.Value(searchFocused ? 0 : 56)).current;
  React.useEffect(() => {
    Animated.timing(translateY, {
      duration: 100,
      toValue: searchFocused ? TRANSLATE_TOP : 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(height, {
      duration: 200,
      toValue: searchFocused ? 0 : 56,
    }).start();
  }, [searchFocused]);
  const onFocus = useCallback(() => setSearchFocused(true), []);
  const onBlur = useCallback(() => setSearchFocused(false), []);
  return (
    <View>
      <Animated.View
        style={{
          position: 'relative',
          transform: [
            {translateY},
          ],
        }}
      >
        <Animated.View style={{height}}/>
        <Animated.View {...other} style={[styles.container, styles.containerHeight, {
          transform: [
            {translateY},
          ],
        }]}>
          <View style={styles.headerLeftContainer}>
            {renderNode(HeaderText, left)}
          </View>

          <View style={styles.headerTitleContainer}>
            {renderNode(HeaderText, title)}
          </View>

          <View style={styles.headerRightContainer}>
            {renderNode(HeaderText, right)}
          </View>
        </Animated.View>
      </Animated.View>
      {searchBar && (
        <Box>
          <SearchBar
            {...searchBar}
            focused={searchFocused}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </Box>
      )}
    </View>
  );
};

const HeaderText: React.FC<TextProps> = React.memo(({style, ...other}: TextProps) => {
  const theme = useTheme();
  return (
    <Text {...other} style={[style, styles.headerText, {color: theme.textPrimaryColor}]}/>
  );
});

const styles = StyleSheet.create({
  containerHeight: {
    height: 56,
  },
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'stretch',
  },
  headerLeftContainer: {
    alignItems: 'flex-start',
  },
  headerRightContainer: {
    alignItems: 'flex-end',
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: Platform.select({
      default: 'center',
      android: 'left',
    }),
  },
});

export default Header;
