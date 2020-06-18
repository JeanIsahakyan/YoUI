import * as React from 'react';
import {ReactNode, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import InputLabel from './InputLabel';
import {useTheme} from '../Theme/Theme';
import {SmallText} from '../Typography/Typography';

export interface InputProps extends TextInputProps {
    containerStyle?: ViewStyle;
    placeholder?: string,
    left?: ReactNode,
    right?: ReactNode,
    description?: string,
}

const Input: React.FC<InputProps> = ({style, containerStyle, placeholder, value, left = null, right = null, description, ...other}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const theme = useTheme();
  const hasValue = !!(value && value.length > 0);
  const isActive = hasValue || focused;
  return (
    <View>
      <View style={[styles.container, containerStyle, {backgroundColor: theme.buttonSecondaryBackground}]}>
        <InputLabel key={placeholder} hasValue={hasValue} focused={focused} label={placeholder}/>
        <View style={styles.inputContainer}>
          {left && isActive && (
            <View style={styles.inputLRContainer}>
              {left}
            </View>
          )}
          <TextInput
            key={placeholder}
            {...other}
            value={value}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            selectionColor={theme.inputSelectionBackground}
            style={[style, styles.input, {color: theme.textPrimaryColor}]}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {right && isActive && (
            <View style={styles.inputLRContainer}>
              {right}
            </View>
          )}
        </View>
      </View>
      {description && (
        <View style={styles.descriptionContainer}>
          <SmallText secondary>{description}</SmallText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: 55,
    display: 'flex',
    flexDirection: 'column',
  },
  descriptionContainer: {
    marginTop: 16,
    marginHorizontal: 5,
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 2,
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
    lineHeight: 34,
    fontWeight: '400',
    flex: 1,
  },
});

export default Input;
