import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import {useTheme} from '../Theme/Theme';

interface ListItemProps {
    secondary?: string | ReactNode;
    primary?: string;
    left?: any;
    right?: any;
    rightBottom?: any;
    multiline?: boolean;
    primaryStyle?: TextStyle,
    inactive?: boolean | null,
    secondaryStyle?: TextStyle,
    noSpacingVertical?: boolean,
    noSpacingHorizontal?: boolean,
    disableInfoFlex?: boolean,
}

const ListItem: React.FC<ListItemProps> = ({
  right = null, left = null, primary = '', secondary = '', disableInfoFlex = false, noSpacingHorizontal = false, noSpacingVertical = false,
  multiline = false, inactive = false, primaryStyle = {}, secondaryStyle = {},
}: ListItemProps) => {
  const numberOfLines = multiline ? undefined : 1;
  const ellipsizeMode = multiline ? undefined : 'tail';
  const theme = useTheme();
  return (
    <View
      style={[styles.container, !noSpacingHorizontal && styles.containerSpacingHorizontal, !noSpacingVertical && styles.containerSpacingVertical]}>
      <View key={`${primary}${secondary}`} style={styles.containerItem}>
        {left && (
          <View style={styles.containerLeft}>
            <View style={styles.containerLeftInner}>
              {left}
            </View>
          </View>
        )}
        <View style={!disableInfoFlex && styles.containerInfo}>
          {primary.length > 0 && (
            <Text
              numberOfLines={numberOfLines}
              ellipsizeMode={ellipsizeMode}
              style={[primaryStyle, styles.primaryText, !inactive && {color: theme.textPrimaryColor}, inactive && {color: theme.textSecondaryColor}]}
            >
              {primary}
            </Text>
          )}
          {(secondary || typeof secondary !== 'object' && secondary.toString().length > 0) && (
            <View style={styles.secondaryContainer}>
              <Text
                numberOfLines={numberOfLines}
                ellipsizeMode={ellipsizeMode}
                style={[secondaryStyle, styles.secondaryText, {color: theme.textSecondaryColor}]}
              >
                {secondary}
              </Text>
            </View>
          )}
        </View>
        {right && (
          <View style={styles.containerRight}>
            <View style={styles.containerRightInner}>
              {right}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  containerSpacingVertical: {
    marginVertical: 8,
  },
  containerSpacingHorizontal: {
    paddingHorizontal: 16,
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
  },
  secondaryContainer: {
    marginTop: 2,
  },
  primaryText: {
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    fontSize: 13,
    fontWeight: '400',
  },
  containerLeft: {
    marginRight: 10,
  },
  containerRight: {
    marginLeft: 10,
  },
  containerLeftInner: {
    alignItems: 'flex-start',
  },
  containerRightInner: {
    alignItems: 'flex-end',
  },
});

export default ListItem;
