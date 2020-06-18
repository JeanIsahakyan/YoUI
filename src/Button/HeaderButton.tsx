import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../Theme/Theme';
import Loader from '../Loader/Loader';

interface ButtonProps {
    title: any;
    onPress?: () => void;
    noSpacing?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    loading?: boolean;
}

const HeaderButton: React.FC<ButtonProps> = ({loading = false, noSpacing = false, secondary, title, onPress, disabled}: ButtonProps) => {
  const isNode = typeof title === 'object';
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.containerBase,
        disabled && styles.disabled,
        !noSpacing && styles.containerBasePadding,
      ]}
    >
      <View style={!isNode && styles.containerInner}>
        {loading && (
          <View style={styles.containerInner}>
            <Loader secondary={secondary}/>
          </View>
        )}
        {!loading && (
          <React.Fragment>
            {isNode && title}
            {!isNode && (
              <Text style={[styles.textBase,
                !secondary && {color: theme.textPrimaryColor},
                secondary && {color: theme.textSecondaryColor}]}>
                {title}
              </Text>
            )}
          </React.Fragment>
        )}
      </View>
    </TouchableOpacity>

  );
};


const styles = StyleSheet.create({
  containerBasePadding: {
    paddingHorizontal: 15,
  },
  containerBase: {
    borderRadius: 12,
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


export default HeaderButton;
