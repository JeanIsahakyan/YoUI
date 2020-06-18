import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../Theme/Theme';
import Loader from '../Loader/Loader';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
    secondary?: boolean;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({loading = false, secondary, title, onPress, disabled}: ButtonProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.containerBase,
        !secondary && {backgroundColor: theme.buttonPrimaryBackground},
        secondary && {backgroundColor: theme.buttonSecondaryBackground},
        disabled && styles.disabled,
      ]}
    >
      <View style={styles.containerInner}>
        {loading && (
          <Loader secondary={!secondary}/>
        )}
        {!loading && (
          <Text style={[
            styles.textBase,
            !secondary && {color: theme.buttonPrimaryForeground},
            secondary && {color: theme.buttonSecondaryForeground},
          ]}>
            {Platform.OS === 'android' ? title.toUpperCase() : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  containerBase: {
    borderRadius: 12,
    padding: 15,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  containerInner: {
    height: 21,
  },
  textBase: {
    fontSize: 17,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.3,
  },
});


export default Button;
