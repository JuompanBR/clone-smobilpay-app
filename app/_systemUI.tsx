import { Colors } from "@/constants";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SystemUISettings: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const colorScheme = useColorScheme();

    useEffect(() => {
        SystemUI.setBackgroundColorAsync(Colors[colorScheme ?? 'light'].background);
    }, [colorScheme]);
    
    return (
        <>
            <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right', 'bottom']}>
                <StatusBar barStyle={colorScheme === 'light' ? 'dark-content' : "light-content"} backgroundColor={Colors[colorScheme!].background} translucent />
                {children}
            </SafeAreaView>
        </>
    );
};

export default SystemUISettings;