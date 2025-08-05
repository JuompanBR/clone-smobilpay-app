import { useThemeColor } from '@/hooks/useThemeColor';
import { ScrollView, type ViewProps } from 'react-native';

export type ThemedScrollViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedScrollView: React.FC<ThemedScrollViewProps> = ({ style, lightColor, darkColor, ...otherProps }) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <ScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default ThemedScrollView;
