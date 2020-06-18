import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export type Variant = 'square' | 'rounded' | 'circle';

interface BasicAvatarViewProps extends ViewProps {
    variant?: Variant,
    size?: number,
    children?: any,
}

export const DEFAULT_AVATAR_SIZE = 32;
export const ROUNDED_RADIUS = 9;
export const FONT_SIZE_DIVISION = 2.3;
export const MAX_TEXT_LENGTH = 1;
export const DEFAULT_VARIANT = 'circle';

type BasicAvatarStyles = {
  width: number;
  height: number;
  borderRadius: number;
}

export const getBasicAvatarStyles = (variant: Variant, size: number): BasicAvatarStyles => {
  const styles = {
    width: size,
    height: size,
    borderRadius: size,
  };
  if (variant === 'rounded') {
    styles.borderRadius = ROUNDED_RADIUS;
  } else if (variant === 'square') {
    styles.borderRadius = 0;
  }
  return styles;
};

const BasicAvatarView: React.FC<BasicAvatarViewProps> = ({children, variant = 'circle', size = DEFAULT_AVATAR_SIZE}: BasicAvatarViewProps) => {
  const sizeStyles = getBasicAvatarStyles(variant, size);
  return (
    <View style={[styles.container, sizeStyles]}>
      {children}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: DEFAULT_AVATAR_SIZE,
    height: DEFAULT_AVATAR_SIZE,
    borderRadius: DEFAULT_AVATAR_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default BasicAvatarView;
