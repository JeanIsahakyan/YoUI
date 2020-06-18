import {ThemeType} from './Theme';
import {StatusBarStyle} from 'react-native';

export type AppearanceType = {
    theme: ThemeType,
    statusbarBarStyle: StatusBarStyle,

    buttonPrimaryBackground: string,
    buttonPrimaryForeground: string,

    buttonSecondaryBackground: string,
    buttonSecondaryForeground: string,

    inputSelectionBackground: string,

    loaderPrimaryForeground: string,
    loaderSecondaryForeground: string,

    textPrimaryColor: string,
    textSecondaryColor: string,
    textGreenColor: string,
    textRedColor: string,

    mainBackgroundColor: string,
    mainModalBackgroundColor: string,
}

export const APPEARANCE_LIGHT = 'light';
export const APPEARANCE_DARK = 'dark';

export const AppearanceLight: AppearanceType = {
  theme: APPEARANCE_LIGHT,
  statusbarBarStyle: 'dark-content',

  buttonPrimaryBackground: '#000',
  buttonPrimaryForeground: '#fff',

  buttonSecondaryBackground: '#f2f3f5',
  buttonSecondaryForeground: '#000',

  inputSelectionBackground: 'rgba(0,0,0,0.45)',

  loaderPrimaryForeground: '#000',
  loaderSecondaryForeground: '#f2f3f5',

  textPrimaryColor: '#000',
  textSecondaryColor: '#999',
  textGreenColor: '#58c322',
  textRedColor: '#e64646',

  mainBackgroundColor: '#fff',
  mainModalBackgroundColor: '#fff',
};


export const AppearanceDark: AppearanceType = {
  theme: APPEARANCE_DARK,
  statusbarBarStyle: 'light-content',

  buttonPrimaryBackground: '#ffffff',
  buttonPrimaryForeground: '#000000',

  buttonSecondaryBackground: '#5a5a5c',
  buttonSecondaryForeground: '#fff',

  inputSelectionBackground: 'rgba(0,0,0,0.45)',

  loaderPrimaryForeground: '#bbbbbb',
  loaderSecondaryForeground: '#929395',

  textPrimaryColor: '#fff',
  textSecondaryColor: '#aeaeae',
  textGreenColor: '#58c322',
  textRedColor: '#e64646',

  mainBackgroundColor: '#000',
  mainModalBackgroundColor: '#2f2f2f',
};
