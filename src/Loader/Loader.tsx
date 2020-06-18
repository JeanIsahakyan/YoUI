import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {useTheme} from '../Theme/Theme';

interface LoaderProps extends ActivityIndicatorProps {
    secondary?: boolean,
}

const Loader: React.FC<LoaderProps> = React.memo(({secondary, ...other}: LoaderProps) => {
  const theme = useTheme();
  return (
    <ActivityIndicator
      {...other}
      color={(secondary ? theme.loaderSecondaryForeground : theme.loaderPrimaryForeground)}
    />
  );
});

export default Loader;
