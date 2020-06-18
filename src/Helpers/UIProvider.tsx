import React from 'react';
import {ThemeProvider, ThemeType} from '../Theme/Theme';
import RootView from '../View/RootView';

interface UIProviderProps {
    children?: any;
    theme?: ThemeType,
}

const UIProvider: React.FC<UIProviderProps> = ({children, theme = 'light'}: UIProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <RootView>
        {children}
      </RootView>
    </ThemeProvider>
  );
};

export default UIProvider;

