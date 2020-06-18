import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {getDefaultColor, getGradientColor} from './Colors';
import BasicAvatarView, {DEFAULT_AVATAR_SIZE, DEFAULT_VARIANT, Variant} from './BasicAvatarView';
import {useTheme} from '..';

interface TextAvatarProps {
    size?: number,
    variant?: Variant,
    children: any,
    id?: number | string,
    disableGradient?: boolean
    disableColors?: boolean
}

const ColorAvatar: React.FC<TextAvatarProps> = ({disableColors = false, disableGradient = false, variant = DEFAULT_VARIANT, size = DEFAULT_AVATAR_SIZE, id = 0, children}: TextAvatarProps) => {
  const backgroundStyles = [styles.backgroundContainer, {
    width: size,
    height: size,
  }];
  const theme = useTheme();
  return (
    <BasicAvatarView size={size} variant={variant}>
      {!disableColors && (
        <Fragment>
          {!disableGradient && (
            <LinearGradient
              colors={getGradientColor(id)}
              style={backgroundStyles}
            />
          )}
          {disableGradient && (
            <View
              style={[...backgroundStyles, {
                backgroundColor: getDefaultColor(id),
              }]}
            />
          )}
        </Fragment>
      )}
      {disableColors && (
        <View
          style={[...backgroundStyles, {
            backgroundColor: theme.buttonSecondaryBackground,
          }]}
        />
      )}
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </BasicAvatarView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
  },
  childrenContainer: {
    zIndex: 1,
    position: 'relative',
  },
});

export default ColorAvatar;
