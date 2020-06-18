import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {useTheme} from '../Theme/Theme';

export interface TextComponentProps extends TextProps {
    children: string | null | ReactNode;
    secondary?: boolean;
    center?: boolean;
    styles?: TextStyle;
}

const TextComponent: React.FC<TextComponentProps> = React.memo(({center, style, styles, secondary, children, ...other}: TextComponentProps) => {
  const theme = useTheme();
  return (
    <Text
      {...other}
      style={[
        defaultStyles.container, styles, style,
        !secondary && {color: theme.textPrimaryColor},
        secondary && {color: theme.textSecondaryColor},
        center && defaultStyles.containerCenter,
      ]}
      numberOfLines={10}
    >
      {children}
    </Text>
  );
});

const defaultStyles = StyleSheet.create({
  container: {

  },
  containerCenter: {
    textAlign: 'center',
  },
});

export default TextComponent;
