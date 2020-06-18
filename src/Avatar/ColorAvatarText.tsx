import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {DEFAULT_AVATAR_SIZE, FONT_SIZE_DIVISION, MAX_TEXT_LENGTH} from './BasicAvatarView';
import {useTheme} from '..';

export interface AvatarProps {
    children: string | number,
    size?: number,
    disableColors?: boolean,
}

const ColorTextAvatar: React.FC<AvatarProps> = ({disableColors = false, children, size = DEFAULT_AVATAR_SIZE}: AvatarProps) => {
  const sizeStyle = {fontSize: (size / FONT_SIZE_DIVISION)};
  const theme = useTheme();

  return (
    <Text
      style={[styles.container, sizeStyle, disableColors && {color: theme.textSecondaryColor}]}>
      {children.toString().slice(0, MAX_TEXT_LENGTH)}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    fontWeight: '700',
    color: '#fff',
  },
});

export default ColorTextAvatar;
