const BACKEND_URL = 'http://192.168.100.28:3000';
const AppLists = ['service', 'category'];
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const beResourceMapping = {
    'service': '/service',
    'category': '/category'
};

const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export { AppLists, BACKEND_URL, beResourceMapping, Colors };

