import React from 'react';
import {ActivityIndicatorProps, StyleSheet, View, ViewProps} from 'react-native';
import Loader from './Loader';

interface ScreenLoaderProps extends ViewProps {
    loaderProps?: ActivityIndicatorProps,
}

const ScreenLoader: React.FC<ScreenLoaderProps> = React.memo(({loaderProps, style, ...other}: ScreenLoaderProps) => {
  return (
    <View {...other} style={[style, styles.container]}>
      <Loader{...loaderProps} size="large"/>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenLoader;
