import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {useTheme} from '../Theme/Theme';

const List: React.FC<FlatListProps<any>> = ({style, ...other}: FlatListProps<any>) => {
  const theme = useTheme();
  return (
    <FlatList
      {...other}
      style={[style, {backgroundColor: theme.mainBackgroundColor}]}
    />
  );
};

export default List;
