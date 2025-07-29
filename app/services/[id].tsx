import { ShimmerImage, ThemedText, ThemedView } from "@/components";
import { useFindService } from "@/hooks";
import { formatTitle } from "@/utils";
import { Box, Button, Stack } from "@react-native-material/core";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";

const ServiceActivity = () => {
    const { id } = useLocalSearchParams();
    const OPTIONS = [
        {
            label: "Contract Number",
            value: "contract-number"
        },
        {
            label: "Bill Number",
            value: "bill-number"
        }
    ];
    const [searchCriteria, setSearchCriteria] = useState<string>("Bill Number");

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
            <ThemedView style={{ flex: 1, paddingVertical: 25 }}>
                <Box w={"100%"} minH={"20%"}>
                    <Stack fill center>
                        <ShimmerImage width={100} height={95} imgURL={data.logoUrl} title={data.title} />
                    </Stack>
                </Box>
                <Stack fill>
                    <View style={{ width: "100%", padding: 30, marginHorizontal: 'auto', gap: 20 }}>
                        <ThemedText>Search for:</ThemedText>
                        <Dropdown
                            options={OPTIONS}
                            value={searchCriteria}
                            onSelect={(e) => setSearchCriteria(e!)}
                        />
                        <TextInput
                            placeholder=""
                        />
                        <ThemedText>Please enter the Contract No or Bill No found on your {formatTitle(data.title)}</ThemedText>
                        <Button contentContainerStyle={{ height: 42 }} disabled={isLoading} title="Continue" variant="contained" color="#0b9aa9ff" titleStyle={{ color: "white", fontSize: 16 }} />
                    </View>
                </Stack>
            </ThemedView>
        );
    }
};

export default ServiceActivity;