import * as React from 'react';
import {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTheme} from '../Theme/Theme';
import TimeoutInput from './TimeoutInput';
import BasicInput, {BasicInputProps} from './BasicInput';
import {Ionicons} from '@expo/vector-icons';

export interface SearchInputProps extends BasicInputProps {
    containerStyle?: ViewStyle;
    value?: any;
    onChangeText: (value: any) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({onChangeText, value, ...other}: SearchInputProps) => {
  const theme = useTheme();
  const [localValue, setLocalValue] = useState(value);
  const onClear = useCallback(() => onChangeText(''), []);
  return (
    <TimeoutInput
      {...other}
      Component={BasicInput}
      value={value}
      onChangeTextLocal={setLocalValue}
      onChangeText={onChangeText}
      left={(
        <View style={styles.leftContainer}>
          <Ionicons
            name="ios-search"
            size={20}
            color={theme.textSecondaryColor}
          />
        </View>
      )}
      right={
        <React.Fragment>
          {localValue && (
            <TouchableOpacity style={styles.rightContainer} onPress={onClear}>
              <Ionicons
                name="ios-close-circle"
                size={20}
                color={theme.textSecondaryColor}
              />
            </TouchableOpacity>
          ) || undefined}
        </React.Fragment>
      }
    />
  );
};


const styles = StyleSheet.create({
  leftContainer: {
    marginRight: 5,
  },
  rightContainer: {
    marginLeft: 5,
  },
});


export default SearchInput;
