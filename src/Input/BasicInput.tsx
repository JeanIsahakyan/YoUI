import * as React from 'react';
import {ReactNode} from 'react';
import {StyleSheet, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import {useTheme} from '../Theme/Theme';

export interface BasicInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
    left?: ReactNode,
    right?: ReactNode,
}

const BasicInput: React.FC<BasicInputProps> = ({style, containerStyle, value, left = null, right = null, ...other}: BasicInputProps) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, containerStyle, {backgroundColor: theme.buttonSecondaryBackground}]}>
      <View style={styles.inputContainer}>
        {left && (
          <View style={styles.inputLRContainer}>
            {left}
          </View>
        )}
        <TextInput
          {...other}
          underlineColorAndroid="transparent"
          value={value}
          placeholderTextColor={theme.textSecondaryColor}
          selectionColor={theme.inputSelectionBackground}
          style={[style, styles.input, {color: theme.textPrimaryColor}]}
        />
        {right && (
          <View style={styles.inputLRContainer}>
            {right}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 40,
    flexDirection: 'column',
  },
  inputContainer: {
    marginHorizontal: 10,
    flexGrow: 1,
    zIndex: 1,
    flexDirection: 'row',
  },
  inputLRContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 17,
    lineHeight: 19,
    fontWeight: '400',
    flex: 1,
  },
});

export default BasicInput;
