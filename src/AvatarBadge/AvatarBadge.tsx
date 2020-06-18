import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {DEFAULT_AVATAR_SIZE, useTheme} from '..';

interface BadgeProps extends ViewProps {
    size?: number;
    badge?: React.ReactNode
    children?: React.ReactNode;
    vertical?: 'bottom' | 'top';
    horizontal?: 'right' | 'left';
}

const AvatarBadge: React.FC<BadgeProps> = ({badge, size = DEFAULT_AVATAR_SIZE, children, style, vertical = 'top', horizontal = 'right', ...other}: BadgeProps) => {
  const theme = useTheme();
  return (
    <View
      {...other}
      style={[
        styles.container,
        style,
      ]}
    >
      <View style={[
        styles.badgeContainer, {borderColor: theme.mainBackgroundColor, backgroundColor: theme.mainBackgroundColor, borderRadius: size / 4},
        vertical === 'top' && styles.badgeContainerTop,
        vertical === 'bottom' && styles.badgeContainerBottom,
        horizontal === 'left' && styles.badgeContainerLeft,
        horizontal === 'left' && styles.badgeContainerLeft,
        horizontal === 'right' && styles.badgeContainerRight,
      ]}>{badge}</View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    borderWidth: 3,
    zIndex: 1,
  },
  badgeContainerTop: {
    top: 0,
  },
  badgeContainerBottom: {
    bottom: 0,
  },
  badgeContainerRight: {
    right: 0,
  },
  badgeContainerLeft: {
    left: 0,
  },
});

export default AvatarBadge;
