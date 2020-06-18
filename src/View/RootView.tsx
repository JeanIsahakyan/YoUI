import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '../Theme/Theme';

interface RootViewProps {
    children?: any;
}

const RootView: React.FC<RootViewProps> = ({children}: RootViewProps) => {
  const theme = useTheme();
  return (
    <Fragment>
      <StatusBar
        backgroundColor={theme.mainBackgroundColor}
        barStyle={theme.statusbarBarStyle}
      />
      {children}
    </Fragment>
  );
};


export default RootView;

