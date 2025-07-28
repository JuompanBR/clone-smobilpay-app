import { ShimmerImage, ThemedText, ThemedView } from "@/components";
import { useFindService } from "@/hooks";
import { Box, Stack } from "@react-native-material/core";
import { useLocalSearchParams } from "expo-router";

const Service = () => {
    const { id } = useLocalSearchParams();

    const { data, isLoading, error } = useFindService({
        id: id as string,
        queryParams: {
            serviceId: id,
        }
    });

    if (isLoading) return <ThemedText>Loading...</ThemedText>

    if (error) return <ThemedText>An Error Occurred...</ThemedText>

    // Use tanStack to load the necessary data here
    if (data) {
        return (
            <ThemedView style={{ flex: 1 }}>
                <Box w={"100%"} minH={"25%"} bg={'red'}>
                    <Stack justify="center" items="center">
                        <ShimmerImage imgURL={data.logoUrl} title={data.title} />
                    </Stack>
                </Box>
            </ThemedView>
        );
    }
};

export default Service;