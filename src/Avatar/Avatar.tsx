import React from 'react';
import {DEFAULT_AVATAR_SIZE, DEFAULT_VARIANT} from './BasicAvatarView';
import ImageAvatar from './ImageAvatar';
import ColorTextAvatar from './ColorAvatarText';
import ColorAvatar from './ColorAvatar';
import {AvatarProps} from './AvatarProps';


const Avatar: React.FC<AvatarProps> = ({disableGradient = false, disableColors = false, src = '', children = null, id = 0, variant = DEFAULT_VARIANT, size = DEFAULT_AVATAR_SIZE}: AvatarProps) => {
  if (src) {
    return (
      <ImageAvatar size={size} variant={variant} src={src}/>
    );
  }
  if (!children) {
    throw new Error('Cant render empty avatar');
  }
  const isText = typeof children === 'string' || typeof children === 'number';
  return (
    <ColorAvatar
      id={id}
      disableGradient={disableGradient}
      disableColors={disableColors}
      size={size}
      variant={variant}
    >
      {isText && (
        <ColorTextAvatar
          disableColors={disableColors}
          size={size}
        >
          {children.toString()}
        </ColorTextAvatar>
      )}
      {!isText && children}
    </ColorAvatar>
  );
};

export default Avatar;
