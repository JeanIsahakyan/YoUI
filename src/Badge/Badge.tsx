import React from 'react';
import {StyleSheet, Text, TextProps, View, ViewProps} from 'react-native';
import {useTheme} from '../Theme/Theme';

interface BadgeProps extends ViewProps {
    size?: number,
    children?: string | number,
    counterProps?: TextProps,
    secondary?: boolean,
}

const Badge: React.FC<BadgeProps> = ({size = 20, secondary, children, style, counterProps, ...other}: BadgeProps) => {
  const theme = useTheme();
  const containerStyles = {
    height: size,
    minWidth: size,
    borderRadius: size / 2,
  };
  const textStyles = {
    fontSize: size * 0.6,
    lineHeight: size,
  };
  return (
    <View
      {...other}
      style={[
        containerStyles,
        styles.container,
        style,
        !secondary && {backgroundColor: theme.buttonPrimaryBackground},
        secondary && {backgroundColor: theme.buttonSecondaryBackground},
      ]}
    >
      <Text
        {...counterProps}
        style={[
          textStyles,
          styles.badgeText,
          !secondary && {color: theme.buttonPrimaryForeground},
          secondary && {color: theme.textSecondaryColor},
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    paddingHorizontal: 5,
    fontWeight: '800',
  },
});

export default Badge;
