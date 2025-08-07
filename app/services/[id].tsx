import { ShimmerImage, ThemedScrollView, ThemedText, ThemedTextInput } from "@/components";
import { BILLSEARCHOPTIONS } from "@/constants";
import { useFindService } from "@/hooks";
import { formatTitle } from "@/utils";
import { Box, Button, Stack } from "@react-native-material/core";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";

const ServiceActivity = () => {
    const { id } = useLocalSearchParams();
    const [searchCriteria, setSearchCriteria] = useState<string>();

    const { data, isLoading, error } = useFindService({
        id: id as string,
        queryParams: {
            "serviceId": id,
        }
    });

    if (isLoading) return <ThemedText>Loading...</ThemedText>

    if (error) return <ThemedText>An Error Occurred...</ThemedText>

    // Use tanStack to load the necessary data here
    if (data) {
        return (
            <ThemedScrollView style={{ flex: 1, paddingTop: 20 }}>
                <Box w={"100%"} minH={"20%"}>
                    <Stack fill center>
                        <ShimmerImage width={100} height={95} imgURL={data.logoUrl} title={data.title} />
                    </Stack>
                </Box>
                <Stack fill>
                    <View style={{ width: "100%", padding: 24, paddingTop: 19, marginHorizontal: 'auto', gap: 13 }}>
                        <ThemedText style={{ fontSize: 15, opacity: 0.7 }}>Search for</ThemedText>
                        <Dropdown
                            options={BILLSEARCHOPTIONS}
                            value={searchCriteria}
                            onSelect={(e) => setSearchCriteria(e as string)}
                            mode='outlined'
                            hideMenuHeader={true}
                        />
                        <Box h={2}></Box>
                        <ThemedTextInput
                            label={searchCriteria}
                        />
                        <ThemedText style={{ marginVertical: 9, fontSize: 13.5, textAlign: 'justify' }}>Please enter the Contract No or Bill No found on your {formatTitle(data.title)}</ThemedText>
                        <Button contentContainerStyle={{ height: 42 }} disabled={isLoading} title="Continue" variant="contained" color="#0b9aa9ff" titleStyle={{ color: "white", fontSize: 16 }} />
                    </View>
                </Stack>
            </ThemedScrollView>
        );
    }
};

export default ServiceActivity;