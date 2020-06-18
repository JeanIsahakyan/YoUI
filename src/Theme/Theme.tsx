import React, {createContext, useEffect} from 'react';
import {AppearanceDark, AppearanceLight, AppearanceType} from './Appearance';
import {useColorScheme} from 'react-native-appearance';

export type ThemeType = 'system' | 'light' | 'dark';

interface ThemeContextType {
    appearance: AppearanceType;
}

const ThemeContext = createContext<ThemeContextType>({
  appearance: AppearanceLight,
});

const getAppearance = (theme?: ThemeType | 'no-preference'): AppearanceType => theme === 'dark' ? AppearanceDark : AppearanceLight;

interface ThemeProviderProps {
    children: any,
    theme: ThemeType,
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children, theme = 'light'}: ThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const [appearance, setAppearance] = React.useState<AppearanceType>(getAppearance(colorScheme));

  useEffect(() => {
    setAppearance(getAppearance(colorScheme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{appearance}}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = (): AppearanceType => {
  return React.useContext<ThemeContextType>(ThemeContext).appearance;
};
