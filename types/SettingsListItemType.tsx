import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

interface SettingsListItemType {
    leadingIcon: ReactNode,
    title: string,
    description?: string,
    onClick?: (event: GestureResponderEvent) => void
};

export default SettingsListItemType;