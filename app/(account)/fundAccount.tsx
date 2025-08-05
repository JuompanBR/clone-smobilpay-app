import { RegisteredNumbers, ThemedScrollView, ThemedText, ThemedTextInput } from '@/components';
import { useStringCallback } from '@/hooks';
import { useAppStore, usePersistentStore } from '@/stores';
import { Button } from '@react-native-material/core';
import { useState } from 'react';
import { useColorScheme, View } from 'react-native';

export default function FundAccount() {
    const appStore = useAppStore();
    const persistentStore = usePersistentStore();
    const colorScheme = useColorScheme();

    const [amount, setAmount] = useState<string>('0');
    const [parentSelectedNumber, setParentSelectedNumber] = useState<string>();
    const [childSelection, numberCallback] = useStringCallback(setParentSelectedNumber)

    const submitFundAccount = (e: React.FormEvent<HTMLFormElement>) => {
        appStore.setIsLoading(true);
    };

    // If the user is already authenticated, redirect them to the home page
    // if (isAuthenticated) {
    //   return <Redirect href="/"/>
    // }

    return (
        <ThemedScrollView style={{ flex: 1, paddingHorizontal: 24, paddingTop: 40 }}>
            <View style={{ justifyContent: 'space-between' }}>
                <View style={{ marginBottom: 20, gap: 15 }}>
                    <ThemedText style={{ opacity: 0.6 }}>Enter amount</ThemedText>
                    <ThemedTextInput textContentType='telephoneNumber' editable={!appStore.isLoading} keyboardType='number-pad' variant="filled" value={amount} onChangeText={setAmount}/>
                </View>

                <View style={{ marginBottom: 40, gap: 15 }}>
                    <ThemedText style={{ opacity: 0.6 }}>Select number</ThemedText>

                    <RegisteredNumbers values={persistentStore.registeredNumbers} disabled={appStore.isLoading} onChoiceMade={numberCallback} />
                </View>

                <Button
                    contentContainerStyle={{ height: 42 }}
                    disabled={appStore.isLoading || typeof parentSelectedNumber == 'undefined' || parseInt(amount) < 100}
                    title="Continue"
                    variant="contained"
                    color="#0b9aa9ff"
                    titleStyle={{ color: "white", fontSize: 16 }}
                />
            </View>
        </ThemedScrollView>

    );
}
