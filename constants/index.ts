const BACKEND_URL = 'http://192.168.100.28:3000';
const AppLists = ['service', 'category'];
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const beResourceMapping = {
  'service': '/service',
  'category': '/category',
  'user': '/user/'
};

const AVAILABLELOGINATTEMPTS = 5;
const BILLSEARCHOPTIONS = [
  {
    label: "Contract Number",
    value: "Contract Number"
  },
  {
    label: "Bill Number",
    value: "Bill Number"
  }
];

const Colors = {
  mainAppColor: "#0ba4b4",
  shimmerColors: ['#2e2e2e', '#3c3c3c', '#2e2e2e'],
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    errorColor: '#e50303ff',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    errorColor: '#ff2929',
  },
  neutral: {
    errorColor: 'red',
  }
};

const messages = {
  incorrectPassword: "Incorrect password! Please review your password and try again",
  errorOccured: "An unexpected error occured while getting this resource",
  resourceNotFound: "Resource not found"
};

const MISC = {
  avatarURL: "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
};

const HTTPCodes = {
  notFound: 404,
  ok: 200,
  created: 201,
  serverError: 500
};

export { AppLists, AVAILABLELOGINATTEMPTS, BACKEND_URL, beResourceMapping, BILLSEARCHOPTIONS, Colors, HTTPCodes, messages, MISC };