import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const Box: React.FC<ViewProps> = ({style, ...other}: ViewProps) => {
  return (
    <View
      {...other}
      style={[style, styles.container]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Box;
