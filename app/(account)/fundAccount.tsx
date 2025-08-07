import { RegisteredNumbers, ThemedScrollView, ThemedText, ThemedTextInput } from '@/components';
import { Colors } from '@/constants';
import { useStringCallback } from '@/hooks';
import { useAppStore, usePersistentStore } from '@/stores';
import { validateAmount } from '@/utils';
import { ActivityIndicator, Button } from '@react-native-material/core';
import { useState } from 'react';
import { View } from 'react-native';

export default function FundAccount() {
    const appStore = useAppStore();
    const persistentStore = usePersistentStore();

    const [amount, setAmount] = useState<string>('0');
    const [amountError, setAmountError] = useState<boolean>(false);

    const [parentSelectedNumber, setParentSelectedNumber] = useState<string>();
    const [childSelection, numberCallback] = useStringCallback(setParentSelectedNumber)

    const submitFundAccount = () => {
        appStore.setIsLoading(true);
        
    };

    const validateAndSetAmount = (data: string) => {
        setAmount(data);
        const isValidAmount = validateAmount(data);

        if (isValidAmount === false) {
            setAmountError(true);
            return;
        }
        setAmountError(false);
    };

    // If the user is already authenticated, redirect them to the home page
    // if (isAuthenticated) {
    //   return <Redirect href="/"/>
    // }

    return (
        <ThemedScrollView style={{ flex: 1, paddingHorizontal: 24, paddingTop: 40 }}>
            <View style={{ justifyContent: 'space-between' }}>
                <View style={{ marginBottom: 28, gap: 10 }}>
                    <ThemedText style={{ opacity: 0.6 }}>Enter amount</ThemedText>
                    <ThemedTextInput textContentType='telephoneNumber' editable={!appStore.isLoading} keyboardType='number-pad' variant="filled" value={amount} onChangeText={validateAndSetAmount} />
                    {
                        amountError && (
                            <ThemedText style={{ fontWeight: '500', fontSize: 12, opacity: 0.6, color: Colors.dark.errorColor }}>Amount must me more than 100 & multiple of 50</ThemedText>
                        )
                    }
                </View>

                <View style={{ marginBottom: 40, gap: 10 }}>
                    <ThemedText style={{ opacity: 0.6 }}>Select number</ThemedText>
                    <RegisteredNumbers values={persistentStore.registeredNumbers} disabled={appStore.isLoading} onChoiceMade={numberCallback} />
                    {appStore.isLoading && <ActivityIndicator
                        size="large"
                        color={Colors.mainAppColor}
                        style={{ alignSelf: "center", marginBottom: 10 }} />}
                </View>

                <Button
                    contentContainerStyle={{ height: 42 }}
                    disabled={appStore.isLoading || typeof parentSelectedNumber == 'undefined' || validateAmount(amount) == false}
                    title="Continue"
                    variant="contained"
                    color="#0b9aa9ff"
                    titleStyle={{ color: "white", fontSize: 16 }}
                    onPress={() => submitFundAccount()}
                />
            </View>
        </ThemedScrollView>

    );
}
