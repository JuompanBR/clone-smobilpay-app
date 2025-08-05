import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface SettingsListItemType {
    leadingIcon: (props: { color: string; style: StyleProp<ViewStyle>; }) => ReactNode,
    title: string,
    description: string
};

export default SettingsListItemType;