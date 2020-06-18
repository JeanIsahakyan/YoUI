import React from 'react';
import {Image} from 'react-native';
import BasicAvatarView, {DEFAULT_AVATAR_SIZE, getBasicAvatarStyles, Variant} from './BasicAvatarView';

export interface AvatarProps {
    variant?: Variant,
    size?: number,
    src?: string,
}

const ImageAvatar: React.FC<AvatarProps> = ({src, variant = 'circle', size = DEFAULT_AVATAR_SIZE}: AvatarProps) => {
  const styles = getBasicAvatarStyles(variant, size);
  return (
    <BasicAvatarView size={size} variant={variant}>
      <Image style={styles} source={{uri: src}}/>
    </BasicAvatarView>
  );
};

export default ImageAvatar;
